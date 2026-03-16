import { Toaster } from "@/components/ui/sonner";
import { useEffect, useRef, useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProfileSetupModal from "./components/ProfileSetupModal";
import { useAuthFlow } from "./hooks/useAuthFlow";
import { useInternetIdentity } from "./hooks/useInternetIdentity";
import AdminDashboard from "./pages/AdminDashboard";
import ChapterDetail from "./pages/ChapterDetail";
import Dashboard from "./pages/Dashboard";
import HRRound from "./pages/HRRound";
import InterviewPrep from "./pages/InterviewPrep";
import LearningPath from "./pages/LearningPath";
import LoginPage from "./pages/LoginPage";
import RequestAccessPage from "./pages/RequestAccessPage";

type NavPage = "dashboard" | "learning" | "interview" | "hr" | "admin";
type AppPage =
  | { name: "dashboard" }
  | { name: "learning" }
  | { name: "chapter"; chapterId: number }
  | { name: "interview" }
  | { name: "hr" }
  | { name: "admin" };

function LoadingScreen({
  message,
  showConnecting,
  showReload,
}: {
  message: string;
  showConnecting?: boolean;
  showReload?: boolean;
}) {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-background"
      data-ocid="app.loading_state"
    >
      {/* Ambient glows */}
      <div
        className="absolute top-[20%] left-[30%] w-[400px] h-[400px] rounded-full opacity-10 blur-[120px] pointer-events-none"
        style={{ background: "oklch(0.62 0.22 270)" }}
      />
      <div
        className="absolute bottom-[20%] right-[20%] w-[300px] h-[300px] rounded-full opacity-10 blur-[100px] pointer-events-none"
        style={{ background: "oklch(0.78 0.18 200)" }}
      />

      <div className="relative z-10 flex flex-col items-center gap-6 text-center px-6 w-full max-w-xs">
        {/* Logo with pulsing glow */}
        <div className="relative">
          <div
            className="absolute inset-0 rounded-full blur-xl"
            style={{
              background: "oklch(0.62 0.22 270 / 0.5)",
              animation: "pulseGlow 2s ease-in-out infinite",
            }}
          />
          <img
            src="/assets/generated/zyntho-logo-transparent.dim_64x64.png"
            alt="Zyntho"
            className="relative h-16 w-16 drop-shadow-[0_0_16px_oklch(0.62_0.22_270/0.9)]"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
        </div>

        {/* Brand name */}
        <h1
          className="font-display text-3xl font-bold"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.78 0.18 200), oklch(0.72 0.22 280), oklch(0.75 0.18 290))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Zyntho
        </h1>

        {/* Message */}
        <p className="text-sm font-medium text-muted-foreground">{message}</p>

        {/* Animated progress bar */}
        <div
          className="w-full rounded-full overflow-hidden"
          style={{ height: "3px", background: "oklch(0.20 0.03 260)" }}
        >
          <div
            style={{
              height: "100%",
              borderRadius: "9999px",
              background:
                "linear-gradient(90deg, oklch(0.62 0.22 270), oklch(0.78 0.18 200))",
              boxShadow: "0 0 8px oklch(0.62 0.22 270 / 0.7)",
              animation:
                "loadProgress 8s cubic-bezier(0.1, 0.4, 0.8, 1) forwards",
            }}
          />
        </div>

        {/* Connecting sub-message */}
        {showConnecting && (
          <p className="text-xs text-muted-foreground animate-pulse">
            Connecting to server...
          </p>
        )}

        {/* Reload button — last resort only */}
        {showReload && (
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="mt-2 px-5 py-2 rounded-lg text-sm font-semibold transition-opacity hover:opacity-80"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.55 0.22 280), oklch(0.62 0.22 250))",
              color: "white",
              boxShadow: "0 0 16px oklch(0.62 0.22 270 / 0.35)",
            }}
            data-ocid="app.primary_button"
          >
            Reload Page
          </button>
        )}
      </div>

      <style>{`
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.4; transform: scale(0.9); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }
        @keyframes loadProgress {
          0% { width: 0%; }
          30% { width: 35%; }
          60% { width: 58%; }
          80% { width: 68%; }
          100% { width: 75%; }
        }
      `}</style>
    </div>
  );
}

