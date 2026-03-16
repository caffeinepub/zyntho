import Map "mo:core/Map";
import Principal "mo:core/Principal";
import Set "mo:core/Set";
import Runtime "mo:core/Runtime";
import Iter "mo:core/Iter";

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

  var content : ?Content = null;
  let userProgress = Map.empty<Principal, Set.Set<Nat>>();

  // Admin function to seed platform data (idempotent: silently skips if already seeded)
  public shared ({ caller }) func seedContent(newContent : Content) : async () {
    if (content == null) {
      content := ?newContent;
    };
  };

  // Get all chapters (returns [] if not yet seeded)
  public query ({ caller }) func getChapters() : async [Chapter] {
    switch (content) {
      case (null) { [] };
      case (?content) { content.chapters };
    };
  };

  // Get chapter by id
  public query ({ caller }) func getChapterById(id : Nat) : async Chapter {
    switch (content) {
      case (null) { Runtime.trap("Content not seeded") };
      case (?content) {
        let chapters = content.chapters.values();
        switch (chapters.find(func(chapter) { chapter.id == id })) {
          case (null) { Runtime.trap("Chapter not found") };
          case (?chapter) { chapter };
        };
      };
    };
  };

  // Mark topic as complete for current user
  public shared ({ caller }) func markTopicComplete(topicId : Nat) : async () {
    let currentProgress = switch (userProgress.get(caller)) {
      case (null) { Set.empty<Nat>() };
      case (?progress) { progress };
    };

    currentProgress.add(topicId);
    userProgress.add(caller, currentProgress);
  };

  // Check if topic is complete for current user
  public query ({ caller }) func isTopicComplete(topicId : Nat) : async Bool {
    switch (userProgress.get(caller)) {
      case (null) { false };
      case (?progress) { progress.contains(topicId) };
    };
  };

  // Get interview prep content by job role
  public query ({ caller }) func getInterviewPrepContent(jobRole : Text) : async InterviewPrepContent {
    switch (content) {
      case (null) { Runtime.trap("Content not seeded") };
      case (?content) {
        let contentIter = content.interviewPrepContent.values();
        switch (contentIter.find(func(interviewContent) { interviewContent.jobRole == jobRole })) {
          case (null) { Runtime.trap("Interview prep content not found") };
          case (?interviewContent) { interviewContent };
        };
      };
    };
  };
};
