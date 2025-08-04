<script setup lang="ts"></script>

<template>
	<div class="text-box">
		<slot />
	</div>
</template>

<style lang="postcss" scoped>
.text-box {
	background-color: var(--color-grey-100);
	padding: var(--spacing-2);
	border-radius: var(--spacing-2);
	box-shadow: var(--shadow);
	max-width: 800px;
	display: flex;
	flex-direction: column;
	gap: var(--spacing-1);

	&:deep(h1) {
		margin-bottom: var(--spacing-1);
	}
}
</style>
