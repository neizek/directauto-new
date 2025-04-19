<script setup lang="ts">
	import mapboxgl from 'mapbox-gl';

	const config = useRuntimeConfig();

	mapboxgl.accessToken = config.public.mapBoxToken;

	const mapContainer = ref(null);
	const props = defineProps<{
		carServicesList: Array<{
			id: number;
			address: string;
			coordinates: [number, number] | null;
		}>;
	}>();

	onMounted(() => {
		if (mapContainer.value === null) {
			return;
		}

		const map = new mapboxgl.Map({
			container: mapContainer.value,
			style: 'mapbox://styles/mapbox/navigation-night-v1',
			center: [24.198310039551963, 56.990224093655414],
			zoom: 9,
			cooperativeGestures: true,
		});

		map.addControl(new mapboxgl.FullscreenControl());

		const bounds = new mapboxgl.LngLatBounds();
		props.carServicesList.forEach((carService) => {
			if (carService.coordinates) {
				new mapboxgl.Marker().setLngLat(carService.coordinates).addTo(map);
				bounds.extend(carService.coordinates);
			}
		});

		map.fitBounds(bounds, {
			padding: 50,
			maxZoom: 15,
			duration: 1000,
		});
	});
</script>

<template>
	<div v-gsap.whenVisible.once.reversible.from="{ opacity: 0 }" class="Container">
		<div ref="mapContainer" class="map-container" style="" />
	</div>
</template>

<style lang="scss" scoped>
	.Container {
		width: 100%;
		height: 100%;

		.map-container {
			flex: 1;
			height: 100%;
			min-height: 400px;
			max-height: 600px;
			border-radius: 10px;
			// aspect-ratio: 4/3;
		}
	}
</style>
