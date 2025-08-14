<script setup lang="ts">
const props = defineProps({
	src: {
		type: String,
		default: "",
	},
	alt: {
		type: String,
		default: "",
	},
	width: {
		type: [String, Number],
		default: undefined,
	},
	height: {
		type: [String, Number],
		default: undefined,
	},
});
</script>

<template>
	<div>
		<NuxtImg
			:src="props.src"
			:alt="props.alt"
			:width="props.width"
			:height="props.height"
			format="webp"
		/>
	</div>
</template>

<style lang="postcss" scoped>
div {
	justify-self: center;
}

img {
	display: block;
}
</style>
