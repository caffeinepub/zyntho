import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  calmMindsetTips,
  hrQuestions,
  presentationTips,
  selfIntroTemplate,
} from "@/data/hrRound";
import { Brain, CheckCircle2, HelpCircle, Mic, User } from "lucide-react";
import { motion } from "motion/react";

export default function HRRound() {
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
          className="relative overflow-hidden rounded-2xl px-6 py-8 md:px-10"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.20 0.10 195) 0%, oklch(0.16 0.08 210) 50%, oklch(0.18 0.08 240) 100%)",
            boxShadow: "0 0 40px oklch(0.78 0.18 200 / 0.18)",
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(oklch(1 0 0 / 0.04) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 0.04) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />
          <div
            className="absolute top-0 right-0 w-60 h-60 rounded-full opacity-15 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, oklch(0.78 0.18 200) 0%, transparent 70%)",
            }}
          />
          <div className="relative z-10 max-w-lg">
            <h1 className="font-display text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
              HR Round
            </h1>
            <p className="text-muted-foreground">
              Universal preparation for HR and Ops interviews across all roles.
            </p>
          </div>
          <img
            src="/assets/generated/interview-prep.dim_400x300.png"
            alt=""
            aria-hidden="true"
            className="absolute right-0 bottom-0 h-full object-contain hidden md:block pointer-events-none"
          />
        </div>
      </motion.div>

      <div className="space-y-8">
        {/* Self Introduction */}
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          data-ocid="hr.section"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-6 rounded-full bg-gradient-to-b from-cyan-500 to-teal-500" />
            <User className="h-5 w-5 text-cyan-400" />
            <h2 className="font-display text-xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Self-Introduction Template
            </h2>
          </div>
          <Card
            className="border border-cyan-500/20 bg-card"
            style={{ boxShadow: "0 0 20px oklch(0.78 0.18 200 / 0.08)" }}
          >
            <CardContent className="pt-5">
              <div className="space-y-3">
                {selfIntroTemplate.sections.map((section) => (
                  <div
                    key={section.label}
                    className="flex gap-4 p-4 rounded-xl"
                    style={{ background: "oklch(0.18 0.02 260)" }}
                  >
                    <span
                      className="shrink-0 text-xs font-bold px-2.5 py-1 rounded-full h-fit mt-0.5 whitespace-nowrap"
                      style={{
                        background:
                          "linear-gradient(135deg, oklch(0.55 0.18 200), oklch(0.55 0.16 220))",
                        color: "white",
                      }}
                    >
                      {section.label}
                    </span>
                    <p className="text-sm leading-relaxed text-foreground">
                      {section.template}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Presentation Tips */}
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          data-ocid="hr.section"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-6 rounded-full bg-gradient-to-b from-blue-500 to-violet-500" />
            <Mic className="h-5 w-5 text-blue-400" />
            <h2 className="font-display text-xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              Presentation Tips for HR &amp; Ops Rounds
            </h2>
          </div>
          <Card
            className="border border-border bg-card"
            style={{ boxShadow: "0 0 15px oklch(0.62 0.22 270 / 0.08)" }}
          >
            <CardContent className="pt-5">
              <ul className="space-y-3">
                {presentationTips.map((tip, idx) => (
                  <li
                    key={tip}
                    className="flex gap-3 text-sm"
                    data-ocid={`hr.item.${idx + 1}`}
                  >
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground">{tip}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.section>

        {/* Calm Mindset */}
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          data-ocid="hr.section"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-6 rounded-full bg-gradient-to-b from-emerald-500 to-teal-500" />
            <Brain className="h-5 w-5 text-emerald-400" />
            <h2 className="font-display text-xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Staying Calm &amp; Patient
            </h2>
          </div>
          <Card
            className="border border-emerald-500/20 bg-card"
            style={{ boxShadow: "0 0 20px oklch(0.70 0.20 150 / 0.08)" }}
          >
            <CardContent className="pt-5">
              <ul className="space-y-3">
                {calmMindsetTips.map((tip, idx) => (
                  <li
                    key={tip}
                    className="flex gap-3 text-sm"
                    data-ocid={`hr.item.${idx + 1}`}
                  >
                    <span
                      className="h-5 w-5 shrink-0 mt-0.5 rounded-full flex items-center justify-center text-xs font-bold text-white"
                      style={{
                        background:
                          "linear-gradient(135deg, oklch(0.55 0.20 150), oklch(0.60 0.18 180))",
                      }}
                    >
                      {idx + 1}
                    </span>
                    <span className="text-foreground">{tip}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.section>

        {/* HR Questions */}
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          data-ocid="hr.section"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-6 rounded-full bg-gradient-to-b from-violet-500 to-pink-500" />
            <HelpCircle className="h-5 w-5 text-violet-400" />
            <h2 className="font-display text-xl font-bold bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
              Common HR Questions &amp; Tips
            </h2>
          </div>
          <div className="space-y-3">
            {hrQuestions.map((item, idx) => (
              <Card
                key={item.question}
                className="border border-border bg-card"
                style={{ transition: "all 0.2s ease" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 0 15px oklch(0.62 0.22 270 / 0.12)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
                data-ocid={`hr.item.${idx + 1}`}
              >
                <CardHeader className="pb-2 pt-4">
                  <CardTitle className="text-sm font-semibold flex items-start gap-2">
                    <span
                      className="shrink-0 text-xs font-bold w-6 h-6 rounded-md flex items-center justify-center text-white"
                      style={{
                        background:
                          "linear-gradient(135deg, oklch(0.55 0.22 280), oklch(0.50 0.22 300))",
                      }}
                    >
                      Q
                    </span>
                    <span className="text-foreground">{item.question}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pb-4">
                  <p className="text-sm text-muted-foreground pl-8">
                    {item.tip}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.section>
      </div>
    </main>
  );
}
