<script setup lang="ts">
import DynamicBackground from "~/components/pixi/DynamicBackground.vue";
</script>

<template>
	<div class="default-layout">
		<div class="header">
			<DynamicBackground />

			<NuxtLink class="title-card" to="/">
				<div class="stripe blue" />
				<div class="stripe red" />
				<div class="stripe yellow" />
				<div class="stripe purple" />

				<h2>Laila Los</h2>
				<span> Software Developer </span>
			</NuxtLink>
		</div>

		<div class="gradient" />

		<div class="content">
			<slot />
		</div>
	</div>
</template>

<style lang="postcss" scoped>
.default-layout {
	display: flex;
	flex-direction: column;
	height: 100dvh;
}

.header {
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
}

.title-card {
	align-self: center;
	background-color: var(--color-purple-300);
	padding: var(--spacing-2) var(--spacing-8);
	margin: var(--spacing-8) 0;
	border-radius: 999px;
	box-shadow: var(--shadow);
	text-decoration: none;
	overflow: hidden;
	position: relative;

	&:active {
		color: var(--color-purple-800);
	}

	h2 {
		position: relative;
		font-size: 3rem;
		font-weight: 400;
	}

	span {
		position: relative;
		font-size: 1.5rem;
		line-height: 1;
		font-weight: 100;
	}

	@media screen and (max-width: 400px) {
		padding: var(--spacing-2) var(--spacing-6);

		h2 {
			font-size: 2.5rem;
		}

		span {
			font-size: 1.2rem;
		}
	}

	.stripe {
		display: block;
		position: absolute;
		top: -2px;
		left: -2px;
		bottom: -2px;
		right: -2px;
		translate: calc(-100% - 20px) 0;
		transition: translate 0.6s ease-in-out;
		box-shadow: var(--shadow);

		&:last-of-type {
			box-shadow: none;
		}
	}

	&:hover,
	&:active,
	&:focus {
		.stripe {
			translate: 0 0;
		}
	}

	.blue {
		background-color: var(--color-blue-500);
		transition-delay: 0;
	}

	.red {
		background-color: var(--color-red-400);
		transition-delay: 80ms;
	}

	.yellow {
		background-color: var(--color-yellow-400);
		transition-delay: 160ms;
	}

	.purple {
		background-color: var(--color-purple-300);
		transition-delay: 240ms;
	}
}

.gradient {
	height: 1rem;
	background: linear-gradient(
		to right,
		var(--color-blue-500),
		var(--color-purple-500),
		var(--color-red-500),
		var(--color-yellow-500)
	);
	flex-shrink: 0;
}

.content {
	background-color: var(--color-grey-200);
	flex-grow: 1;
	padding: var(--spacing-4);

	display: flex;
	flex-direction: column;
	align-items: center;
}
</style>
