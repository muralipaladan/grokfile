import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as Button } from "./button-Bj5rWrLA.mjs";
import { a as pickQuiz, i as chapters } from "./questions-C2LG63w4.mjs";
import { t as useProgress } from "./progress-CED-BKts.mjs";
import { t as QuestionBlock } from "./question-block-Dj0SNk6z.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/quiz-Zzr1dE5K.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function QuizPage() {
	const [chapterId, setChapterId] = (0, import_react.useState)("all");
	const [n, setN] = (0, import_react.useState)(10);
	const [seed, setSeed] = (0, import_react.useState)(null);
	const [idx, setIdx] = (0, import_react.useState)(0);
	const [score, setScore] = (0, import_react.useState)(0);
	const [answered, setAnswered] = (0, import_react.useState)(false);
	const [done, setDone] = (0, import_react.useState)(false);
	const addQuiz = useProgress((s) => s.addQuiz);
	const paper = (0, import_react.useMemo)(() => seed == null ? [] : pickQuiz(chapterId, n, seed), [
		chapterId,
		n,
		seed
	]);
	const current = paper[idx];
	function start() {
		setSeed(Date.now());
		setIdx(0);
		setScore(0);
		setAnswered(false);
		setDone(false);
	}
	function onAnswered(ok) {
		if (answered) return;
		setAnswered(true);
		if (ok) setScore((s) => s + 1);
	}
	function next() {
		if (idx + 1 >= paper.length) {
			setDone(true);
			addQuiz({
				at: Date.now(),
				chapterId,
				score,
				total: paper.length
			});
			return;
		}
		setIdx((i) => i + 1);
		setAnswered(false);
	}
	if (seed != null && current && !done) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex items-end justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-2xl font-semibold text-forest",
					children: "ക്വിസ്"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-ink-muted tabular-nums",
					children: [
						idx + 1,
						" / ",
						paper.length,
						" · സ്കോർ ",
						score
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					onClick: () => setSeed(null),
					children: "നിർത്തുക"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuestionBlock, {
				q: current,
				index: idx + 1,
				mode: "quiz",
				onAnswered
			}, current.id),
			answered ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				onClick: next,
				className: "w-full sm:w-auto",
				children: idx + 1 >= paper.length ? "ഫലം കാണുക" : "അടുത്ത ചോദ്യം"
			}) : null
		]
	});
	if (done) {
		const pct = paper.length ? Math.round(score / paper.length * 100) : 0;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-xl border border-border bg-card p-6 text-center shadow-[var(--shadow-rule)]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-xs tracking-[0.2em] text-sage uppercase",
					children: "Result"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "mt-2 font-display text-3xl font-semibold text-forest tabular-nums",
					children: [
						score,
						" / ",
						paper.length
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 text-sm text-ink-muted",
					children: [pct, "% ശരി. തെറ്റിയവ വീണ്ടും പഠനത്തിൽ നോക്കുക."]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						onClick: start,
						children: "വീണ്ടും"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						onClick: () => setSeed(null),
						children: "ക്രമീകരണം"
					})]
				})
			]
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-2xl font-semibold text-forest",
			children: "ക്വിസ്"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-sm text-ink-muted",
			children: "അധ്യായം തിരഞ്ഞെടുക്കുക. ഉത്തരം ശേഷം വിശദീകരണം കാണാം; അവസാനം സ്കോർ."
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-xl border border-border bg-card p-5 shadow-[var(--shadow-rule)]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "text-sm font-medium text-ink",
					htmlFor: "chapter",
					children: "അധ്യായം"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					id: "chapter",
					value: chapterId,
					onChange: (e) => setChapterId(e.target.value),
					className: "mt-2 flex h-11 w-full rounded-md border border-input bg-card px-3 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "all",
						children: "എല്ലാ അധ്യായങ്ങളും (mixed)"
					}), chapters.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
						value: c.id,
						children: [
							c.roman,
							". ",
							c.titleEn
						]
					}, c.id))]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm font-medium text-ink",
					children: "ചോദ്യങ്ങളുടെ എണ്ണം"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-2 flex flex-wrap gap-2",
					children: [
						10,
						20,
						50
					].map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: n === k ? "default" : "outline",
						onClick: () => setN(k),
						children: k
					}, k))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "mt-6 w-full sm:w-auto",
					onClick: start,
					children: "തുടങ്ങുക"
				})
			]
		})]
	});
}
//#endregion
export { QuizPage as component };
