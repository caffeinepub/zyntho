import { Button } from "@/components/ui/button";
import { CheckCircle2, Clock, Send } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { useActor } from "../hooks/useActor";
import { useInvalidateAuth } from "../hooks/useAuthFlow";

interface RequestAccessPageProps {
  alreadyRequested: boolean;
  userName: string;
}

export default function RequestAccessPage({
  alreadyRequested,
  userName,
}: RequestAccessPageProps) {
  const { actor } = useActor();
  const invalidateAuth = useInvalidateAuth();
  const [requesting, setRequesting] = useState(false);
  const [requested, setRequested] = useState(alreadyRequested);

  const handleRequest = async () => {
    if (!actor) return;
    setRequesting(true);
    try {
      await (actor as any).requestApproval();
      setRequested(true);
      toast.success("Access request sent!");
      invalidateAuth();
    } catch {
      toast.error("Failed to send request. Please try again.");
    } finally {
      setRequesting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-background">
      {/* Ambient glows */}
      <div
        className="absolute top-[-10%] left-[20%] w-[400px] h-[400px] rounded-full opacity-10 blur-[100px] pointer-events-none"
        style={{ background: "oklch(0.62 0.22 270)" }}
      />
      <div
        className="absolute bottom-[0%] right-[10%] w-[300px] h-[300px] rounded-full opacity-10 blur-[80px] pointer-events-none"
        style={{ background: "oklch(0.78 0.18 200)" }}
      />

      <AnimatePresence mode="wait">
        {requested ? (
          <motion.div
            key="pending"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="relative z-10 flex flex-col items-center gap-6 w-full max-w-sm px-6"
          >
            <div
              className="h-20 w-20 rounded-full flex items-center justify-center"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.65 0.18 200), oklch(0.72 0.16 180))",
                boxShadow: "0 0 30px oklch(0.78 0.18 200 / 0.4)",
              }}
            >
              <Clock className="h-10 w-10 text-white" />
            </div>

            <div className="text-center">
              <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                Access Requested
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Hi{" "}
                <span className="text-foreground font-medium">{userName}</span>!
                Your access request is under review. The administrator will
                approve your account shortly.
              </p>
            </div>

            <div
              className="w-full rounded-xl border border-border p-5 bg-card"
              style={{
                boxShadow: "0 0 20px oklch(0.78 0.18 200 / 0.1)",
              }}
              data-ocid="access.panel"
            >
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground">
                    Request submitted successfully
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    You'll be notified once your access is approved. Refresh the
                    page to check your status.
                  </p>
                </div>
              </div>
            </div>

            <Button
              data-ocid="access.secondary_button"
              variant="outline"
              onClick={() => window.location.reload()}
              className="w-full border-border"
            >
              Check approval status
            </Button>
          </motion.div>
        ) : (
          <motion.div
            key="request"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 flex flex-col items-center gap-6 w-full max-w-sm px-6"
          >
            <div className="flex flex-col items-center gap-3">
              <img
                src="/assets/generated/zyntho-logo-transparent.dim_64x64.png"
                alt="Zyntho"
                className="h-14 w-14 drop-shadow-[0_0_12px_oklch(0.62_0.22_270/0.8)]"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
              <h1 className="font-display text-3xl font-bold bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                Zyntho
              </h1>
            </div>

            <div
              className="w-full rounded-2xl border border-border bg-card p-8 flex flex-col gap-5"
              style={{
                boxShadow:
                  "0 0 40px oklch(0.62 0.22 270 / 0.12), 0 8px 32px rgba(0,0,0,0.4)",
              }}
            >
              <div className="text-center">
                <h2 className="font-display text-xl font-bold text-foreground">
                  Hello, {userName}!
                </h2>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  Your account is ready. To access the Zyntho platform, please
                  request access from the administrator.
                </p>
              </div>

              <Button
                data-ocid="access.primary_button"
                onClick={handleRequest}
                disabled={requesting}
                className="w-full h-12 text-base font-semibold"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.55 0.22 280), oklch(0.62 0.22 250))",
                  boxShadow: "0 0 20px oklch(0.62 0.22 270 / 0.35)",
                }}
              >
                {requesting ? (
                  <>
                    <span className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white animate-spin mr-2" />
                    Sending request...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5 mr-2" />
                    Request Access
                  </>
                )}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
