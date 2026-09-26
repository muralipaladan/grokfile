import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { r as cn } from "./router-BH6nS-8V.mjs";
import { l as searchQuestions } from "./questions-C2LG63w4.mjs";
import { t as QuestionBlock } from "./question-block-Dj0SNk6z.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/search-nYlT00QT.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Input({ className, type = "text", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-11 w-full rounded-md border border-input bg-card px-3 py-2 text-sm text-foreground shadow-[var(--shadow-rule)]", "placeholder:text-ink-faint focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring", "disabled:cursor-not-allowed disabled:opacity-50", className),
		...props
	});
}
function SearchPage() {
	const [q, setQ] = (0, import_react.useState)("");
	const hits = (0, import_react.useMemo)(() => searchQuestions(q).slice(0, 40), [q]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-2xl font-semibold text-forest",
				children: "തിരയുക"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-ink-muted",
				children: "Article, paragraph, bougette, PAC, reappropriation തുടങ്ങിയ കീവേഡുകൾ."
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				value: q,
				onChange: (e) => setQ(e.target.value),
				placeholder: "ചോദ്യമോ വിഷയമോ ടൈപ്പ് ചെയ്യുക",
				"aria-label": "Search questions"
			}),
			q.trim() ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-ink-muted tabular-nums",
				children: [hits.length, " ഫലം (പരമാവധി 40)"]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4",
				children: hits.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuestionBlock, {
					q: item,
					index: i + 1,
					mode: "study"
				}, item.id))
			})
		]
	});
}
//#endregion
export { SearchPage as component };
