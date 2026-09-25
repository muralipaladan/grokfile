import type { ChapterId, Difficulty, Question } from "./types";

export function Q(
  id: string,
  chapterId: ChapterId,
  para: string,
  difficulty: Difficulty,
  question: string,
  options: [string, string, string, string],
  answer: 0 | 1 | 2 | 3,
  explanationMl: string,
  explanationEn: string,
  tags: string[] = [],
): Question {
  return {
    id,
    chapterId,
    para,
    difficulty,
    question,
    options,
    answer,
    explanationMl,
    explanationEn,
    tags,
  };
}
