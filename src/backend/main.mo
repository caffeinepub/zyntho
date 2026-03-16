import Map "mo:core/Map";
import Principal "mo:core/Principal";
import Set "mo:core/Set";
import Runtime "mo:core/Runtime";
import Prim "mo:prim";
import Timer "mo:core/Timer";
import AccessControl "./authorization/access-control";
import Approval "./user-approval/approval";

actor {
  type Content = {
    chapters : [Chapter];
    interviewPrepContent : [InterviewPrepContent];
  };

  type Chapter = {
    id : Nat;
    title : Text;
    topics : [Topic];
  };

  type Topic = {
    id : Nat;
    title : Text;
    notes : Text;
  };

  type InterviewPrepContent = {
    jobRole : Text;
    questions : [InterviewQuestion];
    twoDayTimeline : [TimelineEntry];
  };

  type InterviewQuestion = {
    question : Text;
    answer : Text;
  };

  type TimelineEntry = {
    day : Nat;
    activity : Text;
  };

  type UserProfile = {
    name : Text;
  };

  // Single atomic status returned to the frontend -- eliminates all race conditions
  type CallerStatus = {
    isAdmin : Bool;
    isApproved : Bool;
    profile : ?UserProfile;
  };

  type AdminUserApprovalInfo = {
    user : Principal;
    status : Approval.ApprovalStatus;
    name : ?Text;
  };

  var content : ?Content = null;
  let userProgress = Map.empty<Principal, Set.Set<Nat>>();
  let accessControlState = AccessControl.initState();
  let approvalState = Approval.initState(accessControlState);
  let userProfiles = Map.empty<Principal, UserProfile>();

  // Keep-alive: ping every 60 seconds to prevent cold starts
  let _keepAliveTimer = Timer.recurringTimer<system>(
    #seconds(60),
    func() : async () { }
  );

  // Internal helper: checks admin without trapping on unregistered users
  func isAdminSafe(caller : Principal) : Bool {
    if (caller.isAnonymous()) { return false };
    switch (accessControlState.userRoles.get(caller)) {
      case (?#admin) { true };
      case (_) { false };
    };
  };

  // Internal helper: returns true only if the caller is approved OR is admin
  func isAuthorizedCaller(caller : Principal) : Bool {
    if (caller.isAnonymous()) { return false };
    if (isAdminSafe(caller)) { return true };
    switch (approvalState.approvalStatus.get(caller)) {
      case (?#approved) { true };
      case (_) { false };
    };
  };

  public shared ({ caller }) func _initializeAccessControlWithSecret(userSecret : Text) : async () {
    switch (Prim.envVar<system>("CAFFEINE_ADMIN_TOKEN")) {
      case (null) { Runtime.trap("CAFFEINE_ADMIN_TOKEN not set") };
      case (?adminToken) {
        AccessControl.initialize(accessControlState, caller, adminToken, userSecret);
        Approval.setApproval(approvalState, caller, #approved);
      };
    };
  };

  // SINGLE ATOMIC STATUS CALL -- frontend uses ONLY this for auth gating.
  public query ({ caller }) func getCallerStatus() : async CallerStatus {
    if (caller.isAnonymous()) {
      return { isAdmin = false; isApproved = false; profile = null };
    };
    let isAdm = isAdminSafe(caller);
    let isApp = if (isAdm) {
      true
    } else {
      switch (approvalState.approvalStatus.get(caller)) {
        case (?#approved) { true };
        case (_) { false };
      };
    };
    let prof = userProfiles.get(caller);
    { isAdmin = isAdm; isApproved = isApp; profile = prof };
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (caller.isAnonymous()) { Runtime.trap("Anonymous users cannot save profiles") };
    userProfiles.add(caller, profile);
    switch (accessControlState.userRoles.get(caller)) {
      case (null) { accessControlState.userRoles.add(caller, #user) };
      case (?_) {};
    };
    if (approvalState.approvalStatus.get(caller) == null) {
      Approval.setApproval(approvalState, caller, #pending);
    };
  };

  public query ({ caller }) func getAllUserApprovals() : async [AdminUserApprovalInfo] {
    if (not isAdminSafe(caller)) {
      Runtime.trap("Unauthorized");
    };
    approvalState.approvalStatus.entries().map(
      func((principal, status)) : AdminUserApprovalInfo {
        let name = switch (userProfiles.get(principal)) {
          case (?p) { ?p.name };
          case (null) { null };
        };
        { user = principal; status; name };
      }
    ).toArray();
  };

  public shared ({ caller }) func approveUser(user : Principal) : async () {
    if (not isAdminSafe(caller)) {
      Runtime.trap("Unauthorized");
    };
    Approval.setApproval(approvalState, user, #approved);
  };

  public shared ({ caller }) func rejectUser(user : Principal) : async () {
    if (not isAdminSafe(caller)) {
      Runtime.trap("Unauthorized");
    };
    Approval.setApproval(approvalState, user, #rejected);
  };

  public shared ({ caller }) func seedContent(newContent : Content) : async () {
    if (content == null) {
      content := ?newContent;
    };
  };

  public query ({ caller }) func getChapters() : async [Chapter] {
    if (not isAuthorizedCaller(caller)) {
      Runtime.trap("Access denied: awaiting admin approval");
    };
    switch (content) {
      case (null) { [] };
      case (?c) { c.chapters };
    };
  };

  public query ({ caller }) func getChapterById(id : Nat) : async Chapter {
    if (not isAuthorizedCaller(caller)) {
      Runtime.trap("Access denied: awaiting admin approval");
    };
    switch (content) {
      case (null) { Runtime.trap("Content not seeded") };
      case (?c) {
        switch (c.chapters.values().find(func(ch) { ch.id == id })) {
          case (null) { Runtime.trap("Chapter not found") };
          case (?ch) { ch };
        };
      };
    };
  };

  public shared ({ caller }) func markTopicComplete(topicId : Nat) : async () {
    if (not isAuthorizedCaller(caller)) {
      Runtime.trap("Access denied: awaiting admin approval");
    };
    let current = switch (userProgress.get(caller)) {
      case (null) { Set.empty<Nat>() };
      case (?p) { p };
    };
    current.add(topicId);
    userProgress.add(caller, current);
  };

  public query ({ caller }) func isTopicComplete(topicId : Nat) : async Bool {
    switch (userProgress.get(caller)) {
      case (null) { false };
      case (?p) { p.contains(topicId) };
    };
  };

  public query ({ caller }) func getInterviewPrepContent(jobRole : Text) : async InterviewPrepContent {
    if (not isAuthorizedCaller(caller)) {
      Runtime.trap("Access denied: awaiting admin approval");
    };
    switch (content) {
      case (null) { Runtime.trap("Content not seeded") };
      case (?c) {
        switch (c.interviewPrepContent.values().find(func(ic) { ic.jobRole == jobRole })) {
          case (null) { Runtime.trap("Interview prep not found") };
          case (?ic) { ic };
        };
      };
    };
  };
};
