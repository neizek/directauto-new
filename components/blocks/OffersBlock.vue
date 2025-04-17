<script setup lang="ts">
	import CarIcon from '~/assets/icons/offers/car.svg';
	import OilIcon from '~/assets/icons/offers/oil.svg';
	import WindShieldIcon from '~/assets/icons/offers/windshield.svg';
	import CarStandIcon from '~/assets/icons/offers/carstand.svg';
	import WheelIcon from '~/assets/icons/offers/wheel.svg';
	import EngineIcon from '~/assets/icons/offers/engine.svg';
	import BreakDownIcon from '~/assets/icons/offers/breakdown.svg';
	import LightsIcon from '~/assets/icons/offers/lights.svg';
	import ChassisIcon from '~/assets/icons/offers/chassis.svg';
	import BrakeIcon from '~/assets/icons/offers/break.svg';
	import GearshiftIcon from '~/assets/icons/offers/gearshift.svg';
	import ElectronicsIcon from '~/assets/icons/offers/electronics.svg';
	import PaintIcon from '~/assets/icons/offers/paint.svg';
	import SnowflakeIcon from '~/assets/icons/offers/snowflake.svg';

	const offers = [
		{ label: 'Подготовка к тех. осмотру', icon: CarIcon },
		{ label: 'Замена масла и фильтров', icon: OilIcon },
		{ label: 'Установка авто стекол', icon: WindShieldIcon },
		{ label: 'Диагностика и ремонт ходовой части', icon: CarStandIcon },
		{ label: 'Замена колёс на дисках любого размера;', icon: WheelIcon },
		{ label: 'Диагностика и ремонт двигателя', icon: EngineIcon },
		{ label: 'Ремонт легковых авто и микроавтобусов', icon: BreakDownIcon },
		{ label: 'Регулировка освещения', icon: LightsIcon },
		{ label: 'Развал схождения на 3D стенде (только Brīvības 250)', icon: ChassisIcon },
		{ label: 'Диагностика тормозной системы на тормозном стенде', icon: BrakeIcon },
		{ label: 'Диагностика и ремонт коробки передач', icon: GearshiftIcon },
		{ label: 'Диагностика и ремонт электроприборов (только Tvaika 3)', icon: ElectronicsIcon },
		{ label: 'Покрасочные работы любой сложности', icon: PaintIcon },
		{ label: 'Подготовка авто к зимнему/летнему сезону', icon: SnowflakeIcon },
	];
</script>

<template>
	<div id="offers" class="column text-white q-pa-md q-pa-sm-xl row q-col-gutter-xl">
		<!-- <q-intersection class="text-center" tag="h2" transition="slide-right">
			Услуги
		</q-intersection> -->
		<h3 v-gsap.whenVisible.from="{ x: -100, opacity: 0 }" class="text-center">
			{{ $t('services') }}
		</h3>
		<div class="row q-col-gutter-md">
			<!-- <div
				v-for="offer in offers"
				:key="offer.label"
				v-gsap.whenVisible.from="{ scale: 0.4, opacity: 0 }"
				class="col-6 col-md-2">
				<q-card class="bg-black">
					<q-img :src="offer.icon" fit="contain" height="100px" class="q-pa-md" />
					<q-item class="column">
						<span class="text-center" style="line-clamp: 2">{{ offer.label }}</span>
					</q-item>
				</q-card>
			</div> -->
			<div
				v-for="offer in offers"
				:key="offer.label"
				v-gsap.whenVisible.from="{ scale: 0.4, opacity: 0 }"
				class="col-md-3 col-6">
				<q-item class="q-pa-md" style="border-radius: 16px; background-color: #0e0e0e">
					<q-item-section avatar>
						<q-avatar>
							<q-img :src="offer.icon" fit="contain" class="q-pa-md" />
						</q-avatar>
					</q-item-section>
					<q-item-section>
						<q-item-label lines="2" class="text-caption">
							{{ offer.label }}
						</q-item-label>
					</q-item-section>
				</q-item>
			</div>
		</div>
	</div>
</template>
