import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, User } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useActor } from "../hooks/useActor";
import { useInvalidateAuth } from "../hooks/useAuthFlow";

interface ProfileSetupModalProps {
  open: boolean;
}

export default function ProfileSetupModal({ open }: ProfileSetupModalProps) {
  const { actor, isFetching } = useActor();
  const invalidateAuth = useInvalidateAuth();
  const [name, setName] = useState("");
  const [saving, setSaving] = useState(false);

  const handleSave = async () => {
    if (!name.trim()) return;

    // If actor is not ready yet, wait briefly and retry once
    if (!actor) {
      if (isFetching) {
        toast.info("Still connecting, please try again in a moment.");
      } else {
        toast.error("Connection not ready. Please refresh and try again.");
      }
      return;
    }

    setSaving(true);
    try {
      await (actor as any).saveCallerUserProfile({ name: name.trim() });
      toast.success("Profile saved!");
      invalidateAuth();
    } catch {
      toast.error("Failed to save profile. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  const isConnecting = isFetching && !actor;

  return (
    <Dialog open={open}>
      <DialogContent
        className="sm:max-w-md border-border"
        style={{
          background: "oklch(0.13 0.02 260)",
          boxShadow:
            "0 0 40px oklch(0.62 0.22 270 / 0.2), 0 16px 48px rgba(0,0,0,0.6)",
        }}
        data-ocid="profile.dialog"
      >
        <DialogHeader>
          <div className="flex items-center gap-3 mb-1">
            <div
              className="h-10 w-10 rounded-full flex items-center justify-center"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.55 0.22 280), oklch(0.62 0.22 250))",
              }}
            >
              <User className="h-5 w-5 text-white" />
            </div>
            <DialogTitle className="font-display text-xl">
              Set up your profile
            </DialogTitle>
          </div>
          <DialogDescription className="text-muted-foreground">
            Tell us your name to personalise your experience. This is shown to
            the administrator.
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-4 pt-2">
          {isConnecting && (
            <div
              className="flex items-center gap-2 text-sm px-3 py-2 rounded-md"
              style={{ background: "oklch(0.18 0.04 260)" }}
              data-ocid="profile.loading_state"
            >
              <Loader2
                className="h-4 w-4 animate-spin"
                style={{ color: "oklch(0.62 0.22 270)" }}
              />
              <span className="text-muted-foreground">
                Connecting to backend…
              </span>
            </div>
          )}

          <div className="flex flex-col gap-2">
            <Label htmlFor="profile-name" className="text-sm font-medium">
              Your name
            </Label>
            <Input
              id="profile-name"
              data-ocid="profile.input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Rahul Sharma"
              onKeyDown={(e) => e.key === "Enter" && handleSave()}
              className="bg-muted/50 border-border"
            />
          </div>

          <Button
            data-ocid="profile.submit_button"
            onClick={handleSave}
            disabled={!name.trim() || saving || isConnecting}
            className="w-full font-semibold"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.55 0.22 280), oklch(0.62 0.22 250))",
            }}
          >
            {saving ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Saving...
              </>
            ) : isConnecting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Connecting...
              </>
            ) : (
              "Continue"
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
