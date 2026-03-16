import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { interviewRoles } from "@/data/interviewRoles";
import { BookOpen, CalendarDays, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

export default function InterviewPrep() {
  const [selectedRole, setSelectedRole] = useState(interviewRoles[0].id);
  const role =
    interviewRoles.find((r) => r.id === selectedRole) ?? interviewRoles[0];

  return (
    <main className="flex-1 p-4 md:p-8 max-w-5xl mx-auto w-full">
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
              "linear-gradient(135deg, oklch(0.22 0.12 280) 0%, oklch(0.18 0.14 260) 50%, oklch(0.20 0.12 240) 100%)",
            boxShadow: "0 0 40px oklch(0.62 0.22 270 / 0.2)",
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
            className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-20 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, oklch(0.78 0.18 200) 0%, transparent 70%)",
            }}
          />
          <div className="relative z-10 max-w-lg">
            <h1 className="font-display text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Interview Prep
            </h1>
            <p className="text-muted-foreground">
              Select a job role to see 17 questions, a 2-day study plan, and
              revision notes.
            </p>
          </div>
          <img
            src="/assets/generated/service-desk-worker.dim_400x300.png"
            alt=""
            aria-hidden="true"
            className="absolute right-0 bottom-0 h-full object-contain hidden md:block pointer-events-none"
          />
        </div>
      </motion.div>

      {/* Role Selector */}
      <div className="flex flex-wrap gap-3 mb-8">
        {interviewRoles.map((r) => (
          <button
            type="button"
            key={r.id}
            onClick={() => setSelectedRole(r.id)}
            data-ocid="interview.tab"
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 font-semibold text-sm transition-all ${
              selectedRole === r.id
                ? "border-transparent text-white shadow-glow"
                : "border-border bg-card hover:border-primary/40 text-foreground hover:text-primary"
            }`}
            style={
              selectedRole === r.id
                ? {
                    background:
                      "linear-gradient(135deg, oklch(0.45 0.22 260), oklch(0.55 0.22 270))",
                    boxShadow: "0 0 16px oklch(0.62 0.22 270 / 0.4)",
                  }
                : {}
            }
          >
            <span>{r.icon}</span>
            <span>{r.title}</span>
          </button>
        ))}
      </div>

      <motion.div
        key={role.id}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        <Tabs defaultValue="questions">
          <TabsList
            className="mb-6"
            style={{ background: "oklch(0.14 0.025 260)" }}
          >
            <TabsTrigger
              value="questions"
              data-ocid="interview.tab"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-violet-600 data-[state=active]:to-blue-600 data-[state=active]:text-white data-[state=active]:border-0"
            >
              <BookOpen className="h-4 w-4 mr-2" />
              Questions ({role.questions.length})
            </TabsTrigger>
            <TabsTrigger
              value="study-plan"
              data-ocid="interview.tab"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-violet-600 data-[state=active]:to-blue-600 data-[state=active]:text-white data-[state=active]:border-0"
            >
              <CalendarDays className="h-4 w-4 mr-2" />
              2-Day Study Plan
            </TabsTrigger>
            <TabsTrigger
              value="revision"
              data-ocid="interview.tab"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-violet-600 data-[state=active]:to-blue-600 data-[state=active]:text-white data-[state=active]:border-0"
            >
              <CheckCircle2 className="h-4 w-4 mr-2" />
              Day 2 Revision
            </TabsTrigger>
          </TabsList>

          <TabsContent value="questions">
            <Accordion type="single" collapsible className="space-y-2">
              {role.questions.map((q, idx) => (
                <AccordionItem
                  key={q.question}
                  value={`q-${idx}`}
                  className="border border-border rounded-xl px-4 bg-card"
                  style={{ transition: "all 0.2s ease" }}
                  data-ocid={`interview.item.${idx + 1}`}
                >
                  <AccordionTrigger className="text-left font-semibold text-sm py-4 hover:no-underline">
                    <span className="flex gap-3 items-start">
                      <span
                        className="shrink-0 mt-0.5 w-7 h-7 rounded-lg text-white text-xs font-bold flex items-center justify-center"
                        style={{
                          background:
                            "linear-gradient(135deg, oklch(0.55 0.22 260), oklch(0.50 0.22 280))",
                        }}
                      >
                        Q{idx + 1}
                      </span>
                      <span className="text-foreground">{q.question}</span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground pb-4 leading-relaxed pl-10">
                    {q.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </TabsContent>

          <TabsContent value="study-plan">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card
                className="border border-border bg-card"
                style={{ boxShadow: "0 0 15px oklch(0.70 0.20 150 / 0.08)" }}
              >
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-base">
                    <span
                      className="h-7 w-7 rounded-full text-white text-xs font-bold flex items-center justify-center"
                      style={{
                        background:
                          "linear-gradient(135deg, oklch(0.55 0.20 150), oklch(0.60 0.18 180))",
                      }}
                    >
                      1
                    </span>
                    <span className="text-foreground">
                      Day 1 — Build Foundation
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {role.studyPlan.day1}
                  </p>
                </CardContent>
              </Card>
              <Card
                className="border border-primary/30 bg-primary/5"
                style={{ boxShadow: "0 0 15px oklch(0.62 0.22 270 / 0.12)" }}
              >
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-base">
                    <span
                      className="h-7 w-7 rounded-full text-white text-xs font-bold flex items-center justify-center"
                      style={{
                        background:
                          "linear-gradient(135deg, oklch(0.55 0.22 260), oklch(0.50 0.22 280))",
                      }}
                    >
                      2
                    </span>
                    <span className="text-foreground">
                      Day 2 — Practice &amp; Revise
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {role.studyPlan.day2}
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="revision">
            <Card className="border border-border bg-card">
              <CardHeader className="pb-3">
                <CardTitle className="text-base bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                  Day 2 Revision Notes — {role.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {role.day2Revision.map((note, idx) => (
                    <li
                      key={note}
                      className="flex gap-3 text-sm"
                      data-ocid={`interview.item.${idx + 1}`}
                    >
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground">{note}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>
    </main>
  );
}
