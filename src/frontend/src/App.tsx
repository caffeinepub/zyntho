import { Toaster } from "@/components/ui/sonner";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ChapterDetail from "./pages/ChapterDetail";
import Dashboard from "./pages/Dashboard";
import HRRound from "./pages/HRRound";
import InterviewPrep from "./pages/InterviewPrep";
import LearningPath from "./pages/LearningPath";

type NavPage = "dashboard" | "learning" | "interview" | "hr";
type AppPage =
  | { name: "dashboard" }
  | { name: "learning" }
  | { name: "chapter"; chapterId: number }
  | { name: "interview" }
  | { name: "hr" };

export default function App() {
  const [page, setPage] = useState<AppPage>({ name: "dashboard" });
  const [ready, setReady] = useState(false);

  // Brief branded splash on first load
  useEffect(() => {
    const t = setTimeout(() => setReady(true), 800);
    return () => clearTimeout(t);
  }, []);

  if (!ready) {
    return (
      <div
        className="min-h-screen flex items-center justify-center bg-background"
        data-ocid="app.loading_state"
      >
        <div className="relative z-10 flex flex-col items-center gap-4">
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
        </div>
        <style>{`
          @keyframes pulseGlow {
            0%, 100% { opacity: 0.4; transform: scale(0.9); }
            50% { opacity: 0.8; transform: scale(1.1); }
          }
        `}</style>
      </div>
    );
  }

  const currentNavPage: NavPage =
    page.name === "chapter"
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
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar currentPage={currentNavPage} onNavigate={handleNavigate} />

      {page.name === "dashboard" && (
        <Dashboard
          onNavigate={(p) => handleNavigate(p as NavPage)}
          onChapterClick={(id) => setPage({ name: "chapter", chapterId: id })}
          userName=""
        />
      )}
      {page.name === "learning" && (
        <LearningPath
          onChapterClick={(id) => setPage({ name: "chapter", chapterId: id })}
        />
      )}
      {page.name === "chapter" && (
        <ChapterDetail
          chapterId={(page as { name: "chapter"; chapterId: number }).chapterId}
          onBack={() => setPage({ name: "learning" })}
        />
      )}
      {page.name === "interview" && <InterviewPrep />}
      {page.name === "hr" && <HRRound />}

      <Footer />
      <Toaster />
    </div>
  );
}
