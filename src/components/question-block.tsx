import { Bookmark, BookmarkCheck, Check, ChevronDown, X } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { chapters } from "@/data/chapters";
import type { Question } from "@/data/types";
import { useProgress } from "@/lib/progress";
import { cn } from "@/lib/utils";

const LETTERS = ["A", "B", "C", "D"] as const;

const DIFF = {
  easy: "എളുപ്പം",
  medium: "ഇടത്തരം",
  hard: "കഠിനം",
} as const;

export function QuestionBlock({
  q,
  index,
  mode = "study",
  onAnswered,
}: {
  q: Question;
  index?: number;
  mode?: "study" | "quiz" | "review";
  onAnswered?: (correct: boolean) => void;
}) {
  const [picked, setPicked] = useState<number | null>(mode === "review" ? q.answer : null);
  const [open, setOpen] = useState(mode !== "quiz");
  const bookmarks = useProgress((s) => s.bookmarks);
  const toggleBookmark = useProgress((s) => s.toggleBookmark);
  const markResult = useProgress((s) => s.markResult);
  const marked = bookmarks.includes(q.id);
  const chapter = chapters.find((c) => c.id === q.chapterId);
  const revealed = picked !== null;
  const correct = picked === q.answer;

  function choose(i: number) {
    if (revealed && mode === "quiz") return;
    setPicked(i);
    const ok = i === q.answer;
    markResult(q.id, ok);
    onAnswered?.(ok);
  }

  return (
    <article className="rounded-xl border border-border bg-card p-4 shadow-[var(--shadow-rule)] sm:p-5">
      <div className="mb-3 flex flex-wrap items-center gap-2">
        {index != null ? (
          <span className="font-display text-sm font-semibold text-forest tabular-nums">
            {String(index).padStart(2, "0")}
          </span>
        ) : null}
        <Badge variant="sage">Para {q.para}</Badge>
        <Badge variant="paper">{DIFF[q.difficulty]}</Badge>
        {chapter ? (
          <Badge variant="outline">
            Ch. {chapter.roman}
          </Badge>
        ) : null}
        <button
          type="button"
          onClick={() => toggleBookmark(q.id)}
          className="ml-auto inline-flex size-11 items-center justify-center rounded-md text-forest hover:bg-paper-2"
          aria-label={marked ? "Remove bookmark" : "Bookmark"}
        >
          {marked ? <BookmarkCheck className="size-5" /> : <Bookmark className="size-5" />}
        </button>
      </div>

      <h3 className="font-display text-base font-semibold leading-snug text-ink sm:text-lg">
        {q.question}
      </h3>

      <ol className="mt-4 grid gap-2">
        {q.options.map((opt, i) => {
          const isPick = picked === i;
          const isKey = revealed && i === q.answer;
          const isWrong = revealed && isPick && i !== q.answer;
          return (
            <li key={opt}>
              <button
                type="button"
                onClick={() => choose(i)}
                className={cn(
                  "flex min-h-11 w-full items-start gap-3 rounded-md border px-3 py-2.5 text-left text-sm transition-colors duration-150",
                  isKey && "border-forest bg-forest/10 text-forest",
                  isWrong && "border-seal bg-seal/10 text-seal",
                  !revealed && "border-border bg-paper hover:border-forest hover:bg-paper-2",
                  revealed && !isKey && !isWrong && "border-border bg-paper text-ink-muted",
                )}
              >
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full border border-current font-display text-xs">
                  {LETTERS[i]}
                </span>
                <span className="flex-1 pt-0.5">{opt}</span>
                {isKey ? <Check className="mt-0.5 size-4 shrink-0" /> : null}
                {isWrong ? <X className="mt-0.5 size-4 shrink-0" /> : null}
              </button>
            </li>
          );
        })}
      </ol>

      {revealed ? (
        <div className="mt-4">
          <button
            type="button"
            className="flex h-11 w-full items-center justify-between rounded-md px-1 text-sm font-medium text-forest"
            onClick={() => setOpen((v) => !v)}
          >
            <span>
              {correct ? "ശരി. " : "തെറ്റ്. ശരിയുത്തരം: "}
              {LETTERS[q.answer]}. {open ? "വിശദീകരണം ഒളിപ്പിക്കുക" : "വിശദീകരണം കാണുക"}
            </span>
            <ChevronDown className={cn("size-4 transition-transform", open && "rotate-180")} />
          </button>
          {open ? (
            <div className="rounded-lg bg-paper-2 px-4 py-3 text-sm leading-relaxed text-ink">
              <p className="font-medium text-forest">{q.explanationMl}</p>
              <p className="mt-2 text-ink-muted">{q.explanationEn}</p>
            </div>
          ) : null}
        </div>
      ) : mode !== "quiz" ? (
        <div className="mt-3">
          <Button variant="ghost" size="sm" onClick={() => choose(q.answer)}>
            ഉത്തരം കാണുക
          </Button>
        </div>
      ) : null}
    </article>
  );
}
