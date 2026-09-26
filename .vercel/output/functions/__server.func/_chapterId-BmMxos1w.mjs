import { b as Link, q as notFound } from "./_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "./_libs/radix-ui__react-context+react.mjs";
import { h as ArrowLeft } from "./_libs/lucide-react.mjs";
import { n as Route } from "./_ssr/router-BH6nS-8V.mjs";
import { c as questionsForChapter, n as chapterById } from "./_ssr/questions-C2LG63w4.mjs";
import { t as QuestionBlock } from "./_ssr/question-block-Dj0SNk6z.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_chapterId-BmMxos1w.js
var import_jsx_runtime = require_jsx_runtime();
function ChapterStudy() {
	const { chapterId } = Route.useParams();
	const chapter = chapterById(chapterId);
	if (!chapter) throw notFound();
	const list = questionsForChapter(chapter.id);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/study",
				className: "inline-flex h-11 items-center gap-2 text-sm text-forest",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), "എല്ലാ അധ്യായങ്ങളും"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-display text-xs tracking-[0.18em] text-sage uppercase",
					children: [
						"Chapter ",
						chapter.roman,
						" · Paras ",
						chapter.paras,
						" · ",
						list.length,
						" questions"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-1 font-display text-2xl font-semibold text-forest",
					children: chapter.titleEn
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-ink-muted",
					children: [
						chapter.titleMl,
						". ",
						chapter.blurbMl
					]
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4",
				children: list.map((q, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuestionBlock, {
					q,
					index: i + 1,
					mode: "study"
				}, q.id))
			})
		]
	});
}
//#endregion
export { ChapterStudy as component };
