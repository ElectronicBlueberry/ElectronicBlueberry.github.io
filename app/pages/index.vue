<script setup lang="ts">
const { data: page } = await useAsyncData("main", () => {
	return queryCollection("general").path("/main").first();
});
</script>

<template>
	<ContentRenderer v-if="page" :value="page" />
</template>
