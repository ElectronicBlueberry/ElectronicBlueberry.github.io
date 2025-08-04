<script setup lang="ts">
import { GitHubIcon } from "vue3-simple-icons";

const { data: page } = await useAsyncData("main", () => {
	return queryCollection("general").path("/main").first();
});
</script>

<template>
	<TextBox>
		<ContentRenderer v-if="page" :value="page" />
		<ColorButton
			class="github-button"
			to="https://github.com/ElectronicBlueberry"
		>
			<GitHubIcon size="1rem" /> Check out my Github
		</ColorButton>
	</TextBox>
</template>

<style lang="postcss" scoped>
.github-button {
	margin-top: var(--spacing-2);
	margin-bottom: var(--spacing-2);
}
</style>
