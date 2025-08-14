<script setup lang="ts">
import type { PostsCollectionItem } from "@nuxt/content";

const props = defineProps<{
	content: Pick<PostsCollectionItem, "body">;
}>();
</script>

<template>
	<TextBox>
		<ContentRenderer class="content" :value="props.content" />
	</TextBox>
</template>

<style lang="postcss" scoped>
.content {
	display: flex;
	flex-direction: column;
	gap: var(--spacing-1);

	&:deep(> p) {
		margin-bottom: var(--spacing-1);

		&:has(img) {
			align-self: center;
		}
	}

	&:deep(> h2),
	&:deep(> h3),
	&:deep(> h4) {
		margin-top: var(--spacing-2);
		margin-bottom: var(--spacing-1);

		a {
			text-decoration: none;
			color: var(--color-purple-800);

			&::before {
				content: "#";
				color: var(--color-purple-200);
				margin-right: var(--spacing-1);
			}

			&:hover::before {
				color: var(--color-purple-600);
			}
		}
	}
}
</style>
