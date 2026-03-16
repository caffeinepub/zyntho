// All chapter and interview content is served from local data files.
// No backend calls are needed for content -- the backend is auth/approval-only.
// Progress is persisted in localStorage via useProgress.
import { chapters } from "../data/chapters";
import { interviewRoles } from "../data/interviewRoles";

export function useChapters() {
  return { data: chapters, isLoading: false, error: null };
}

export function useChapterById(id: number) {
  const chapter = chapters.find((c) => c.id === id);
  return { data: chapter ?? null, isLoading: false, error: null };
}

// jobRole can be the role id (e.g. "service-desk") or title
export function useInterviewPrep(jobRole: string) {
  const role = interviewRoles.find(
    (r) => r.id === jobRole || r.title === jobRole,
  );
  return { data: role ?? null, isLoading: false, error: null };
}
