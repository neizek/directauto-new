<template>
	<p v-gsap.whenVisible.from="{ opacity: 0 }" class="text-justify">
		<slot />
	</p>
</template>
