<script setup lang="ts">
const slug = toSlug(useRoute().params.slug);

const { data: post } = await useAsyncData(`post-${slug}`, async () => {
	return queryCollection("posts").path(slug).select("body").first();
});
</script>

<template>
	<ContentDisplay v-if="post" :content="post" />
</template>
