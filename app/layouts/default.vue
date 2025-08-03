<template>
	<div class="default-layout">
		<NuxtLink class="title-card" to="/">
			<div class="stripe blue" />
			<div class="stripe red" />
			<div class="stripe yellow" />
			<div class="stripe purple" />

			<h1>Laila Los</h1>
			<span> Front-End Developer </span>
		</NuxtLink>

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

	h1 {
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

	.stripe {
		margin: calc(var(--spacing-2) * -1) calc(var(--spacing-8) * -1);
		display: block;
		position: absolute;
		height: calc(100% + 4px);
		width: calc(100% + 4px);
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
}
</style>
