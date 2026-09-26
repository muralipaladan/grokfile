import { n as create, t as persist } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/progress-CED-BKts.js
var useProgress = create()(persist((set) => ({
	seen: {},
	results: {},
	bookmarks: [],
	quizzes: [],
	markSeen: (id) => set((s) => ({ seen: {
		...s.seen,
		[id]: true
	} })),
	markResult: (id, correct) => set((s) => ({
		seen: {
			...s.seen,
			[id]: true
		},
		results: {
			...s.results,
			[id]: correct
		}
	})),
	toggleBookmark: (id) => set((s) => ({ bookmarks: s.bookmarks.includes(id) ? s.bookmarks.filter((x) => x !== id) : [...s.bookmarks, id] })),
	addQuiz: (record) => set((s) => ({ quizzes: [record, ...s.quizzes].slice(0, 20) })),
	reset: () => set({
		seen: {},
		results: {},
		bookmarks: [],
		quizzes: []
	})
}), { name: "kbm-padam-progress" }));
//#endregion
export { useProgress as t };
