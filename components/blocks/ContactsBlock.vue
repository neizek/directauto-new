<script setup lang="ts">
	import MapSVG from '~/assets/icons/illustrations/map.svg';
	// import { ScrollTrigger } from 'gsap/all';
	// import { gsap } from 'gsap/all';
	import { carServicesList } from '~/lib/locations';
	import { pauseAnimations, resumeAnimations } from '~/lib/animations';

	const carServiceDialog = ref({
		isOpen: false,
		details: carServicesList[0],
	});

	watch(
		carServiceDialog.value,
		() => {
			if (carServiceDialog.value.isOpen) {
				pauseAnimations();
			} else {
				resumeAnimations();
			}
		},
		{ immediate: true }
	);

	const openDetails = (index: number) => {
		carServiceDialog.value.details = carServicesList[index];
		carServiceDialog.value.isOpen = true;
	};
</script>

<template>
	<section id="contacts" style="display: block" class="column q-pa-md q-pa-sm-xl q-col-gutter-xl">
		<h3 v-gsap.whenVisible.once.reversible.from="{ x: '-40%', opacity: 0 }" class="text-center">
			{{ $t('howToFindUs') }}
		</h3>
		<div class="row q-col-gutter-xl">
			<div class="col-md-8 col-12">
				<WidgetsInteractiveMap :car-services-list="carServicesList" />
			</div>
			<div class="q-gutter-y-md column col-md-4 col-12">
				<q-img
					v-gsap.whenVisible.once.reversible.from="{ scale: 0.3, opacity: 0 }"
					v-gsap.parallax.faster
					fit="contain"
					:src="MapSVG"
					alt="contacts"
					:ratio="4 / 3"
					class="q-mt-md gt-sm" />
				<q-card
					v-for="(carService, index) in carServicesList"
					:key="carService.id"
					v-gsap.whenVisible.once.reversible.from="{ scale: 0.4, opacity: 0 }">
					<q-item class="q-pa-md" clickable @click="openDetails(index)">
						<q-item-section avatar>
							<q-avatar color="primary" text-color="white" icon="place" />
						</q-item-section>
						<q-item-section>
							<q-item-label>
								{{ carService.address }}
							</q-item-label>
							<q-item-label caption>{{ carService.phone }}</q-item-label>
						</q-item-section>
						<q-item-section side>
							<q-icon size="32px" text-color="white" name="chevron_right" />
						</q-item-section>
					</q-item>
				</q-card>
			</div>
		</div>
	</section>
	<q-dialog v-model="carServiceDialog.isOpen" position="bottom">
		<WidgetsCarServiceDetails :car-service="carServiceDialog.details" />
	</q-dialog>
</template>
