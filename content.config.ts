import { defineCollection, defineContentConfig, z } from "@nuxt/content";

export default defineContentConfig({
	collections: {
		general: defineCollection({
			type: "page",
			source: {
				include: "general/*.md",
				prefix: "",
			},
		}),
	},
});
