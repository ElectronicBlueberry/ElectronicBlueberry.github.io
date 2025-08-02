<script setup lang="ts">
const { data: page } = await useAsyncData("main", () => {
	return queryCollection("general").path("/main").first();
});
</script>

<template>
	<div class="index-page">
		<div class="title-card">
			<h1>Laila Los</h1>
			<span> Front-End Developer </span>
		</div>

		<ContentRenderer v-if="page" :value="page" />
	</div>
</template>

<style lang="postcss" scoped>
.index-page {
	display: flex;
	flex-direction: column;
	align-items: center;
}

.title-card {
	background-color: var(--color-purple-300);
	padding: var(--spacing-2) var(--spacing-8);
	margin: var(--spacing-8) 0;
	border-radius: 999px;
	box-shadow: var(--shadow);

	h1 {
		font-size: 3rem;
		font-weight: 400;
	}

	span {
		font-size: 1.5rem;
		line-height: 1;
		font-weight: 100;
	}
}
</style>
