import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "sonner";
import { createActorWithConfig } from "../config";
import { useInvalidateAuth } from "../hooks/useAuth";
import { useInternetIdentity } from "../hooks/useInternetIdentity";

interface ProfileSetupModalProps {
  open: boolean;
}

export default function ProfileSetupModal({ open }: ProfileSetupModalProps) {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const { identity } = useInternetIdentity();
  const invalidateAuth = useInvalidateAuth();

  if (!open) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    setLoading(true);
    try {
      const actor = await createActorWithConfig(
        identity ? { agentOptions: { identity } } : undefined,
      );
      await (actor as any).saveCallerUserProfile({ name: name.trim() });
      toast.success("Access request submitted!");
      invalidateAuth();
    } catch (err) {
      console.error(err);
      toast.error("Failed to submit request. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      data-ocid="profile.modal"
    >
      <div
        className="relative w-full max-w-md rounded-2xl border border-primary/30 bg-card p-8 shadow-elevated"
        style={{ boxShadow: "0 0 60px oklch(0.62 0.22 270 / 0.2)" }}
      >
        {/* Glow accent */}
        <div
          className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-15 pointer-events-none blur-3xl"
          style={{ background: "oklch(0.62 0.22 270)" }}
        />

        <div className="relative z-10">
          <div className="mb-6 text-center">
            <h2 className="font-display text-2xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent mb-2">
              Request Access
            </h2>
            <p className="text-sm text-muted-foreground">
              Enter your name to request access to Zyntho.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label
                htmlFor="profile-name"
                className="text-foreground/80 text-sm font-medium"
              >
                Your Full Name
              </Label>
              <Input
                id="profile-name"
                data-ocid="profile.input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Priya Sharma"
                required
                className="bg-muted/50 border-border focus:border-primary/60"
              />
            </div>

            <Button
              data-ocid="profile.submit_button"
              type="submit"
              className="w-full font-semibold"
              disabled={loading || !name.trim()}
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.55 0.22 280), oklch(0.62 0.22 250))",
              }}
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <span className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                  Submitting...
                </span>
              ) : (
                "Request Access"
              )}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
