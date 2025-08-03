<script setup lang="ts">
const { data: page } = await useAsyncData("main", () => {
	return queryCollection("general").path("/main").first();
});
</script>

<template>
	<TextBox>
		<ContentRenderer v-if="page" :value="page" />
	</TextBox>
</template>
