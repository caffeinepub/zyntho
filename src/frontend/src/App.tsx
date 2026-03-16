import { Toaster } from "@/components/ui/sonner";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
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
  subMessage,
}: { message: string; subMessage?: string }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div
        className="flex flex-col items-center gap-4 text-center px-6"
        data-ocid="app.loading_state"
      >
        <Loader2 className="h-10 w-10 animate-spin text-primary" />
        <p className="text-base font-medium text-foreground">{message}</p>
        {subMessage && (
          <p className="text-sm text-muted-foreground max-w-xs">{subMessage}</p>
        )}
      </div>
    </div>
  );
}

export default function App() {
  const [page, setPage] = useState<AppPage>({ name: "dashboard" });
  const [slowLoad, setSlowLoad] = useState(false);
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

  // After 5 seconds of loading, show a reassuring sub-message so users don't leave
  useEffect(() => {
    const timer = setTimeout(() => setSlowLoad(true), 5000);
    return () => clearTimeout(timer);
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
      <LoadingScreen
        message="Loading Zyntho..."
        subMessage={
          slowLoad ? "Almost there, connecting to the network..." : undefined
        }
      />
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
        subMessage={
          slowLoad
            ? "This usually takes just a few seconds. Please hold on."
            : undefined
        }
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
