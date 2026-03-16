export const selfIntroTemplate = {
  sections: [
    {
      label: "Opening",
      template:
        "Good morning/afternoon. My name is [Name], and I am from [City/Town].",
    },
    {
      label: "Education",
      template: "I completed my [Degree] from [College/University] in [Year].",
    },
    {
      label: "Experience",
      template:
        "I have [X] years of experience in [field/role] where I worked on [key tasks]. (Or: I am a fresher with strong foundational knowledge in [area].)",
    },
    {
      label: "Strengths",
      template:
        "I am [2-3 strengths, e.g. a quick learner, team player, problem-solver].",
    },
    {
      label: "Why this role",
      template:
        "I am applying for this role because [genuine reason aligned to your goal].",
    },
    {
      label: "Closing",
      template:
        "I am excited about this opportunity and look forward to contributing to your team.",
    },
  ],
};

export const presentationTips = [
  "Maintain steady eye contact (not staring) — shows confidence",
  "Sit upright, don't slouch — signals professionalism",
  "Speak at a moderate pace — fast speech signals nervousness",
  "Avoid filler words: um, uh, like, you know",
  "Use the STAR method for behavioral questions: Situation, Task, Action, Result",
  "Pause before answering — 2-3 seconds shows thoughtfulness, not weakness",
];

export const calmMindsetTips = [
  "Pre-interview: deep breathing (4-4-4: inhale 4s, hold 4s, exhale 4s)",
  "Reframe nervousness as excitement — the physical feeling is the same",
  "If you don't know an answer: \"That's a great question. Let me think for a moment.\" Then give your best attempt.",
  "If asked a tricky question: don't bluff. Say \"I'm not fully certain, but based on what I know...\"",
  "Remember: the interviewer wants you to succeed. They are evaluating fit, not trying to trick you.",
  "Stay hydrated, arrive early, review your notes once (not repeatedly — it increases anxiety)",
];

export interface HRQuestion {
  question: string;
  tip: string;
}

export const hrQuestions: HRQuestion[] = [
  {
    question: "Tell me about yourself",
    tip: "Use the self-introduction template above",
  },
  {
    question: "What are your strengths?",
    tip: "Pick 2-3 relevant to the job, give brief examples",
  },
  {
    question: "What are your weaknesses?",
    tip: "Name a real one but show you are working on it",
  },
  {
    question: "Why do you want to join our company?",
    tip: "Research the company and give a specific reason",
  },
  {
    question: "Where do you see yourself in 5 years?",
    tip: "Show ambition but alignment with the role",
  },
  {
    question: "Why should we hire you?",
    tip: "Summarize your skills, attitude, and fit for the role",
  },
  {
    question: "Are you okay with shifts/night shifts?",
    tip: "Be honest but show flexibility and willingness",
  },
];
