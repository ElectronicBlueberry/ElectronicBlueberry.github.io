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
		posts: defineCollection({
			type: "page",
			source: {
				include: "posts/**/*.md",
				prefix: "",
			},
			schema: z.object({
				date: z.string(),
				externalUrl: z.string().optional(),
				externalName: z.string().optional(),
				summary: z.string().optional(),
				title: z.string().optional(),
				titleImage: z.string().optional(),
				excerpt: z
					.object({
						type: z.string(),
						children: z.any(),
					})
					.optional(),
			}),
		}),
	},
});