export default function App() {
  const [page, setPage] = useState<AppPage>({ name: "dashboard" });
  const [slowLoad, setSlowLoad] = useState(false);
  const [verySlowLoad, setVerySlowLoad] = useState(false);
  const slowTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const verySlowTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { isInitializing: isIIInitializing } = useInternetIdentity();
  const {
    isInitializing,
    isLoggedIn,
    profile,
    isApproved,
    isApprovedLoading,
    hasProfile,
    isAdmin,
    statusLoaded,
  } = useAuthFlow();

  // Both timers created ONCE on mount and cleaned up on unmount
  useEffect(() => {
    slowTimerRef.current = setTimeout(() => setSlowLoad(true), 8000);
    verySlowTimerRef.current = setTimeout(() => setVerySlowLoad(true), 90000);
    return () => {
      if (slowTimerRef.current) clearTimeout(slowTimerRef.current);
      if (verySlowTimerRef.current) clearTimeout(verySlowTimerRef.current);
    };
  }, []);

  const currentNavPage: NavPage =
    page.name === "admin"
      ? "admin"
      : page.name === "chapter"
        ? "learning"
        : page.name === "hr"
          ? "hr"
          : page.name === "interview"
            ? "interview"
            : page.name === "learning"
              ? "learning"
              : "dashboard";

  const handleNavigate = (target: NavPage) => {
    if (target === "dashboard") setPage({ name: "dashboard" });
    else if (target === "learning") setPage({ name: "learning" });
    else if (target === "interview") setPage({ name: "interview" });
    else if (target === "hr") setPage({ name: "hr" });
    else if (target === "admin") setPage({ name: "admin" });
  };

  // ── STEP 1: Wait for Internet Identity and actor to initialise ──────────────
  if (isIIInitializing || isInitializing) {
    return (
      <LoadingScreen message="Loading Zyntho..." showConnecting={slowLoad} />
    );
  }

  // ── STEP 2: Not logged in → full-screen login ──────────────────────────────
  if (!isLoggedIn) {
    return (
      <>
        <LoginPage />
        <Toaster />
      </>
    );
  }

  // ── STEP 3: Logged in but status not yet fetched from backend ──────────────
  if (!statusLoaded || isApprovedLoading) {
    return (
      <LoadingScreen
        message="Verifying access..."
        showConnecting={slowLoad}
        showReload={verySlowLoad}
      />
    );
  }

  // ── STEP 4: No profile → show profile setup ────────────────────────────────
  if (!hasProfile) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar
          currentPage={currentNavPage}
          onNavigate={handleNavigate}
          showFullNav={false}
        />
        <ProfileSetupModal open={true} />
        <Toaster />
      </div>
    );
  }

  // ── STEP 5: Has profile but NOT approved → pending/request screen ──────────
  if (!isApproved) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar
          currentPage={currentNavPage}
          onNavigate={handleNavigate}
          showFullNav={false}
        />
        <RequestAccessPage
          alreadyRequested={true}
          userName={profile?.name ?? "there"}
        />
        <Toaster />
      </div>
    );
  }

  // ── STEP 6: Fully approved → show full app ─────────────────────────────────
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar currentPage={currentNavPage} onNavigate={handleNavigate} />

      {page.name === "dashboard" && (
        <Dashboard
          onNavigate={(p) => handleNavigate(p as NavPage)}
          onChapterClick={(id) => setPage({ name: "chapter", chapterId: id })}
          userName={profile?.name ?? ""}
        />
      )}
      {page.name === "learning" && (
        <LearningPath
          onChapterClick={(id) => setPage({ name: "chapter", chapterId: id })}
        />
      )}
      {page.name === "chapter" && (
        <ChapterDetail
          chapterId={(page as any).chapterId}
          onBack={() => setPage({ name: "learning" })}
        />
      )}
      {page.name === "interview" && <InterviewPrep />}
      {page.name === "hr" && <HRRound />}
      {page.name === "admin" && isAdmin && <AdminDashboard />}

      <Footer />
      <Toaster />
    </div>
  );
}
