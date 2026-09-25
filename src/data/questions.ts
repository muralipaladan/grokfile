import { chapters } from "./chapters";
import { app } from "./questions/app";
import { ch1 } from "./questions/ch1";
import { ch10 } from "./questions/ch10";
import { ch11 } from "./questions/ch11";
import { ch12 } from "./questions/ch12";
import { ch2 } from "./questions/ch2";
import { ch3 } from "./questions/ch3";
import { ch4 } from "./questions/ch4";
import { ch5 } from "./questions/ch5";
import { ch6 } from "./questions/ch6";
import { ch7 } from "./questions/ch7";
import { ch8 } from "./questions/ch8";
import { ch9 } from "./questions/ch9";
import { more } from "./questions/more";
import type { ChapterId, Question } from "./types";

export const questions: Question[] = [
  ...ch1,
  ...ch2,
  ...ch3,
  ...ch4,
  ...ch5,
  ...ch6,
  ...ch7,
  ...ch8,
  ...ch9,
  ...ch10,
  ...ch11,
  ...ch12,
  ...app,
  ...more,
];

const byId = new Map(questions.map((q) => [q.id, q]));

export function questionById(id: string) {
  return byId.get(id);
}

export function questionsForChapter(id: ChapterId) {
  return questions.filter((q) => q.chapterId === id);
}

export function chapterCounts() {
  const map: Record<string, number> = {};
  for (const c of chapters) map[c.id] = 0;
  for (const q of questions) map[q.chapterId] = (map[q.chapterId] ?? 0) + 1;
  return map;
}

export const TOTAL_QUESTIONS = questions.length;

export function searchQuestions(query: string) {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return questions.filter((item) => {
    const hay = [
      item.question,
      item.explanationEn,
      item.explanationMl,
      item.para,
      ...item.options,
      ...item.tags,
    ]
      .join(" ")
      .toLowerCase();
    return hay.includes(q);
  });
}

export function pickQuiz(chapterId: string | "all", n: number, seed = Date.now()) {
  const pool =
    chapterId === "all" ? [...questions] : questions.filter((x) => x.chapterId === chapterId);
  const rand = mulberry32(seed);
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, Math.min(n, pool.length));
}

function mulberry32(a: number) {
  return function next() {
    a += 0x6d2b79f5;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
