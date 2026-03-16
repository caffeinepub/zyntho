import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { chapters } from "@/data/chapters";
import { useProgress } from "@/hooks/useProgress";
import { CheckCircle2, ChevronRight } from "lucide-react";
import { motion } from "motion/react";

interface LearningPathProps {
  onChapterClick: (id: number) => void;
}

function getChapterBorderColor(id: number): string {
  if (id <= 4) return "border-l-4 border-l-emerald-500";
  if (id <= 8) return "border-l-4 border-l-blue-500";
  return "border-l-4 border-l-violet-500";
}

function getChapterLevelBadge(id: number): {
  label: string;
  className: string;
} {
  if (id <= 4)
    return {
      label: "Beginner",
      className:
        "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-semibold",
    };
  if (id <= 8)
    return {
      label: "Intermediate",
      className:
        "bg-blue-500/20 text-blue-300 border border-blue-500/40 font-semibold",
    };
  return {
    label: "Advanced",
    className:
      "bg-violet-500/20 text-violet-300 border border-violet-500/40 font-semibold",
  };
}

export default function LearningPath({ onChapterClick }: LearningPathProps) {
  const { completedCount, isComplete } = useProgress();

  return (
    <main className="flex-1 p-4 md:p-8 max-w-4xl mx-auto w-full">
      {/* Header Banner */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-8"
      >
        <div
          className="relative overflow-hidden rounded-2xl border border-blue-500/30 px-6 py-8 md:px-10"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.12 0.04 260) 0%, oklch(0.14 0.06 240) 50%, oklch(0.13 0.05 280) 100%)",
            boxShadow: "0 0 40px oklch(0.62 0.22 270 / 0.15)",
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(oklch(1 0 0 / 0.03) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 0.03) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />
          <div className="relative z-10 max-w-lg">
            <h1 className="font-display text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              Learning Path
            </h1>
            <p className="text-muted-foreground">
              {completedCount} of {chapters.length} chapters completed
            </p>
            <div className="flex gap-3 mt-4 flex-wrap">
              <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-300 bg-emerald-500/15 border border-emerald-500/30 rounded-full px-3 py-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
                Chapters 1–4: Beginner
              </span>
              <span className="flex items-center gap-1.5 text-xs font-semibold text-blue-300 bg-blue-500/15 border border-blue-500/30 rounded-full px-3 py-1">
                <span className="w-2 h-2 rounded-full bg-blue-400 inline-block" />
                Chapters 5–8: Intermediate
              </span>
              <span className="flex items-center gap-1.5 text-xs font-semibold text-violet-300 bg-violet-500/15 border border-violet-500/30 rounded-full px-3 py-1">
                <span className="w-2 h-2 rounded-full bg-violet-400 inline-block" />
                Chapters 9–12: Advanced
              </span>
            </div>
          </div>
          <img
            src="/assets/generated/student-studying.dim_400x300.png"
            alt=""
            aria-hidden="true"
            className="absolute right-0 bottom-0 h-full object-contain hidden md:block pointer-events-none opacity-70"
          />
        </div>
      </motion.div>

      <div className="space-y-3">
        {chapters.map((chapter, idx) => {
          const done = isComplete(chapter.id);
          const borderColor = getChapterBorderColor(chapter.id);
          const levelBadge = getChapterLevelBadge(chapter.id);
          return (
            <motion.div
              key={chapter.id}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
            >
              <Card
                className={`cursor-pointer transition-all hover:-translate-y-0.5 border ${borderColor} ${
                  done
                    ? "border-primary/30 bg-primary/5"
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
                data-ocid={`learning.item.${idx + 1}`}
              >
                <CardContent className="py-4 px-5">
                  <div className="flex items-center gap-4">
                    <span className="font-display text-2xl font-bold text-muted-foreground/30 w-8 shrink-0">
                      {String(chapter.id).padStart(2, "0")}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <p className="font-semibold text-base text-foreground">
                          {chapter.title}
                        </p>
                        <Badge className={`${levelBadge.className} text-xs`}>
                          {levelBadge.label}
                        </Badge>
                        {done && (
                          <Badge className="bg-primary/20 text-primary border border-primary/30 text-xs">
                            ✓ Completed
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground truncate">
                        {chapter.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      {done ? (
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                      ) : null}
                      <ChevronRight className="h-5 w-5 text-muted-foreground" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </main>
  );
}
