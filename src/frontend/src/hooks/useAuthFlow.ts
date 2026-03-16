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

// Motoko variants serialize as { admin: null }, { user: null }, { guest: null }
function extractRole(val: unknown): UserRole {
  if (!val) return "User";
  if (typeof val === "object") {
    const obj = val as Record<string, unknown>;
    // Motoko variant format: { admin: null } or { user: null }
    if ("admin" in obj || "Admin" in obj) return "Admin";
    if ("user" in obj || "User" in obj) return "User";
    // Fallback: __kind__ format
    if ("__kind__" in obj) {
      const kind = (obj.__kind__ as string).toLowerCase();
      if (kind === "admin") return "Admin";
    }
  }
  if (typeof val === "string") {
    if (val.toLowerCase() === "admin") return "Admin";
  }
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
      if (raw === null || raw === undefined) return null;
      if (Array.isArray(raw))
        return raw.length > 0 ? (raw[0] as UserProfile) : null;
      return raw as UserProfile;
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

  // Also use isCallerAdmin as a fallback to confirm admin status
  const adminCheckQuery = useQuery({
    queryKey: ["isCallerAdmin", identity?.getPrincipal().toString()],
    queryFn: async () => {
      if (!actor) return false;
      return (actor as any).isCallerAdmin() as Promise<boolean>;
    },
    enabled: actorReady,
    staleTime: 1000 * 60 * 5,
  });

  const hasProfile =
    profileQuery.data !== null && profileQuery.data !== undefined;
  const isAdmin = roleQuery.data === "Admin" || adminCheckQuery.data === true;

  // SECURITY: staleTime:0 + gcTime:0 + refetchOnMount ensures approval status
  // is ALWAYS freshly fetched from the backend on every mount/login.
  // No caching means a pending user can never slip through with a stale "approved" value.
  const approvedQuery = useQuery({
    queryKey: ["isApproved", identity?.getPrincipal().toString()],
    queryFn: async () => {
      if (!actor) return false;
      return (actor as any).isCallerApproved() as Promise<boolean>;
    },
    enabled: actorReady && hasProfile && !isAdmin,
    staleTime: 0, // Never use cached approval status
    gcTime: 0, // Don't keep stale approval data in memory
    refetchOnMount: "always",
    refetchOnWindowFocus: true,
  });

  // isApprovedLoading is true when:
  // 1. The query is actively fetching (isLoading)
  // 2. OR the query should run (actorReady + hasProfile + not admin) but data isn't available yet
  const approvalShouldRun = actorReady && hasProfile && !isAdmin;
  const isApprovedLoading =
    approvedQuery.isLoading ||
    (approvalShouldRun &&
      approvedQuery.data === undefined &&
      !approvedQuery.isError);

  // A user is approved only if:
  // - They are the admin (bypasses approval entirely), OR
  // - The backend EXPLICITLY returned true for isCallerApproved
  // undefined or false both mean NOT approved.
  const isApproved = isAdmin || approvedQuery.data === true;

  return {
    isInitializing: isInitializing || isActorFetching,
    isLoggedIn,
    profile: profileQuery.data ?? null,
    isProfileLoading: profileQuery.isLoading,
    isApproved,
    isApprovedLoading,
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
    queryClient.invalidateQueries({ queryKey: ["isCallerAdmin"] });
    // Also remove the approval cache entirely so next check is always fresh
    queryClient.removeQueries({ queryKey: ["isApproved"] });
  };
}
