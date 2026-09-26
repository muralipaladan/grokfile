import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { d as Bookmark, f as BookmarkCheck, l as ChevronDown, t as X, u as Check } from "../_libs/lucide-react.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { r as cn } from "./router-BH6nS-8V.mjs";
import { t as Button } from "./button-Bj5rWrLA.mjs";
import { i as chapters } from "./questions-C2LG63w4.mjs";
import { t as useProgress } from "./progress-CED-BKts.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/question-block-Dj0SNk6z.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var badgeVariants = cva("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium tracking-wide", {
	variants: { variant: {
		default: "border-transparent bg-forest text-primary-foreground",
		outline: "border-border bg-card text-ink-muted",
		sage: "border-transparent bg-sage/15 text-forest",
		seal: "border-transparent bg-seal/12 text-seal",
		paper: "border-border bg-paper-2 text-ink-muted"
	} },
	defaultVariants: { variant: "default" }
});
function Badge({ className, variant, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn(badgeVariants({ variant }), className),
		...props
	});
}
var LETTERS = [
	"A",
	"B",
	"C",
	"D"
];
var DIFF = {
	easy: "എളുപ്പം",
	medium: "ഇടത്തരം",
	hard: "കഠിനം"
};
function QuestionBlock({ q, index, mode = "study", onAnswered }) {
	const [picked, setPicked] = (0, import_react.useState)(mode === "review" ? q.answer : null);
	const [open, setOpen] = (0, import_react.useState)(mode !== "quiz");
	const bookmarks = useProgress((s) => s.bookmarks);
	const toggleBookmark = useProgress((s) => s.toggleBookmark);
	const markResult = useProgress((s) => s.markResult);
	const marked = bookmarks.includes(q.id);
	const chapter = chapters.find((c) => c.id === q.chapterId);
	const revealed = picked !== null;
	const correct = picked === q.answer;
	function choose(i) {
		if (revealed && mode === "quiz") return;
		setPicked(i);
		const ok = i === q.answer;
		markResult(q.id, ok);
		onAnswered?.(ok);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "rounded-xl border border-border bg-card p-4 shadow-[var(--shadow-rule)] sm:p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-3 flex flex-wrap items-center gap-2",
				children: [
					index != null ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-sm font-semibold text-forest tabular-nums",
						children: String(index).padStart(2, "0")
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
						variant: "sage",
						children: ["Para ", q.para]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: "paper",
						children: DIFF[q.difficulty]
					}),
					chapter ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
						variant: "outline",
						children: ["Ch. ", chapter.roman]
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => toggleBookmark(q.id),
						className: "ml-auto inline-flex size-11 items-center justify-center rounded-md text-forest hover:bg-paper-2",
						"aria-label": marked ? "Remove bookmark" : "Bookmark",
						children: marked ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookmarkCheck, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bookmark, { className: "size-5" })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display text-base font-semibold leading-snug text-ink sm:text-lg",
				children: q.question
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-4 grid gap-2",
				children: q.options.map((opt, i) => {
					const isPick = picked === i;
					const isKey = revealed && i === q.answer;
					const isWrong = revealed && isPick && i !== q.answer;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => choose(i),
						className: cn("flex min-h-11 w-full items-start gap-3 rounded-md border px-3 py-2.5 text-left text-sm transition-colors duration-150", isKey && "border-forest bg-forest/10 text-forest", isWrong && "border-seal bg-seal/10 text-seal", !revealed && "border-border bg-paper hover:border-forest hover:bg-paper-2", revealed && !isKey && !isWrong && "border-border bg-paper text-ink-muted"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full border border-current font-display text-xs",
								children: LETTERS[i]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex-1 pt-0.5",
								children: opt
							}),
							isKey ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 size-4 shrink-0" }) : null,
							isWrong ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "mt-0.5 size-4 shrink-0" }) : null
						]
					}) }, opt);
				})
			}),
			revealed ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: "flex h-11 w-full items-center justify-between rounded-md px-1 text-sm font-medium text-forest",
					onClick: () => setOpen((v) => !v),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						correct ? "ശരി. " : "തെറ്റ്. ശരിയുത്തരം: ",
						LETTERS[q.answer],
						". ",
						open ? "വിശദീകരണം ഒളിപ്പിക്കുക" : "വിശദീകരണം കാണുക"
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: cn("size-4 transition-transform", open && "rotate-180") })]
				}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-lg bg-paper-2 px-4 py-3 text-sm leading-relaxed text-ink",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-medium text-forest",
						children: q.explanationMl
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-ink-muted",
						children: q.explanationEn
					})]
				}) : null]
			}) : mode !== "quiz" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "sm",
					onClick: () => choose(q.answer),
					children: "ഉത്തരം കാണുക"
				})
			}) : null
		]
	});
}
//#endregion
export { QuestionBlock as t };
