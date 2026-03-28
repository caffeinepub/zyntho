import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { CheckCircle, Clock, RefreshCw, Shield, XCircle } from "lucide-react";
import { motion } from "motion/react";
import { toast } from "sonner";
import { createActorWithConfig } from "../config";
import { useInternetIdentity } from "../hooks/useInternetIdentity";

type StatusKind = "Approved" | "Pending" | "Rejected";

function extractStatus(status: unknown): StatusKind {
  if (!status) return "Pending";
  if (typeof status === "object" && status !== null) {
    const obj = status as Record<string, unknown>;
    if ("approved" in obj || "Approved" in obj) return "Approved";
    if ("rejected" in obj || "Rejected" in obj) return "Rejected";
    if ("pending" in obj || "Pending" in obj) return "Pending";
    if ("__kind__" in obj) {
      const kind = (obj.__kind__ as string).toLowerCase();
      if (kind === "approved") return "Approved";
      if (kind === "rejected") return "Rejected";
      return "Pending";
    }
  }
  if (typeof status === "string") {
    const lower = status.toLowerCase();
    if (lower === "approved") return "Approved";
    if (lower === "rejected") return "Rejected";
  }
  return "Pending";
}

const STATUS_ORDER: Record<StatusKind, number> = {
  Pending: 0,
  Approved: 1,
  Rejected: 2,
};

function getAdminToken(): string {
  try {
    return (
      new URLSearchParams(window.location.hash.slice(1)).get("adminToken") ?? ""
    );
  } catch {
    return "";
  }
}

