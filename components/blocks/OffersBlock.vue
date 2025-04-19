<script setup lang="ts">
	import { offers } from '~/lib/offers';

	// const { t } = useI18n();
</script>

<template>
	<section id="offers" class="column text-white q-pa-md q-pa-sm-xl row q-col-gutter-xl">
		<!-- <q-intersection class="text-center" tag="h2" transition="slide-right">
			Услуги
		</q-intersection> -->
		<h3 v-gsap.whenVisible.once.reversible.from="{ x: -100, opacity: 0 }" class="text-center">
			{{ $t('services') }}
		</h3>
		<div class="row q-col-gutter-md">
			<div
				v-for="offer in offers"
				:key="offer.label"
				v-gsap.whenVisible.once.reversible.from="{ scale: 0.4, opacity: 0 }"
				class="col-md-3 col-6">
				<q-item class="q-pa-md" style="border-radius: 16px; background-color: #0e0e0e">
					<q-item-section avatar>
						<q-avatar>
							<q-img :src="offer.icon" fit="contain" class="q-pa-md" />
						</q-avatar>
					</q-item-section>
					<q-item-section>
						<q-item-label lines="3" class="text-caption">
							{{ $t(offer.label) }}
						</q-item-label>
					</q-item-section>
					<q-popup-proxy
						unelevated
						class="lt-md no-shadow"
						transition-show="scale"
						transition-hide="scale">
						<q-banner>
							<template #avatar>
								<q-avatar>
									<q-img :src="offer.icon" fit="contain" class="q-pa-md" />
								</q-avatar>
							</template>
							{{ $t(offer.label) }}
						</q-banner>
					</q-popup-proxy>
				</q-item>
			</div>
		</div>
	</section>
</template>
