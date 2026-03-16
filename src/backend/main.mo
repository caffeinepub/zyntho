import Map "mo:core/Map";
import Principal "mo:core/Principal";
import Set "mo:core/Set";
import Runtime "mo:core/Runtime";
import Prim "mo:prim";
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

  // Internal helper: returns true only if the caller is approved OR is admin
  func isAuthorizedCaller(caller : Principal) : Bool {
    if (caller.isAnonymous()) { return false };
    if (AccessControl.isAdmin(accessControlState, caller)) { return true };
    Approval.isApproved(approvalState, caller);
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

  public query ({ caller }) func getCallerUserRole() : async AccessControl.UserRole {
    if (caller.isAnonymous()) { return #guest };
    switch (accessControlState.userRoles.get(caller)) {
      case (?role) { role };
      case (null) { #guest };
    };
  };

  public query ({ caller }) func isCallerAdmin() : async Bool {
    AccessControl.isAdmin(accessControlState, caller);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (caller.isAnonymous()) { Runtime.trap("Anonymous users cannot save profiles") };
    userProfiles.add(caller, profile);
    switch (accessControlState.userRoles.get(caller)) {
      case (null) { accessControlState.userRoles.add(caller, #user) };
      case (?_) {};
    };
    // Only set pending if no approval status exists yet.
    // Never auto-approve: pending users must wait for admin action.
    if (approvalState.approvalStatus.get(caller) == null) {
      Approval.setApproval(approvalState, caller, #pending);
    };
  };

  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    userProfiles.get(caller);
  };

  public query ({ caller }) func isCallerApproved() : async Bool {
    if (caller.isAnonymous()) { return false };
    // Admin always counts as approved
    if (AccessControl.isAdmin(accessControlState, caller)) { return true };
    // For everyone else, must be explicitly #approved — pending/rejected/missing = false
    switch (approvalState.approvalStatus.get(caller)) {
      case (?#approved) { true };
      case (_) { false };
    };
  };

  public shared ({ caller }) func requestApproval() : async () {
    if (caller.isAnonymous()) { Runtime.trap("Anonymous users cannot request approval") };
    if (approvalState.approvalStatus.get(caller) == null) {
      Approval.setApproval(approvalState, caller, #pending);
    };
  };

  public query ({ caller }) func getAllUserApprovals() : async [AdminUserApprovalInfo] {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
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
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized");
    };
    Approval.setApproval(approvalState, user, #approved);
  };

  public shared ({ caller }) func rejectUser(user : Principal) : async () {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized");
    };
    Approval.setApproval(approvalState, user, #rejected);
  };

  public shared ({ caller }) func seedContent(newContent : Content) : async () {
    if (content == null) {
      content := ?newContent;
    };
  };

  // Content endpoints are gated: only admin or approved users can read content.
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
