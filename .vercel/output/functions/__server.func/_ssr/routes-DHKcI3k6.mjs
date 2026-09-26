import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as PenLine, m as ArrowRight, p as BookOpen, r as Search, s as FileDown } from "../_libs/lucide-react.mjs";
import { i as Emblem, r as cn } from "./router-BH6nS-8V.mjs";
import { t as Button } from "./button-Bj5rWrLA.mjs";
import { i as chapters, r as chapterCounts, t as TOTAL_QUESTIONS } from "./questions-C2LG63w4.mjs";
import { t as useProgress } from "./progress-CED-BKts.mjs";
import { n as Root, t as Indicator } from "../_libs/radix-ui__react-progress.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DHKcI3k6.js
var import_jsx_runtime = require_jsx_runtime();
function Progress({ className, value = 0, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
		className: cn("relative h-2 w-full overflow-hidden rounded-full bg-paper-3", className),
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Indicator, {
			className: "h-full bg-forest transition-[transform] duration-250 ease-out",
			style: { transform: `translateX(-${100 - (value ?? 0)}%)` }
		})
	});
}
function Home() {
	const seen = useProgress((s) => s.seen);
	const results = useProgress((s) => s.results);
	const seenN = Object.keys(seen).length;
	const right = Object.values(results).filter(Boolean).length;
	const counts = chapterCounts();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl border border-border bg-card px-5 py-8 shadow-[var(--shadow-rule)] sm:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-6 sm:flex-row sm:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Emblem, { className: "size-16 text-forest" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-[11px] font-semibold tracking-[0.22em] text-sage uppercase",
								children: "Finance Department · Government of Kerala"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-1 font-display text-3xl font-semibold text-forest sm:text-4xl",
								children: "കെബിഎം പഠനം"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 max-w-2xl text-sm leading-relaxed text-ink-muted sm:text-base",
								children: [
									"Kerala Budget Manual (Third Edition) — ",
									TOTAL_QUESTIONS,
									" Department Test MCQs. ചോദ്യങ്ങൾ ഇംഗ്ലീഷിൽ, വിശദീകരണം ലളിതമായ മലയാളത്തിൽ. ഉത്തരം തെറ്റിയാൽ എന്തുകൊണ്ട് എന്ന് വ്യക്തമായി മനസ്സിലാകും. മുഴുവൻ Q-Bank PDF ആയി ഡൗൺലോഡ് ചെയ്യാം."
								]
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 grid gap-2 sm:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/study",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "size-4" }),
									"അധ്യായം തിരഞ്ഞ് പഠിക്കുക",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "secondary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/quiz",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PenLine, { className: "size-4" }), "ക്വിസ് എഴുതുക"]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "outline",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/print",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileDown, { className: "size-4" }), "PDF ഡൗൺലോഡ്"]
							})
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl border border-border bg-card p-5 shadow-[var(--shadow-rule)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-end justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-lg font-semibold text-forest",
						children: "നിങ്ങളുടെ പുരോഗതി"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-ink-muted",
						children: [
							"കണ്ടത് ",
							seenN,
							" / ",
							TOTAL_QUESTIONS,
							" · ശരി ",
							right
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/search",
						className: "inline-flex h-11 items-center gap-1 text-sm text-forest",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-4" }), "തിരയുക"]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
					className: "mt-3",
					value: seenN / TOTAL_QUESTIONS * 100
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-lg font-semibold text-forest",
				children: "അധ്യായങ്ങൾ"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3 grid gap-3 sm:grid-cols-2",
				children: chapters.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/study/$chapterId",
					params: { chapterId: c.id },
					className: "block rounded-xl border border-border bg-card p-4 shadow-[var(--shadow-rule)] transition-shadow duration-150 hover:shadow-[var(--shadow-lift)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-display text-xs tracking-widest text-sage uppercase",
							children: [
								"Chapter ",
								c.roman,
								" · Paras ",
								c.paras
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-1 font-display text-base font-semibold text-ink",
							children: c.titleEn
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-forest",
							children: c.titleMl
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-ink-muted",
							children: c.blurbMl
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3 text-xs font-medium text-sage tabular-nums",
							children: [counts[c.id] ?? 0, " ചോദ്യങ്ങൾ"]
						})
					]
				}) }, c.id))
			})] })
		]
	});
}
//#endregion
export { Home as component };
