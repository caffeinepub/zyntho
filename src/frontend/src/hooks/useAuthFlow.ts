import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useActor } from "./useActor";
import { useInternetIdentity } from "./useInternetIdentity";

export type UserRole = "Admin" | "User";

export interface UserProfile {
  name: string;
}

export type ApprovalStatus = "Pending" | "Approved" | "Rejected";

export interface ApprovalEntry {
  user: unknown;
  status: ApprovalStatus;
  name?: string;
}

function extractOption<T>(val: unknown): T | null {
  if (val === null || val === undefined) return null;
  if (Array.isArray(val)) {
    return val.length > 0 ? (val[0] as T) : null;
  }
  if (typeof val === "object" && "__kind__" in (val as object)) {
    const v = val as { __kind__: string; value?: T };
    return v.__kind__ === "Some" ? (v.value as T) : null;
  }
  return val as T;
}

function extractRole(val: unknown): UserRole {
  if (!val) return "User";
  if (typeof val === "object" && "__kind__" in (val as object)) {
    return (val as { __kind__: string }).__kind__ as UserRole;
  }
  if (typeof val === "string") return val as UserRole;
  return "User";
}

export function useAuthFlow() {
  const { identity, isInitializing } = useInternetIdentity();
  const { actor, isFetching: isActorFetching } = useActor();
  const isLoggedIn = !!identity;
  const actorReady = !!actor && !isActorFetching && isLoggedIn;

  const profileQuery = useQuery({
    queryKey: ["userProfile", identity?.getPrincipal().toString()],
    queryFn: async () => {
      if (!actor) return null;
      const raw = await (actor as any).getCallerUserProfile();
      return extractOption<UserProfile>(raw);
    },
    enabled: actorReady,
    staleTime: 1000 * 60 * 5,
  });

  const roleQuery = useQuery({
    queryKey: ["userRole", identity?.getPrincipal().toString()],
    queryFn: async () => {
      if (!actor) return "User" as UserRole;
      const raw = await (actor as any).getCallerUserRole();
      return extractRole(raw);
    },
    enabled: actorReady,
    staleTime: 1000 * 60 * 5,
  });

  const hasProfile =
    profileQuery.data !== null && profileQuery.data !== undefined;
  const isAdmin = roleQuery.data === "Admin";

  const approvedQuery = useQuery({
    queryKey: ["isApproved", identity?.getPrincipal().toString()],
    queryFn: async () => {
      if (!actor) return false;
      return (actor as any).isCallerApproved() as Promise<boolean>;
    },
    enabled: actorReady && hasProfile,
    staleTime: 1000 * 60 * 2,
  });

  return {
    isInitializing: isInitializing || isActorFetching,
    isLoggedIn,
    profile: profileQuery.data ?? null,
    isProfileLoading: profileQuery.isLoading,
    isApproved: approvedQuery.data === true || isAdmin,
    isApprovedLoading: approvedQuery.isLoading,
    hasProfile,
    isAdmin,
    principalText: identity?.getPrincipal().toString() ?? "",
  };
}

export function useInvalidateAuth() {
  const queryClient = useQueryClient();
  return () => {
    queryClient.invalidateQueries({ queryKey: ["userProfile"] });
    queryClient.invalidateQueries({ queryKey: ["userRole"] });
    queryClient.invalidateQueries({ queryKey: ["isApproved"] });
  };
}
