import { useCallback, useState } from "react";

const STORAGE_KEY = "zyntho_progress";

function loadProgress(): number[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) return parsed as number[];
    return [];
  } catch {
    return [];
  }
}

function saveProgress(ids: number[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
}

export function useProgress() {
  const [completedIds, setCompletedIds] = useState<number[]>(loadProgress);

  const markComplete = useCallback((id: number) => {
    setCompletedIds((prev) => {
      if (prev.includes(id)) return prev;
      const next = [...prev, id];
      saveProgress(next);
      return next;
    });
  }, []);

  const markIncomplete = useCallback((id: number) => {
    setCompletedIds((prev) => {
      const next = prev.filter((x) => x !== id);
      saveProgress(next);
      return next;
    });
  }, []);

  const isComplete = useCallback(
    (id: number) => completedIds.includes(id),
    [completedIds],
  );

  const toggleComplete = useCallback(
    (id: number) => {
      if (completedIds.includes(id)) {
        markIncomplete(id);
      } else {
        markComplete(id);
      }
    },
    [completedIds, markComplete, markIncomplete],
  );

  return {
    completedIds,
    completedCount: completedIds.length,
    markComplete,
    markIncomplete,
    isComplete,
    toggleComplete,
  };
}
