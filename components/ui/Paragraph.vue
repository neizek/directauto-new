<template>
	<p v-gsap.whenVisible.once.reversible.from="{ opacity: 0 }" class="text-justify text-grey-4">
		<slot />
	</p>
</template>

<style lang="scss" scoped>
	p {
		text-indent: 2.5em;
	}
</style>
