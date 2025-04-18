<template>
	<div class="image-scroller hide-scrollbar">
		<div
			v-for="(image, index) in images"
			:key="index"
			v-gsap.whenVisible.from="{ opacity: 0, x: 100 }"
			class="slide q-pa-md">
			<q-img :src="image" alt="Image" height="100%" width="100%" class="rounded-borders" />
		</div>
	</div>
</template>

<script setup lang="ts">
	defineProps({
		images: {
			type: Array as () => string[],
			required: true,
		},
	});
</script>

<style scoped>
	.image-scroller {
		scroll-snap-type: mandatory;
		display: flex;
		overflow: hidden;
		overflow-x: scroll;
		width: 100%;
		height: 300px;
		position: relative;
	}

	.slide {
		scroll-snap-align: center;
		scroll-snap-stop: always;
		border-radius: 8px;
		height: 100%;
		min-width: 100%;
		object-fit: cover;
		aspect-ratio: 16 / 9;
	}
</style>
