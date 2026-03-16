import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useActor } from "./useActor";
import { useInternetIdentity } from "./useInternetIdentity";

export interface UserProfile {
  name: string;
}

// Raw shape returned by the backend getCallerStatus query
interface RawCallerStatus {
  isAdmin: boolean;
  isApproved: boolean;
  // Motoko ?UserProfile serialises as [] | [{ name: string }]
  profile: [] | [{ name: string }];
}

function parseProfile(
  raw: [] | [{ name: string }] | undefined,
): UserProfile | null {
  if (!raw) return null;
  if (Array.isArray(raw))
    return raw.length > 0 ? (raw[0] as UserProfile) : null;
  return null;
}

export function useAuthFlow() {
  const { identity, isInitializing } = useInternetIdentity();
  const { actor, isFetching: isActorFetching } = useActor();
  const isLoggedIn = !!identity;
  const actorReady = !!actor && !isActorFetching && isLoggedIn;

  // SINGLE atomic query -- replaces all previous separate role/admin/approval queries.
  // staleTime: 0 + gcTime: 0 guarantees the backend is ALWAYS the source of truth.
  // No custom timeout -- let the ICP agent handle its own timeout naturally.
  // Cold starts can take 30-60 seconds; cutting off at 12s just causes harmful retries.
  const statusQuery = useQuery({
    queryKey: ["callerStatus", identity?.getPrincipal().toString()],
    queryFn: async (): Promise<RawCallerStatus> => {
      if (!actor) throw new Error("No actor");
      return (actor as any).getCallerStatus() as Promise<RawCallerStatus>;
    },
    enabled: actorReady,
    staleTime: 0,
    gcTime: 0,
    refetchOnMount: "always",
    refetchOnWindowFocus: true,
    retry: 2,
    retryDelay: 5000,
  });

  const profile = parseProfile(statusQuery.data?.profile);
  const hasProfile = !!profile;
  // Only true when backend EXPLICITLY returns true -- never default to true
  const isAdmin = statusQuery.data?.isAdmin === true;
  const isApproved = statusQuery.data?.isApproved === true;
  // Loading while actor is being set up OR the status query is in flight
  const isStatusLoading =
    actorReady && (statusQuery.isLoading || statusQuery.isFetching);

  return {
    isInitializing: isInitializing || isActorFetching,
    isLoggedIn,
    profile,
    isProfileLoading: isStatusLoading,
    isApproved,
    isApprovedLoading: isStatusLoading,
    hasProfile,
    isAdmin,
    principalText: identity?.getPrincipal().toString() ?? "",
    statusLoaded: statusQuery.isSuccess,
  };
}

export function useInvalidateAuth() {
  const queryClient = useQueryClient();
  return () => {
    // Remove all cached auth status so the next render fetches fresh from backend
    queryClient.removeQueries({ queryKey: ["callerStatus"] });
    queryClient.invalidateQueries({ queryKey: ["callerStatus"] });
  };
}
