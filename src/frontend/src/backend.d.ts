import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface UserProfile {
    name: string;
}
export type ApprovalStatus = { __kind__: "approved" } | { __kind__: "rejected" } | { __kind__: "pending" };
export type UserRole = { __kind__: "Admin" } | { __kind__: "User" } | { __kind__: "admin" } | { __kind__: "user" } | { __kind__: "guest" };
export interface AdminUserApprovalInfo {
    user: Principal;
    status: ApprovalStatus;
    name: [] | [string];
}
export interface CallerStatus {
    isAdmin: boolean;
    isApproved: boolean;
    profile: [] | [UserProfile];
}
export interface backendInterface {
    getCallerStatus(): Promise<CallerStatus>;
    saveCallerUserProfile(profile: UserProfile): Promise<void>;
    getAllUserApprovals(): Promise<Array<AdminUserApprovalInfo>>;
    approveUser(user: Principal): Promise<void>;
    rejectUser(user: Principal): Promise<void>;
    _initializeAccessControlWithSecret(secret: string): Promise<void>;
}
