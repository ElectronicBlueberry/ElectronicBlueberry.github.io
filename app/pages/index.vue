<script setup lang="ts">
import { ExternalLink, Mail } from "lucide-vue-next";
import { GitHubIcon } from "vue3-simple-icons";
import ColorButton from "~/components/content/ColorButton.vue";
import TextBox from "~/components/TextBox.vue";

const { data: page } = await useAsyncData("main", () => {
	return queryCollection("general").path("/main").first();
});

const { data: posts } = await useAsyncData("posts", () => {
	return queryCollection("posts")
		.select(
			"path",
			"date",
			"description",
			"externalUrl",
			"externalName",
			"title",
			"titleImage",
			"titleImageAlt",
			"titleImageSize",
		)
		.order("date", "DESC")
		.all();
});
</script>

<template>
	<div class="index-page">
		<TextBox class="main-info">
			<ContentRenderer v-if="page" :value="page" />

			<div class="buttons">
				<ColorButton to="https://github.com/ElectronicBlueberry">
					<GitHubIcon size="1rem" /> Check out my Github
				</ColorButton>

				<ColorButton to="mailto:mail@lailalos.com">
					<Mail :size="20" /> Contact me
				</ColorButton>
			</div>
		</TextBox>

		<DecoratedHeading is="h2" size="l" separator>Things I Do</DecoratedHeading>

		<TextBox v-for="post in posts" :key="post.path" class="title-image-post">
			<h2 v-if="post.title" class="title">{{ post.title }}</h2>
			<NuxtImg
				v-if="post.titleImage"
				class="title-image"
				:src="post.titleImage"
				:alt="post.titleImageAlt ?? 'Decorative image without relevant content'"
				:width="post.titleImageSize?.[0] ?? 300"
				:height="post.titleImageSize?.[1] ?? 300"
				format="webp"
				quality="90"
			/>
			<span v-if="post.description" class="summary">
				{{ post.description }}
			</span>
			<ColorButton v-if="post.externalUrl" class="link" :to="post.externalUrl">
				<ExternalLink :size="16" />
				Read on {{ post.externalName ?? "External Site" }}
			</ColorButton>
			<ColorButton v-else class="link" :to="`posts${post.path}`">
				Read more
			</ColorButton>
		</TextBox>
	</div>
</template>

<style lang="postcss" scoped>
.index-page {
	display: flex;
	flex-direction: column;
	gap: var(--spacing-6);
	padding-bottom: var(--spacing-4);
}

.main-info {
	.buttons {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--spacing-1);
		margin-top: var(--spacing-2);
		margin-bottom: var(--spacing-2);
	}
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

	.summary {
		grid-area: text;
	}

	.link {
		grid-area: link;
		justify-self: end;
		margin-right: var(--spacing-3);
	}

	@media screen and (max-width: 800px) {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
}
</style>
