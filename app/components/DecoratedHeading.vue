<script setup lang="ts">
const props = defineProps<{
	is: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span";
	size: "s" | "m" | "l";
	separator?: boolean;
}>();

const componentClasses = computed(() => {
	const classObject: Record<string, boolean> = {
		separator: props.separator,
	};

	classObject[`size-${props.size}`] = true;

	return classObject;
});
</script>

<template>
	<component :is="props.is" :class="componentClasses" class="decorated-heading">
		<slot />
	</component>
</template>

<style lang="postcss" scoped>
.decorated-heading {
	&.size-s {
		font-size: 1rem;
	}

	&.size-m {
		font-size: 1.5rem;
	}

	&.size-l {
		font-size: 2rem;
	}

	&.separator {
		display: grid;
		grid-template-columns: 1fr auto 1fr;
		gap: var(--spacing-2);
		align-items: center;

		&::before,
		&::after {
			content: "";
			display: block;
			background-color: var(--color-purple-200);
			height: 2px;
		}
	}
}
</style>
