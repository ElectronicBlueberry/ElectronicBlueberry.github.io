<script setup lang="ts">
import { NuxtLink } from "#components";

const props = defineProps<{
	to?: string;
}>();

const emit = defineEmits<{
	(e: "click"): void;
}>();

const component = computed(() => {
	if (props.to) {
		return NuxtLink;
	} else {
		return "button";
	}
});
</script>

<template>
	<component
		:is="component"
		:to="props.to"
		class="color-button"
		@click="emit('click')"
	>
		<div class="background">
			<div class="stripe one" />
			<div class="stripe two" />
			<div class="stripe three" />
		</div>

		<slot />
	</component>
</template>

<style lang="postcss" scoped>
.color-button {
	display: flex;
	justify-content: center;
	align-items: center;
	gap: var(--spacing-1);
	align-self: center;
	position: relative;
	z-index: 0;

	color: var(--color-purple-900);
	font-weight: 700;
	font-size: 1rem;
	text-align: center;
	text-decoration: none;

	border: none;
	background-color: transparent;

	.background {
		position: absolute;
		height: calc(100% + var(--spacing-1));
		width: calc(100% + var(--spacing-4));
		overflow: hidden;
		border-radius: var(--spacing-8);
		z-index: -100;

		box-shadow: var(--shadow);
		background-color: var(--color-purple-200);
		border: none;
		border-radius: var(--spacing-8);

		transition-property: width;
		transition-duration: 0.4s;
		transition-timing-function: cubic-bezier(0.5, 0, 0.75, 1.4);

		.stripe {
			position: absolute;
			top: -2px;
			left: -2px;
			bottom: -2px;
			right: -2px;
			z-index: -100;
			box-shadow: var(--shadow);

			transition-property: translate;
			transition-duration: 0.6s;
			transition-timing-function: ease-in-out;

			translate: calc(-100% - 20px) 0;

			&.one {
				background-color: var(--color-blue-300);
				transition-delay: 0;
			}

			&.two {
				background-color: var(--color-yellow-400);
				transition-delay: 80ms;
			}

			&.three {
				background-color: var(--color-red-500);
				transition-delay: 160ms;
			}
		}
	}

	&:hover {
		.background {
			width: calc(100% + var(--spacing-8));

			.stripe {
				translate: 0 0;
			}
		}
	}
}
</style>
