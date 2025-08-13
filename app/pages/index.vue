<script setup lang="ts">
import type { UnwrapRef } from "vue";
import { GitHubIcon } from "vue3-simple-icons";
import ColorButton from "~/components/ColorButton.vue";
import TextBox from "~/components/TextBox.vue";

const { data: page } = await useAsyncData("main", () => {
	return queryCollection("general").path("/main").first();
});

const { data: posts } = await useAsyncData("posts", () => {
	return queryCollection("posts")
		.select(
			"path",
			"date",
			"summary",
			"excerpt",
			"externalUrl",
			"externalName",
			"title",
			"titleImage",
		)
		.order("date", "DESC")
		.all();
});

type Post = NonNullable<UnwrapRef<typeof posts>>[number];

function getPostLayoutClass(post: Post) {
	if (post.title && post.titleImage) {
		return "title-image-post";
	}

	return "";
}
</script>

<template>
	<div class="index-page">
		<TextBox>
			<ContentRenderer v-if="page" :value="page" />
			<ColorButton
				class="github-button"
				to="https://github.com/ElectronicBlueberry"
			>
				<GitHubIcon size="1rem" /> Check out my Github
			</ColorButton>
		</TextBox>

		<DecoratedHeading is="h2" size="l" separator>Things I Do</DecoratedHeading>

		<TextBox
			v-for="post in posts"
			:key="post.path"
			:class="getPostLayoutClass(post)"
		>
			<h2 v-if="post.title" class="title">{{ post.title }}</h2>
			<NuxtImg
				v-if="post.titleImage"
				class="title-image"
				:src="post.titleImage"
				loading="lazy"
				width="300"
				format="webp"
				quality="90"
				placeholder
			/>
			<span v-if="post.summary" class="summary"> {{ post.summary }} </span>
			<ContentRenderer
				v-if="post.excerpt"
				class="excerpt"
				:value="post.excerpt"
			/>
			<ColorButton v-if="post.externalUrl" class="link" :to="post.externalUrl">
				Read on {{ post.externalName ?? "External Site" }}
			</ColorButton>
		</TextBox>
	</div>
</template>

<style lang="postcss" scoped>
.index-page {
	display: flex;
	flex-direction: column;
	gap: var(--spacing-3);
}

.github-button {
	margin-top: var(--spacing-2);
	margin-bottom: var(--spacing-2);
}

.title-image-post {
	display: grid;
	grid-template-rows: auto 1fr auto;
	grid-template-areas: "title title" "image text" "image link";
	gap: var(--spacing-2);

	.title {
		grid-area: title;
	}

	.title-image {
		grid-area: image;
	}

	.summary,
	.excerpt {
		grid-area: text;
	}

	.link {
		grid-area: link;
		justify-self: center;
	}

	@media screen and (max-width: 800px) {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
}
</style>
