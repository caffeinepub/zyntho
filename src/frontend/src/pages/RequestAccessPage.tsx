import { Button } from "@/components/ui/button";
import { CheckCircle2, Clock } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect } from "react";

interface RequestAccessPageProps {
  alreadyRequested: boolean;
  userName: string;
}

export default function RequestAccessPage({
  userName,
}: RequestAccessPageProps) {
  // Auto-refresh every 30 seconds to check approval status
  useEffect(() => {
    const interval = setInterval(() => {
      window.location.reload();
    }, 30000);
    return () => clearInterval(interval);
  }, []);

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
              Hi <span className="text-foreground font-medium">{userName}</span>
              ! Your access request is under review. The administrator will
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

          <div className="w-full flex flex-col items-center gap-2">
            <Button
              data-ocid="access.secondary_button"
              variant="outline"
              onClick={() => window.location.reload()}
              className="w-full border-border"
            >
              Check approval status
            </Button>
            <p className="text-xs text-muted-foreground/60">
              Auto-checking every 30 seconds...
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
