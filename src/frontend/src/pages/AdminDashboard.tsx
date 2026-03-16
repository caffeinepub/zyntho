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
import { useActor } from "../hooks/useActor";

type StatusKind = "Approved" | "Pending" | "Rejected";

function extractStatus(status: unknown): StatusKind {
  if (!status) return "Pending";
  if (typeof status === "object" && "__kind__" in (status as object)) {
    return (status as { __kind__: string }).__kind__ as StatusKind;
  }
  if (typeof status === "string") return status as StatusKind;
  return "Pending";
}

export default function AdminDashboard() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  const { data: approvals = [], isLoading } = useQuery({
    queryKey: ["adminApprovals"],
    queryFn: async () => {
      if (!actor) return [];
      return (actor as any).listApprovals() as Promise<
        Array<{ user: unknown; status: unknown; name?: string[] }>
      >;
    },
    enabled: !!actor,
    refetchInterval: 15000,
  });

  const setApprovalMutation = useMutation({
    mutationFn: async ({
      user,
      status,
    }: {
      user: unknown;
      status: StatusKind;
    }) => {
      if (!actor) throw new Error("No actor");
      const statusArg =
        typeof status === "string" ? { __kind__: status } : status;
      await (actor as any).setApproval(user, statusArg);
    },
    onSuccess: (_, { status }) => {
      toast.success(`User ${status.toLowerCase()} successfully`);
      queryClient.invalidateQueries({ queryKey: ["adminApprovals"] });
    },
    onError: () => toast.error("Action failed. Please try again."),
  });

  const pendingCount = approvals.filter(
    (a) => extractStatus(a.status) === "Pending",
  ).length;

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
                    : entry.name;
                  const principalStr =
                    typeof entry.user === "object" &&
                    entry.user !== null &&
                    "toString" in entry.user
                      ? (entry.user as any).toString()
                      : String(entry.user);
                  const ocidIdx = idx + 1;

                  return (
                    <TableRow
                      key={principalStr}
                      className="border-border"
                      data-ocid={`admin.row.${ocidIdx}`}
                    >
                      <TableCell className="text-muted-foreground text-sm">
                        {ocidIdx}
                      </TableCell>
                      <TableCell className="font-medium">
                        {nameVal || (
                          <span className="text-muted-foreground italic">
                            Unknown
                          </span>
                        )}
                      </TableCell>
                      <TableCell
                        className="font-mono text-xs text-muted-foreground max-w-[180px] truncate"
                        title={principalStr}
                      >
                        {principalStr}
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
                              onClick={() =>
                                setApprovalMutation.mutate({
                                  user: entry.user,
                                  status: "Approved",
                                })
                              }
                              disabled={setApprovalMutation.isPending}
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
                              onClick={() =>
                                setApprovalMutation.mutate({
                                  user: entry.user,
                                  status: "Rejected",
                                })
                              }
                              disabled={setApprovalMutation.isPending}
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
