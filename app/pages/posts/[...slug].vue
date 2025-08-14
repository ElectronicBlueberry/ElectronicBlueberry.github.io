<script setup lang="ts">
import { ArrowLeft } from "lucide-vue-next";

const slug = toSlug(useRoute().params.slug);

const { data: post } = await useAsyncData(`post-${slug}`, async () => {
	return queryCollection("posts").path(slug).select("body").first();
});
</script>

<template>
	<div class="posts">
		<ColorButton to="/">
			<ArrowLeft />
			return to all posts
		</ColorButton>

		<ContentDisplay v-if="post" :content="post" />
	</div>
</template>

<style lang="postcss" scoped>
.posts {
	display: flex;
	flex-direction: column;
	gap: var(--spacing-2);
	margin-top: calc(var(--spacing-2) * -1);
}

.color-button {
	align-self: start;
	margin-left: var(--spacing-2);
}
</style>
