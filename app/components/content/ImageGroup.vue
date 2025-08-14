<template>
	<div class="image-group">
		<slot />
	</div>
</template>

<style lang="postcss" scoped>
.image-group:deep(p) {
	display: flex;
	gap: var(--spacing-1);
	flex-wrap: wrap;

	> * {
		flex: 1 1 200px;
	}
}
</style>
