import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { Chapter, InterviewPrepContent } from "../backend.d";
import { SEED_DATA } from "../data/seedData";
import { useActor } from "./useActor";

export function useChapters() {
  const { actor, isFetching } = useActor();
  const queryClient = useQueryClient();

  return useQuery<Chapter[]>({
    queryKey: ["chapters"],
    queryFn: async () => {
      if (!actor) return [];
      const chapters = await actor.getChapters();
      if (chapters.length === 0) {
        await actor.seedContent(SEED_DATA);
        return actor.getChapters();
      }
      // Prefetch completion status for all topics
      const allTopicIds = chapters.flatMap((c) => c.topics.map((t) => t.id));
      await Promise.all(
        allTopicIds.map(async (id) => {
          const complete = await actor.isTopicComplete(id);
          queryClient.setQueryData(["topicComplete", id.toString()], complete);
        }),
      );
      return chapters;
    },
    enabled: !!actor && !isFetching,
  });
}

export function useChapterById(id: bigint) {
  const { actor, isFetching } = useActor();
  return useQuery<Chapter>({
    queryKey: ["chapter", id.toString()],
    queryFn: async () => {
      if (!actor) throw new Error("No actor");
      return actor.getChapterById(id);
    },
    enabled: !!actor && !isFetching,
  });
}

export function useTopicComplete(topicId: bigint) {
  const { actor, isFetching } = useActor();
  return useQuery<boolean>({
    queryKey: ["topicComplete", topicId.toString()],
    queryFn: async () => {
      if (!actor) return false;
      return actor.isTopicComplete(topicId);
    },
    enabled: !!actor && !isFetching,
  });
}

export function useMarkTopicComplete() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (topicId: bigint) => {
      if (!actor) throw new Error("No actor");
      await actor.markTopicComplete(topicId);
    },
    onSuccess: (_data, topicId) => {
      queryClient.setQueryData(["topicComplete", topicId.toString()], true);
    },
  });
}

export function useInterviewPrep(jobRole: string) {
  const { actor, isFetching } = useActor();
  return useQuery<InterviewPrepContent>({
    queryKey: ["interviewPrep", jobRole],
    queryFn: async () => {
      if (!actor) throw new Error("No actor");
      return actor.getInterviewPrepContent(jobRole);
    },
    enabled: !!actor && !isFetching && !!jobRole,
  });
}
