import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Topic {
    id: bigint;
    title: string;
    notes: string;
}
export interface InterviewPrepContent {
    jobRole: string;
    questions: Array<InterviewQuestion>;
    twoDayTimeline: Array<TimelineEntry>;
}
export interface TimelineEntry {
    day: bigint;
    activity: string;
}
export interface InterviewQuestion {
    question: string;
    answer: string;
}
export interface Content {
    interviewPrepContent: Array<InterviewPrepContent>;
    chapters: Array<Chapter>;
}
export interface Chapter {
    id: bigint;
    title: string;
    topics: Array<Topic>;
}
export interface UserProfile {
    name: string;
}
export type ApprovalStatus = { __kind__: "approved" } | { __kind__: "rejected" } | { __kind__: "pending" };
export type UserRole = { __kind__: "Admin" } | { __kind__: "User" } | { __kind__: "admin" } | { __kind__: "user" } | { __kind__: "guest" };
export interface UserApprovalInfo {
    principal: Principal;
    status: ApprovalStatus;
}
export interface backendInterface {
    getChapterById(id: bigint): Promise<Chapter>;
    getChapters(): Promise<Array<Chapter>>;
    getInterviewPrepContent(jobRole: string): Promise<InterviewPrepContent>;
    isTopicComplete(topicId: bigint): Promise<boolean>;
    markTopicComplete(topicId: bigint): Promise<void>;
    seedContent(newContent: Content): Promise<void>;
    saveCallerUserProfile(profile: UserProfile): Promise<void>;
    getCallerUserProfile(): Promise<UserProfile | null>;
    getCallerUserRole(): Promise<UserRole>;
    isCallerApproved(): Promise<boolean>;
    isCallerAdmin(): Promise<boolean>;
    requestApproval(): Promise<void>;
    getAllUserApprovals(): Promise<Array<UserApprovalInfo>>;
    approveUser(user: Principal): Promise<void>;
    rejectUser(user: Principal): Promise<void>;
    _initializeAccessControlWithSecret(secret: string): Promise<void>;
}
