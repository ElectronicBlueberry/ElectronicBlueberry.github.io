// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2025-07-15",
	devtools: { enabled: true },
	modules: ["@nuxt/content", "@nuxt/eslint", "@nuxt/image"],
	css: ["~/assets/css/main.css"],
	postcss: {
		plugins: {
			"postcss-nested": {},
		},
	},
});
