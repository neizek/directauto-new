<script setup lang="ts">
	interface CarService {
		id: number;
		address: string;
		phone?: string;
		coordinates: [number, number] | null;
	}
	const carServicesList: CarService[] = [
		{
			id: 0,
			address: 'Brīvības iela 250, Rīga',
			phone: ' (+371) 20441133 ',
			coordinates: [24.198310039551963, 56.990224093655414],
		},
		{
			id: 1,
			address: 'Tvaika iela 3, Rīga',
			phone: '(+371) 67391995 ',
			coordinates: [24.198310039551963, 56.990224093655414],
		},
	];
</script>

<template>
	<div id="contacts" class="column q-pa-md q-pa-sm-xl row q-col-gutter-xl">
		<h3 v-gsap.whenVisible.from="{ x: '-40%', opacity: 0 }" class="text-center">
			{{ $t('contacts') }}
		</h3>
		<div class="row q-col-gutter-md">
			<div class="col-md-8 col-12">
				<WidgetsInteractiveMap :car-services-list="carServicesList" />
			</div>
			<div class="q-gutter-y-md col-md-4 col-12">
				<q-card v-for="carService in carServicesList" :key="carService.id">
					<!-- <q-card-section> -->
					<q-item class="q-pa-md" clickable>
						<q-item-section avatar>
							<q-avatar color="primary" text-color="white" icon="place" />
						</q-item-section>
						<q-item-section>
							<q-item-label class="text-h6">
								{{ carService.address }}
							</q-item-label>
							<q-item-label caption>{{ carService.phone }}</q-item-label>
						</q-item-section>
						<q-item-section side>
							<q-icon size="32px" text-color="white" name="chevron_right" />
						</q-item-section>
					</q-item>
					<!-- </q-card-section> -->
				</q-card>
			</div>
		</div>
	</div>
</template>
