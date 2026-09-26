import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { c as questionsForChapter, i as chapters } from "./questions-C2LG63w4.mjs";
import { t as useProgress } from "./progress-CED-BKts.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/study-Cz36Wq26.js
var import_jsx_runtime = require_jsx_runtime();
function StudyIndex() {
	const results = useProgress((s) => s.results);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-2xl font-semibold text-forest",
			children: "പഠനം"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-sm text-ink-muted",
			children: "ഒരു അധ്യായം തുറന്ന് ചോദ്യം വായിക്കുക, ഓപ്ഷൻ തിരഞ്ഞെടുക്കുക, മലയാളം വിശദീകരണം നോക്കുക."
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "grid gap-3",
			children: chapters.map((c, i) => {
				const list = questionsForChapter(c.id);
				const done = list.filter((q) => results[q.id]).length;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/study/$chapterId",
					params: { chapterId: c.id },
					className: "flex items-start gap-4 rounded-xl border border-border bg-card p-4 shadow-[var(--shadow-rule)] hover:shadow-[var(--shadow-lift)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-sm font-semibold text-sage tabular-nums",
							children: String(i + 1).padStart(2, "0")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "min-w-0 flex-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block font-display font-semibold text-ink",
									children: c.titleEn
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-sm text-forest",
									children: c.titleMl
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-1 block text-sm text-ink-muted",
									children: c.blurbMl
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "shrink-0 text-right text-xs text-ink-muted tabular-nums",
							children: [
								done,
								"/",
								list.length,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block",
									children: "ശരി/ആകെ"
								})
							]
						})
					]
				}) }, c.id);
			})
		})]
	});
}
//#endregion
export { StudyIndex as component };
