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
export interface backendInterface {
    getChapterById(id: bigint): Promise<Chapter>;
    getChapters(): Promise<Array<Chapter>>;
    getInterviewPrepContent(jobRole: string): Promise<InterviewPrepContent>;
    isTopicComplete(topicId: bigint): Promise<boolean>;
    markTopicComplete(topicId: bigint): Promise<void>;
    seedContent(newContent: Content): Promise<void>;
}
