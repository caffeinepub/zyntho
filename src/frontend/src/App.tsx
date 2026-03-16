import { Toaster } from "@/components/ui/sonner";
import { Loader2 } from "lucide-react";
import { useState } from "react";
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

export default function App() {
  const [page, setPage] = useState<AppPage>({ name: "dashboard" });
  const { isInitializing: isIIInitializing } = useInternetIdentity();
  const {
    isInitializing,
    isLoggedIn,
    profile,
    isProfileLoading,
    hasProfile,
    isApproved,
    isApprovedLoading,
    isAdmin,
  } = useAuthFlow();

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

  // Full-screen loading while auth initializes
  if (isIIInitializing || isInitializing) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div
          className="flex flex-col items-center gap-4"
          data-ocid="app.loading_state"
        >
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="text-sm text-muted-foreground">Loading Zyntho...</p>
        </div>
      </div>
    );
  }

  // Not logged in → full-screen login
  if (!isLoggedIn) {
    return (
      <>
        <LoginPage />
        <Toaster />
      </>
    );
  }

  // Profile loading
  if (isProfileLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div
          className="flex flex-col items-center gap-4"
          data-ocid="app.loading_state"
        >
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="text-sm text-muted-foreground">
            Setting up your account...
          </p>
        </div>
      </div>
    );
  }

  // No profile → show profile setup modal (full screen with modal overlay)
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

  // Approval loading
  if (isApprovedLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div
          className="flex flex-col items-center gap-4"
          data-ocid="app.loading_state"
        >
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="text-sm text-muted-foreground">Checking access...</p>
        </div>
      </div>
    );
  }

  // Not approved → pending screen
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

  // Fully approved — show full app
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
