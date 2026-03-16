import { Button } from "@/components/ui/button";
import { BookOpen, LogIn, Shield, Users } from "lucide-react";
import { motion } from "motion/react";
import { useInternetIdentity } from "../hooks/useInternetIdentity";

export default function LoginPage() {
  const { login, isLoggingIn, isInitializing } = useInternetIdentity();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-background">
      {/* Ambient glow backgrounds */}
      <div
        className="absolute top-[-20%] left-[10%] w-[500px] h-[500px] rounded-full opacity-10 blur-[120px] pointer-events-none"
        style={{ background: "oklch(0.62 0.22 270)" }}
      />
      <div
        className="absolute bottom-[-20%] right-[5%] w-[400px] h-[400px] rounded-full opacity-10 blur-[100px] pointer-events-none"
        style={{ background: "oklch(0.78 0.18 200)" }}
      />

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center gap-8 w-full max-w-sm px-6"
      >
        {/* Logo + Brand */}
        <div className="flex flex-col items-center gap-3">
          <div className="relative">
            <div
              className="absolute inset-0 rounded-full blur-xl opacity-60"
              style={{ background: "oklch(0.62 0.22 270 / 0.6)" }}
            />
            <img
              src="/assets/generated/zyntho-logo-transparent.dim_64x64.png"
              alt="Zyntho logo"
              className="relative h-20 w-20 drop-shadow-[0_0_16px_oklch(0.62_0.22_270/0.9)]"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
          </div>
          <h1 className="font-display text-4xl font-bold bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
            Zyntho
          </h1>
          <p className="text-muted-foreground text-center text-sm leading-relaxed">
            Your IT career prep platform. Master customer support, service desk,
            and cloud skills — land the job you deserve.
          </p>
        </div>

        {/* Feature pills */}
        <div className="flex flex-wrap justify-center gap-2">
          {[
            { icon: BookOpen, label: "12 Chapters" },
            { icon: Users, label: "Interview Prep" },
            { icon: Shield, label: "HR Round" },
          ].map(({ icon: Icon, label }) => (
            <span
              key={label}
              className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border border-border bg-muted/50 text-muted-foreground"
            >
              <Icon className="h-3 w-3" />
              {label}
            </span>
          ))}
        </div>

        {/* Login card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="w-full rounded-2xl border border-border bg-card p-8 flex flex-col gap-5"
          style={{
            boxShadow:
              "0 0 40px oklch(0.62 0.22 270 / 0.12), 0 8px 32px rgba(0,0,0,0.4)",
          }}
        >
          <div className="text-center">
            <h2 className="font-display text-xl font-bold text-foreground">
              Welcome back
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              Sign in to access your learning dashboard
            </p>
          </div>

          <Button
            data-ocid="login.primary_button"
            onClick={login}
            disabled={isLoggingIn || isInitializing}
            className="w-full h-12 text-base font-semibold relative overflow-hidden group"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.55 0.22 280), oklch(0.62 0.22 250))",
              boxShadow: "0 0 20px oklch(0.62 0.22 270 / 0.35)",
            }}
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.60 0.24 280), oklch(0.68 0.24 250))",
              }}
            />
            {isLoggingIn ? (
              <span className="relative flex items-center gap-2">
                <span className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                Signing in...
              </span>
            ) : (
              <span className="relative flex items-center gap-2">
                <LogIn className="h-5 w-5" />
                Sign in with Internet Identity
              </span>
            )}
          </Button>

          <p className="text-xs text-center text-muted-foreground">
            Access is granted by the platform administrator after sign-in.
          </p>
        </motion.div>
      </motion.div>

      {/* Footer note */}
      <p className="absolute bottom-6 text-xs text-muted-foreground/50">
        © {new Date().getFullYear()} Zyntho. Powered by Internet Computer.
      </p>
    </div>
  );
}
