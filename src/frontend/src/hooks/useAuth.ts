/**
 * useAuth.ts — Fast auth hook that bypasses useActor entirely.
 *
 * KEY OPTIMISATION: useActor.ts (read-only) always calls
 * _initializeAccessControlWithSecret for every user, which is a slow
 * blockchain UPDATE call (2-5 s). This hook creates its own actor via
 * createActorWithConfig and skips that call for non-admin users.
 */

import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useCallback } from "react";
import { createActorWithConfig } from "../config";
import { useInternetIdentity } from "./useInternetIdentity";

export interface UserProfile {
  name: string;
}

interface RawCallerStatus {
  isAdmin: boolean;
  isApproved: boolean;
  profile: [] | [{ name: string }];
}

function parseProfile(
  raw: [] | [{ name: string }] | undefined,
): UserProfile | null {
  if (!raw || !Array.isArray(raw)) return null;
  return raw.length > 0 ? (raw[0] as UserProfile) : null;
}

function getAdminToken(): string {
  try {
    return (
      new URLSearchParams(window.location.hash.slice(1)).get("adminToken") ?? ""
    );
  } catch {
    return "";
  }
}

export function useAuth() {
  const { identity, isInitializing } = useInternetIdentity();
  const isLoggedIn = !!identity;

  const statusQuery = useQuery({
    queryKey: ["authStatus", identity?.getPrincipal().toString() ?? "anon"],
    queryFn: async (): Promise<RawCallerStatus> => {
      // Create actor with the user's identity but WITHOUT calling
      // _initializeAccessControlWithSecret (avoids 2-5 s update call)
      const actorOptions = identity
        ? { agentOptions: { identity } }
        : undefined;
      const actor = await createActorWithConfig(actorOptions);

      // Admin flow: only call the slow update when the admin token is present
      const adminToken = getAdminToken();
      if (adminToken) {
        await (actor as any)._initializeAccessControlWithSecret(adminToken);
      }

      return (actor as any).getCallerStatus() as Promise<RawCallerStatus>;
    },
    enabled: !isInitializing,
    staleTime: 0,
    gcTime: 0,
    refetchOnMount: "always",
    refetchOnWindowFocus: true,
    retry: 3,
    retryDelay: 4000,
  });

  const profile = parseProfile(statusQuery.data?.profile);
  const isAdmin = statusQuery.data?.isAdmin === true;
  const isApproved = statusQuery.data?.isApproved === true;
  const statusLoaded = statusQuery.isSuccess;
  const isStatusLoading =
    !isInitializing &&
    !statusLoaded &&
    (statusQuery.isLoading || statusQuery.isFetching);

  return {
    isInitializing,
    isLoggedIn,
    profile,
    hasProfile: !!profile,
    isApproved,
    isAdmin,
    statusLoaded,
    isStatusLoading,
    principalText: identity?.getPrincipal().toString() ?? "",
  };
}

export function useInvalidateAuth() {
  const queryClient = useQueryClient();
  return useCallback(() => {
    queryClient.removeQueries({ queryKey: ["authStatus"] });
    queryClient.invalidateQueries({ queryKey: ["authStatus"] });
  }, [queryClient]);
}
