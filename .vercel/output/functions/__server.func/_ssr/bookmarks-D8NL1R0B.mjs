import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { o as questionById } from "./questions-C2LG63w4.mjs";
import { t as useProgress } from "./progress-CED-BKts.mjs";
import { t as QuestionBlock } from "./question-block-Dj0SNk6z.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/bookmarks-D8NL1R0B.js
var import_jsx_runtime = require_jsx_runtime();
function BookmarksPage() {
	const list = useProgress((s) => s.bookmarks).map(questionById).filter((q) => q != null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-2xl font-semibold text-forest",
			children: "സൂക്ഷിപ്പ്"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-sm text-ink-muted",
			children: "പിന്നീട് ആവർത്തിക്കാൻ ബുക്ക്‌മാർക്ക് ചെയ്ത ചോദ്യങ്ങൾ. ബ്രൗസറിൽ സൂക്ഷിക്കുന്നു."
		})] }), list.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "rounded-xl border border-border bg-card p-6 text-sm text-ink-muted",
			children: "ഇതുവരെ ബുക്ക്‌മാർക്ക് ഇല്ല. പഠനത്തിൽ ബുക്ക് ഐക്കൺ അമർത്തുക."
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4",
			children: list.map((q, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuestionBlock, {
				q,
				index: i + 1,
				mode: "study"
			}, q.id))
		})]
	});
}
//#endregion
export { BookmarksPage as component };
