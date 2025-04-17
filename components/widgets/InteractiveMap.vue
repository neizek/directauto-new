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
		});

		map.addControl(new mapboxgl.FullscreenControl());

		const bounds = new mapboxgl.LngLatBounds();
		props.carServicesList.forEach((carService) => {
			if (carService.coordinates) {
				// const marker = new mapboxgl.Marker().setLngLat(carService.coordinates).addTo(map);
				new mapboxgl.Marker().setLngLat(carService.coordinates).addTo(map);
				// marker.getElement().addEventListener('click', () => props.openDetails(carwash));
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
	<div class="Container">
		<div ref="mapContainer" class="map-container" style="" />
	</div>
</template>

<style lang="scss" scoped>
	.Container {
		width: 100%;
		max-height: 600px;

		> div {
			// display: flex;
			border-radius: 10px;
			aspect-ratio: 16 / 9;
		}
	}
</style>
