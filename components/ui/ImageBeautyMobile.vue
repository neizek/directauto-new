<template>
	<div v-gsap.whenVisible.from="{ scale: 0.3, opacity: 0 }" class="image-scroller hide-scrollbar">
		<div v-for="(image, index) in images" :key="index" class="slide q-pa-md">
			<q-img
				:src="image"
				alt="Image"
				height="100%"
				width="100%"
				class="q-pm-md rounded-borders" />
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
		height: 300px; /* Adjust height as needed */
		position: relative;
	}

	.slide {
		scroll-snap-align: center;
		scroll-snap-stop: always;
		border-radius: 8px;
		height: 100%;
		width: 100vw;
		object-fit: cover;
		aspect-ratio: 16 / 9;
	}
</style>
