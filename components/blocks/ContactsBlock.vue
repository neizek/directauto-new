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
		phone: '+371 12345678',
		coordinates: [24.198310039551963, 56.990224093655414],
	},
	{
		id: 1,
		address: 'Tvaika iela 3, Rīga',
		phone: '+371 87654321',
		coordinates: [24.198310039551963, 56.990224093655414],
	},
];
</script>

<template>
	<div class="column text-white q-pa-md q-pa-sm-xl row q-col-gutter-xl">
		<h4 class="text-center">Контакты</h4>
		<div class="row q-col-gutter-xl">
			<div class="column col-md-8 col-12">
				<WidgetsInteractiveMap :car-services-list="carServicesList" />
			</div>
			<div class="column col-md-4 col-12">
				<q-item
					v-for="carService in carServicesList"
					:key="carService.id"
					bordered
					class="q-mb-md">
					<q-item-section>
						<q-item-label class="text-h6">{{ carService.address }}</q-item-label>
						<q-item-label>{{ carService.phone }}</q-item-label>
					</q-item-section>
				</q-item>
			</div>
		</div>
	</div>
</template>
