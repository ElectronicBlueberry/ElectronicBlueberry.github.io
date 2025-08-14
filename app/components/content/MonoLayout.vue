<script setup lang="ts">
import { useElementSize } from "@vueuse/core";

const props = defineProps<{
	text: string;
}>();

const testGlyph = ref<HTMLPreElement>();

const { width: charWidth } = useElementSize(testGlyph);

const widthTester = ref<HTMLDivElement>();

const { width: availableWidth } = useElementSize(widthTester);

const lineLength = computed(() =>
	Math.floor(availableWidth.value / charWidth.value),
);

const layouted = useMonoglyph(() => props.text, lineLength);
</script>

<template>
	<pre ref="testGlyph" class="test-glyph">A</pre>
	<div ref="widthTester" class="width-tester" />
	<div class="content-wrapper">
		<pre class="content">{{ layouted }}</pre>
	</div>
</template>

<style lang="postcss" scoped>
.mono-layout {
	overflow: hidden;
}

.test-glyph,
.content {
	font-size: 0.9rem;
}

.test-glyph {
	pointer-events: none;
	position: absolute;
	top: -1000px;
}

.width-tester {
	height: 0px;
	align-self: stretch;
}

.content-wrapper {
	width: 0px;
}
</style>
