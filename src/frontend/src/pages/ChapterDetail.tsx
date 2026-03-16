import { Button } from "@/components/ui/button";
import { chapters } from "@/data/chapters";
import { useProgress } from "@/hooks/useProgress";
import { ArrowLeft, CheckCircle2, Circle, Sparkles } from "lucide-react";
import { motion } from "motion/react";

interface ChapterDetailProps {
  chapterId: number;
  onBack: () => void;
}

const topicGradients = [
  "from-violet-500 to-blue-500",
  "from-blue-500 to-cyan-500",
  "from-cyan-500 to-emerald-500",
  "from-emerald-500 to-teal-500",
  "from-teal-500 to-blue-500",
  "from-indigo-500 to-violet-500",
  "from-pink-500 to-violet-500",
  "from-orange-500 to-amber-500",
];

export default function ChapterDetail({
  chapterId,
  onBack,
}: ChapterDetailProps) {
  const chapter = chapters.find((c) => c.id === chapterId);
  const { isComplete, toggleComplete } = useProgress();

  if (!chapter) {
    return (
      <main className="flex-1 p-8 text-center">
        <p className="text-muted-foreground">Chapter not found.</p>
        <Button onClick={onBack} className="mt-4">
          Go back
        </Button>
      </main>
    );
  }

  const done = isComplete(chapter.id);

  return (
    <main className="flex-1 p-4 md:p-8 max-w-3xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Button
          variant="ghost"
          className="mb-6 -ml-2 text-muted-foreground hover:text-foreground hover:bg-muted/50"
          onClick={onBack}
          data-ocid="chapter.button"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Learning Path
        </Button>

        {/* Chapter Header */}
        <div
          className="relative overflow-hidden rounded-2xl border border-primary/20 p-6 mb-8"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.14 0.04 270) 0%, oklch(0.12 0.03 260) 100%)",
            boxShadow: "0 0 30px oklch(0.62 0.22 270 / 0.12)",
          }}
        >
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "linear-gradient(oklch(1 0 0 / 0.03) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 0.03) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />
          <div className="relative z-10 flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">
                Chapter {String(chapter.id).padStart(2, "0")}
              </p>
              <h1 className="font-display text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                {chapter.title}
              </h1>
              <p className="text-muted-foreground mt-2">
                {chapter.description}
              </p>
            </div>
            <Button
              variant={done ? "default" : "outline"}
              className={`shrink-0 gap-2 ${
                done
                  ? "bg-gradient-to-r from-violet-600 to-blue-600 text-white border-0 hover:opacity-90"
                  : "border-primary/40 text-primary hover:bg-primary/10"
              }`}
              onClick={() => toggleComplete(chapter.id)}
              data-ocid="chapter.toggle"
            >
              {done ? (
                <>
                  <CheckCircle2 className="h-4 w-4" />
                  Completed
                </>
              ) : (
                <>
                  <Circle className="h-4 w-4" />
                  Mark Complete
                </>
              )}
            </Button>
          </div>
        </div>

        {/* Topics */}
        <div className="space-y-4">
          {chapter.topics.map((topic, idx) => {
            const gradient = topicGradients[idx % topicGradients.length];
            return (
              <motion.div
                key={topic.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.08 + idx * 0.07 }}
                className="bg-card border border-border border-l-4 border-l-violet-500 rounded-2xl p-5 md:p-6 transition-all"
                style={{
                  borderLeftColor:
                    idx % 2 === 0
                      ? "oklch(0.62 0.22 270)"
                      : "oklch(0.78 0.18 200)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 0 15px oklch(0.62 0.22 270 / 0.12)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
                data-ocid={`chapter.item.${idx + 1}`}
              >
                <div className="flex gap-3 items-start mb-3">
                  <span
                    className={`mt-0.5 w-7 h-7 shrink-0 rounded-lg bg-gradient-to-br ${gradient} text-white text-xs font-bold flex items-center justify-center shadow-sm`}
                  >
                    {idx + 1}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-bold text-base leading-snug bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                        {topic.title}
                      </h3>
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-primary/15 text-primary border border-primary/30">
                        <Sparkles className="h-2.5 w-2.5" />
                        Key Topic
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed pl-10">
                  {topic.explanation}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-8 flex justify-end">
          <Button
            onClick={() => toggleComplete(chapter.id)}
            className={`gap-2 ${
              done
                ? "bg-card border border-primary/40 text-primary hover:bg-primary/10"
                : "bg-gradient-to-r from-violet-600 to-blue-600 text-white border-0 hover:opacity-90"
            }`}
            variant={done ? "outline" : "default"}
            data-ocid="chapter.primary_button"
          >
            {done ? "Mark Incomplete" : "Mark Complete"}
          </Button>
        </div>
      </motion.div>
    </main>
  );
}
