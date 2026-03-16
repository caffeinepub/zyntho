import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { chapters } from "@/data/chapters";
import { useProgress } from "@/hooks/useProgress";
import { BookOpen, CheckCircle2, Circle, Mic2, Users, Zap } from "lucide-react";
import { motion } from "motion/react";

interface DashboardProps {
  onNavigate: (page: "dashboard" | "learning" | "interview" | "hr") => void;
  onChapterClick: (id: number) => void;
  userName?: string;
}

const chapterBadgeColors = [
  "from-emerald-500 to-teal-500",
  "from-emerald-500 to-teal-500",
  "from-emerald-500 to-teal-500",
  "from-emerald-500 to-teal-500",
  "from-blue-500 to-indigo-500",
  "from-blue-500 to-indigo-500",
  "from-blue-500 to-indigo-500",
  "from-blue-500 to-indigo-500",
  "from-violet-500 to-purple-600",
  "from-violet-500 to-purple-600",
  "from-violet-500 to-purple-600",
  "from-violet-500 to-purple-600",
];

export default function Dashboard({
  onNavigate,
  onChapterClick,
  userName,
}: DashboardProps) {
  const { completedCount, isComplete } = useProgress();
  const total = chapters.length;
  const progressPct = Math.round((completedCount / total) * 100);

  return (
    <main className="flex-1 p-4 md:p-8 max-w-6xl mx-auto w-full">
      {/* Hero Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <div
          className="relative overflow-hidden rounded-2xl px-6 py-10 md:px-12 md:py-16"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.35 0.18 280) 0%, oklch(0.28 0.20 260) 40%, oklch(0.32 0.18 210) 100%)",
            boxShadow: "0 0 60px oklch(0.62 0.22 270 / 0.25)",
          }}
        >
          {/* Grid pattern overlay */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(oklch(1 0 0 / 0.04) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 0.04) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
          {/* Glow orb */}
          <div
            className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-20 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, oklch(0.78 0.18 200) 0%, transparent 70%)",
            }}
          />
          <div className="relative z-10 max-w-xl">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="h-4 w-4 text-cyan-400" />
              {userName ? (
                <p className="text-cyan-300 text-sm font-semibold uppercase tracking-widest">
                  Hello, {userName}
                </p>
              ) : (
                <p className="text-cyan-300 text-sm font-semibold uppercase tracking-widest">
                  Welcome to
                </p>
              )}
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-3 leading-tight">
              {userName ? (
                <>
                  Welcome to{" "}
                  <span className="bg-gradient-to-r from-cyan-300 to-violet-400 bg-clip-text text-transparent">
                    Zyntho
                  </span>
                </>
              ) : (
                "Zyntho"
              )}
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed">
              Your guide to IT &amp; Customer Support careers.{" "}
              <span className="text-cyan-300 font-semibold">Learn.</span>{" "}
              <span className="text-violet-300 font-semibold">Practice.</span>{" "}
              <span className="text-emerald-300 font-semibold">Get hired.</span>
            </p>
          </div>
          <img
            src="/assets/generated/hero-illustration.dim_900x500.png"
            alt=""
            aria-hidden="true"
            className="absolute right-0 bottom-0 h-full object-contain opacity-80 hidden md:block pointer-events-none"
          />
        </div>
      </motion.div>

      {/* Progress Card */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-8"
      >
        <Card
          className="border border-primary/30 bg-card glow-card"
          style={{
            boxShadow: "0 0 30px oklch(0.62 0.22 270 / 0.1)",
          }}
        >
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-semibold text-muted-foreground uppercase tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block animate-pulse-glow" />
              Overall Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-end justify-between mb-3">
              <span className="font-display text-3xl font-bold text-foreground">
                {completedCount}
                <span className="text-muted-foreground font-body text-lg font-normal">
                  {" "}
                  / {total} chapters
                </span>
              </span>
              <Badge className="text-sm font-bold px-3 py-1 bg-gradient-to-r from-violet-600 to-blue-600 text-white border-0">
                {progressPct}%
              </Badge>
            </div>
            <div
              className="relative h-3 rounded-full overflow-hidden"
              style={{ background: "oklch(0.20 0.03 260)" }}
            >
              <div
                className="h-full rounded-full transition-all duration-700"
                style={{
                  width: `${progressPct}%`,
                  background:
                    "linear-gradient(90deg, oklch(0.62 0.22 270), oklch(0.78 0.18 200))",
                  boxShadow: "0 0 10px oklch(0.62 0.22 270 / 0.6)",
                }}
              />
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Navigation Cards */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10"
      >
        {[
          {
            icon: BookOpen,
            label: "Learning Path",
            sub: "12 structured chapters",
            page: "learning" as const,
            gradient: "from-emerald-600 to-teal-500",
            glow: "oklch(0.70 0.20 150 / 0.25)",
            ocid: "dashboard.primary_button",
          },
          {
            icon: Users,
            label: "Interview Prep",
            sub: "5 roles, 17 Q&As each",
            page: "interview" as const,
            gradient: "from-blue-600 to-violet-600",
            glow: "oklch(0.62 0.22 270 / 0.25)",
            ocid: "dashboard.secondary_button",
          },
          {
            icon: Mic2,
            label: "HR Round",
            sub: "Intro, tips & mindset",
            page: "hr" as const,
            gradient: "from-cyan-500 to-blue-600",
            glow: "oklch(0.78 0.18 200 / 0.25)",
            ocid: "dashboard.button",
          },
        ].map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.page}
              type="button"
              className="relative h-auto py-6 flex flex-col gap-3 items-center justify-center rounded-xl border border-border bg-card transition-all hover:-translate-y-1 overflow-hidden group"
              style={{
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  `0 0 25px ${item.glow}, 0 4px 12px rgba(0,0,0,0.4)`;
                (e.currentTarget as HTMLElement).style.borderColor =
                  "oklch(0.62 0.22 270 / 0.5)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
                (e.currentTarget as HTMLElement).style.borderColor = "";
              }}
              onClick={() => onNavigate(item.page)}
              data-ocid={item.ocid}
            >
              <div
                className={`h-12 w-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg relative z-10`}
              >
                <Icon className="h-6 w-6 text-white" />
              </div>
              <div className="relative z-10 text-center">
                <p className="font-bold text-base text-foreground">
                  {item.label}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {item.sub}
                </p>
              </div>
            </button>
          );
        })}
      </motion.div>

      {/* Chapters Overview */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex items-center gap-3 mb-5">
          <div className="w-1 h-6 rounded-full bg-gradient-to-b from-violet-500 to-blue-500" />
          <h2 className="font-display text-xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
            Chapters Overview
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {chapters.map((chapter, idx) => {
            const done = isComplete(chapter.id);
            const gradient =
              chapterBadgeColors[idx] ?? "from-blue-500 to-indigo-500";
            return (
              <motion.div
                key={chapter.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.22 + idx * 0.04 }}
                data-ocid={`dashboard.item.${idx + 1}`}
              >
                <button
                  type="button"
                  className={`w-full text-left p-4 rounded-xl border transition-all hover:-translate-y-0.5 group ${
                    done
                      ? "border-primary/40 bg-primary/5"
                      : "border-border bg-card hover:border-primary/30"
                  }`}
                  style={{ transition: "all 0.2s ease" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow =
                      "0 0 15px oklch(0.62 0.22 270 / 0.15)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                  onClick={() => onChapterClick(chapter.id)}
                >
                  <div className="flex items-start gap-3">
                    <span
                      className={`text-xs font-bold text-white mt-0.5 w-7 h-7 shrink-0 rounded-lg bg-gradient-to-br ${gradient} flex items-center justify-center shadow-sm`}
                    >
                      {String(chapter.id).padStart(2, "0")}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-sm leading-snug truncate text-foreground">
                        {chapter.title}
                      </p>
                    </div>
                    <div className="shrink-0 mt-0.5">
                      {done ? (
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                      ) : (
                        <Circle className="h-4 w-4 text-muted-foreground/40 group-hover:text-muted-foreground transition-colors" />
                      )}
                    </div>
                  </div>
                </button>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </main>
  );
}
