<script setup lang="ts">
	import type { CarService } from '~/lib/locations';

	defineProps({
		carService: {
			type: Object as () => CarService,
			required: true,
		},
	});
</script>
<template>
	<q-card v-if="carService !== undefined" flat style="min-width: 400px" class="q-pa-md-md">
		<q-card-section class="q-pa-none">
			<q-list>
				<q-item>
					<q-item-section class="q-py-sm">
						<q-item-label>{{ carService.address }}</q-item-label>
						<q-item-label caption>{{ carService.phone }}</q-item-label>
					</q-item-section>
				</q-item>
				<q-item>
					<q-item-section class="q-gutter-sm">
						<q-btn
							nowrap
							color="accent"
							outline
							:label="`${$t('openIn')} Waze`"
							target="_blank"
							:href="`https://www.waze.com/ul?ll=${carService.coordinates[1]}%2C${carService.coordinates[0]}&navigate=yes`" />
						<q-btn
							nowrap
							color="accent"
							outline
							:label="`${$t('openIn')} Google Maps`"
							target="_blank"
							:href="`https://www.google.com/maps/dir/?api=1&destination=${carService.coordinates[1]}%2C${carService.coordinates[0]}`" />
						<q-btn
							v-if="carService.phone !== undefined"
							nowrap
							color="accent"
							:href="`tel:${carService.phone}`"
							icon="phone"
							:label="$t('call')" />
					</q-item-section>
				</q-item>
			</q-list>
		</q-card-section>
	</q-card>
</template>
