import Map "mo:core/Map";
import Principal "mo:core/Principal";
import Set "mo:core/Set";
import Runtime "mo:core/Runtime";
import Prim "mo:prim";
import Timer "mo:core/Timer";
import AccessControl "./authorization/access-control";
import Approval "./user-approval/approval";

actor {
  // ── Legacy types kept ONLY for stable-variable upgrade compatibility ────────
  // The previous canister version stored chapter/interview content in stable
  // vars. These declarations let Motoko migrate the upgrade safely.
  // The vars are never written or read by any live code.
  type LegacyTopic = { id : Nat; title : Text; notes : Text };
  type LegacyChapter = { id : Nat; title : Text; topics : [LegacyTopic] };
  type LegacyInterviewQuestion = { question : Text; answer : Text };
  type LegacyTimelineEntry = { day : Nat; activity : Text };
  type LegacyInterviewPrepContent = {
    jobRole : Text;
    questions : [LegacyInterviewQuestion];
    twoDayTimeline : [LegacyTimelineEntry];
  };
  type LegacyContent = {
    chapters : [LegacyChapter];
    interviewPrepContent : [LegacyInterviewPrepContent];
  };

  // Preserved stable vars from the previous version -- never used going forward
  var content : ?LegacyContent = null;
  let userProgress = Map.empty<Principal, Set.Set<Nat>>();
  // ── End legacy section ──────────────────────────────────────────────────────

  type UserProfile = { name : Text };

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

  let accessControlState = AccessControl.initState();
  let approvalState = Approval.initState(accessControlState);
  let userProfiles = Map.empty<Principal, UserProfile>();

  // Keep-alive: ping every 60 seconds to prevent cold starts
  let _keepAliveTimer = Timer.recurringTimer<system>(
    #seconds(60),
    func() : async () { }
  );

  func isAdminSafe(caller : Principal) : Bool {
    if (caller.isAnonymous()) { return false };
    switch (accessControlState.userRoles.get(caller)) {
      case (?#admin) { true };
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
    if (not isAdminSafe(caller)) { Runtime.trap("Unauthorized") };
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
    if (not isAdminSafe(caller)) { Runtime.trap("Unauthorized") };
    Approval.setApproval(approvalState, user, #approved);
  };

  public shared ({ caller }) func rejectUser(user : Principal) : async () {
    if (not isAdminSafe(caller)) { Runtime.trap("Unauthorized") };
    Approval.setApproval(approvalState, user, #rejected);
  };
};
