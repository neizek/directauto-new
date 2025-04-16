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
	<div class="column text-white q-pa-xl row q-col-gutter-xl">
		<q-intersection class="text-center" tag="h2" transition="slide-right">
			Услуги
		</q-intersection>
		<div class="row q-col-gutter-md">
			<div v-for="offer in offers" :key="offer.label" class="col-4 col-md-2">
				<q-card class="bg-black">
					<q-img :src="offer.icon" fit="contain" height="100px" class="q-pa-md" />
					<q-item class="column">
						<span class="text-center">{{ offer.label }}</span>
					</q-item>
				</q-card>
			</div>
		</div>
	</div>
</template>
