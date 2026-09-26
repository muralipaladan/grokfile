import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { c as Download, i as Printer } from "../_libs/lucide-react.mjs";
import { t as Button } from "./button-Bj5rWrLA.mjs";
import { c as questionsForChapter, i as chapters, s as questions, t as TOTAL_QUESTIONS } from "./questions-C2LG63w4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/print-Cl-bwueO.js
var import_jsx_runtime = require_jsx_runtime();
var LETTERS = [
	"A",
	"B",
	"C",
	"D"
];
function PrintPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "print-area space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "no-print flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-2xl font-semibold text-forest",
					children: "PDF / പ്രിന്റ്"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 max-w-xl text-sm text-ink-muted",
					children: [TOTAL_QUESTIONS, " ചോദ്യങ്ങൾ, ഉത്തരം, മലയാളം വിശദീകരണം. ഡൗൺലോഡ് ബട്ടൺ ഒരു തയ്യാറായ PDF തുറക്കും; അല്ലെങ്കിൽ ഈ പേജ് പ്രിന്റ് ചെയ്യാം."]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "/kbm-department-test-qbank.pdf",
							download: true,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4" }), "PDF ഡൗൺലോഡ്"]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						onClick: () => window.print(),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, { className: "size-4" }), "പ്രിന്റ്"]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "print-cover rounded-xl border border-border bg-card px-5 py-8 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-[11px] tracking-[0.22em] text-sage uppercase",
						children: "Government of Kerala · Finance Department"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-3xl font-semibold text-forest",
						children: "KBM Padam"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-lg text-ink",
						children: "കേരള ബജറ്റ് മാനുവൽ · Department Test Q-Bank"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-sm text-ink-muted",
						children: [
							"Third Edition (First Reprint) · corrections up to 30 June 1982 · ",
							TOTAL_QUESTIONS,
							" ",
							"MCQs · English questions · Malayalam explanations"
						]
					})
				]
			}),
			chapters.map((ch) => {
				const list = questionsForChapter(ch.id);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "break-inside-avoid",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-display text-xl font-semibold text-forest",
							children: [
								"Chapter ",
								ch.roman,
								". ",
								ch.titleEn
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mb-4 text-sm text-ink-muted",
							children: [
								ch.titleMl,
								" · Paras ",
								ch.paras
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "grid gap-6",
							children: list.map((q, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "break-inside-avoid border-b border-border pb-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "font-display text-xs text-sage",
										children: [
											i + 1,
											". Para ",
											q.para,
											" · ",
											q.difficulty
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 font-display font-semibold text-ink",
										children: q.question
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "mt-2 grid gap-1 text-sm",
										children: q.options.map((opt, oi) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "font-medium",
												children: [LETTERS[oi], "."]
											}),
											" ",
											opt
										] }, opt))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-2 text-sm font-medium text-forest",
										children: [
											"ഉത്തരം: ",
											LETTERS[q.answer],
											". ",
											q.options[q.answer]
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm leading-relaxed text-ink",
										children: q.explanationMl
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm text-ink-muted",
										children: q.explanationEn
									})
								]
							}, q.id))
						})
					]
				}, ch.id);
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "hidden text-center text-xs text-ink-faint",
				children: [questions.length, " questions · For personal departmental-test study. Source: Kerala Budget Manual."]
			})
		]
	});
}
//#endregion
export { PrintPage as component };