export default function AdminDashboard() {
  const { identity } = useInternetIdentity();
  const queryClient = useQueryClient();

  // Create a dedicated admin actor (with identity, no re-initialization needed
  // since useAuth already called _initializeAccessControlWithSecret on login)
  const { data: actor } = useQuery({
    queryKey: ["adminActor", identity?.getPrincipal().toString()],
    queryFn: async () => {
      if (!identity) throw new Error("No identity");
      const actor = await createActorWithConfig({ agentOptions: { identity } });
      // Only call init if admin token is present (already done by useAuth, but safe to repeat)
      const adminToken = getAdminToken();
      if (adminToken) {
        await (actor as any)._initializeAccessControlWithSecret(adminToken);
      }
      return actor;
    },
    enabled: !!identity,
    staleTime: Number.POSITIVE_INFINITY,
  });

  const { data: rawApprovals = [], isLoading } = useQuery({
    queryKey: ["adminApprovals"],
    queryFn: async () => {
      if (!actor) return [];
      return (actor as any).getAllUserApprovals() as Promise<
        Array<{ user: unknown; status: unknown; name: [] | [string] }>
      >;
    },
    enabled: !!actor,
    refetchInterval: 10000,
  });

  // Sort: Pending first, then Approved, then Rejected
  const approvals = [...rawApprovals].sort(
    (a, b) =>
      STATUS_ORDER[extractStatus(a.status)] -
      STATUS_ORDER[extractStatus(b.status)],
  );

  const approveMutation = useMutation({
    mutationFn: async (user: unknown) => {
      if (!actor) throw new Error("No actor");
      await (actor as any).approveUser(user);
    },
    onSuccess: () => {
      toast.success("User approved successfully");
      queryClient.invalidateQueries({ queryKey: ["adminApprovals"] });
    },
    onError: (err) => {
      console.error("Approve error:", err);
      toast.error("Failed to approve. Please try again.");
    },
  });

  const rejectMutation = useMutation({
    mutationFn: async (user: unknown) => {
      if (!actor) throw new Error("No actor");
      await (actor as any).rejectUser(user);
    },
    onSuccess: () => {
      toast.success("User rejected.");
      queryClient.invalidateQueries({ queryKey: ["adminApprovals"] });
    },
    onError: (err) => {
      console.error("Reject error:", err);
      toast.error("Failed to reject. Please try again.");
    },
  });

  const pendingItems = approvals.filter(
    (a) => extractStatus(a.status) === "Pending",
  );
  const pendingCount = pendingItems.length;
  const isMutating = approveMutation.isPending || rejectMutation.isPending;

  return (
    <main className="flex-1 max-w-5xl mx-auto px-4 py-10 w-full">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <div
              className="h-10 w-10 rounded-xl flex items-center justify-center"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.55 0.22 280), oklch(0.62 0.22 250))",
                boxShadow: "0 0 16px oklch(0.62 0.22 270 / 0.4)",
              }}
            >
              <Shield className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="font-display text-2xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                Admin Dashboard
              </h1>
              <p className="text-sm text-muted-foreground">
                Manage user access requests
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {pendingCount > 0 && (
              <Badge
                variant="secondary"
                className="bg-amber-500/20 text-amber-300 border-amber-500/30"
              >
                {pendingCount} pending
              </Badge>
            )}
            <Button
              data-ocid="admin.secondary_button"
              variant="outline"
              size="sm"
              onClick={() =>
                queryClient.invalidateQueries({ queryKey: ["adminApprovals"] })
              }
              className="border-border gap-2"
            >
              <RefreshCw className="h-3.5 w-3.5" />
              Refresh
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            {
              label: "Total Requests",
              count: approvals.length,
              color: "oklch(0.62 0.22 270)",
            },
            {
              label: "Approved",
              count: approvals.filter(
                (a) => extractStatus(a.status) === "Approved",
              ).length,
              color: "oklch(0.70 0.20 150)",
            },
            {
              label: "Pending",
              count: pendingCount,
              color: "oklch(0.75 0.18 80)",
            },
          ].map(({ label, count, color }) => (
            <div
              key={label}
              className="rounded-xl border border-border bg-card p-4 text-center"
              style={{ boxShadow: `0 0 16px ${color}18` }}
            >
              <p className="font-display text-3xl font-bold" style={{ color }}>
                {count}
              </p>
              <p className="text-xs text-muted-foreground mt-1">{label}</p>
            </div>
          ))}
        </div>

        {/* Pending section callout */}
        {pendingCount > 0 && (
          <div className="mb-4 flex items-center gap-2 rounded-lg border border-amber-500/30 bg-amber-500/10 px-4 py-3">
            <Clock className="h-4 w-4 text-amber-400 shrink-0" />
            <p className="text-sm text-amber-300 font-medium">
              {pendingCount} user{pendingCount > 1 ? "s" : ""} waiting for your
              approval
            </p>
          </div>
        )}

        {/* Table */}
        <div
          className="rounded-xl border border-border bg-card overflow-hidden"
          style={{ boxShadow: "0 0 30px oklch(0.62 0.22 270 / 0.08)" }}
          data-ocid="admin.table"
        >
          {isLoading ? (
            <div
              className="flex items-center justify-center h-40"
              data-ocid="admin.loading_state"
            >
              <span className="h-6 w-6 rounded-full border-2 border-primary/30 border-t-primary animate-spin" />
            </div>
          ) : approvals.length === 0 ? (
            <div
              className="flex flex-col items-center justify-center h-40 gap-3"
              data-ocid="admin.empty_state"
            >
              <Clock className="h-8 w-8 text-muted-foreground/40" />
              <p className="text-sm text-muted-foreground">
                No access requests yet
              </p>
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow className="border-border hover:bg-transparent">
                  <TableHead className="text-muted-foreground">#</TableHead>
                  <TableHead className="text-muted-foreground">Name</TableHead>
                  <TableHead className="text-muted-foreground">
                    Principal
                  </TableHead>
                  <TableHead className="text-muted-foreground">
                    Status
                  </TableHead>
                  <TableHead className="text-muted-foreground text-right">
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {approvals.map((entry, idx) => {
                  const status = extractStatus(entry.status);
                  const nameVal = Array.isArray(entry.name)
                    ? entry.name[0]
                    : (entry.name as string | undefined);
                  const principalStr =
                    entry.user != null &&
                    typeof entry.user === "object" &&
                    "toString" in entry.user
                      ? (entry.user as { toString(): string }).toString()
                      : String(entry.user ?? "");
                  const ocidIdx = idx + 1;

                  return (
                    <TableRow
                      key={principalStr || ocidIdx}
                      className={`border-border ${
                        status === "Pending"
                          ? "bg-amber-500/5 hover:bg-amber-500/10"
                          : ""
                      }`}
                      data-ocid={`admin.row.${ocidIdx}`}
                    >
                      <TableCell className="text-muted-foreground text-sm">
                        {ocidIdx}
                      </TableCell>
                      <TableCell className="font-medium">
                        {nameVal ? (
                          <span className="flex items-center gap-2">
                            {nameVal}
                            {status === "Pending" && (
                              <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                            )}
                          </span>
                        ) : (
                          <span className="text-muted-foreground italic">
                            Unknown
                          </span>
                        )}
                      </TableCell>
                      <TableCell
                        className="font-mono text-xs text-muted-foreground max-w-[180px] truncate"
                        title={principalStr}
                      >
                        {principalStr || "—"}
                      </TableCell>
                      <TableCell>
                        <StatusBadge status={status} />
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end gap-2">
                          {status !== "Approved" && (
                            <Button
                              data-ocid={`admin.confirm_button.${ocidIdx}`}
                              size="sm"
                              onClick={() => approveMutation.mutate(entry.user)}
                              disabled={isMutating}
                              className="h-7 text-xs gap-1.5 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/30"
                              variant="ghost"
                            >
                              <CheckCircle className="h-3.5 w-3.5" />
                              Approve
                            </Button>
                          )}
                          {status !== "Rejected" && (
                            <Button
                              data-ocid={`admin.delete_button.${ocidIdx}`}
                              size="sm"
                              onClick={() => rejectMutation.mutate(entry.user)}
                              disabled={isMutating}
                              className="h-7 text-xs gap-1.5 bg-red-600/20 hover:bg-red-600/30 text-red-300 border border-red-500/30"
                              variant="ghost"
                            >
                              <XCircle className="h-3.5 w-3.5" />
                              Reject
                            </Button>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          )}
        </div>
      </motion.div>
    </main>
  );
}

function StatusBadge({ status }: { status: StatusKind }) {
  if (status === "Approved")
    return (
      <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30 gap-1">
        <CheckCircle className="h-3 w-3" />
        Approved
      </Badge>
    );
  if (status === "Rejected")
    return (
      <Badge className="bg-red-500/20 text-red-300 border-red-500/30 gap-1">
        <XCircle className="h-3 w-3" />
        Rejected
      </Badge>
    );
  return (
    <Badge className="bg-amber-500/20 text-amber-300 border-amber-500/30 gap-1">
      <Clock className="h-3 w-3" />
      Pending
    </Badge>
  );
}
