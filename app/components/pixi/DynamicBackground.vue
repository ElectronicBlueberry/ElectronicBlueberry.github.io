<script setup lang="ts">
import { Application, Filter, GlProgram } from "pixi.js";
import { backgroundGradient } from "./renderSteps/backgroundGradient";
import colorRemapShaderCode from "./colorRemap.fragment.glsl?raw";
import vertexShaderCode from "./vertexShader.vertex.glsl?raw";
import { blobParticles } from "./renderSteps/blobParticles";

const pixiContainer = ref<HTMLDivElement>();

onMounted(async () => {
	const app = new Application();
	const pixiParent = pixiContainer.value;

	if (!pixiParent) {
		throw new Error("Pixi parent element not found");
	}

	await app.init({ resizeTo: pixiParent, backgroundColor: "white" });

	pixiParent.appendChild(app.canvas);

	backgroundGradient(app);
	await blobParticles(app);

	const colorRemapFilter = new Filter({
		glProgram: new GlProgram({
			fragment: colorRemapShaderCode,
			vertex: vertexShaderCode,
		}),
	});

	app.stage.filters = [colorRemapFilter];
});
</script>

<template>
	<div ref="pixiContainer" />
</template>

<style lang="postcss" scoped>
div {
	position: absolute;
	width: 100%;
	height: 100%;
}
</style>
