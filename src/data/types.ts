export type Difficulty = "easy" | "medium" | "hard";

export type ChapterId =
  | "ch1"
  | "ch2"
  | "ch3"
  | "ch4"
  | "ch5"
  | "ch6"
  | "ch7"
  | "ch8"
  | "ch9"
  | "ch10"
  | "ch11"
  | "ch12"
  | "app";

export type Question = {
  id: string;
  chapterId: ChapterId;
  para: string;
  difficulty: Difficulty;
  question: string;
  options: [string, string, string, string];
  answer: 0 | 1 | 2 | 3;
  explanationMl: string;
  explanationEn: string;
  tags: string[];
};

export type Chapter = {
  id: ChapterId;
  roman: string;
  titleEn: string;
  titleMl: string;
  paras: string;
  blurbMl: string;
};
