<script lang="ts" setup>
	import ReceptionSVG from '~/assets/icons/illustrations/receptionist.svg';
</script>
<template>
	<section class="q-pa-md q-pa-sm-xl row q-col-gutter-xl">
		<div class="col-md-6 col-12">
			<h4>Подать заявку на сервис</h4>
			<UiParagraph>
				У вас есть возможность записаться заранее на услуги сервиса DirectAuto для
				проведения ремонтных работ, заполнив форму. Админимстрация автосервиса свяжется с
				вами в течении 2 часов в рабочие дни с 9:00 до 17:00.
			</UiParagraph>
			<q-img :src="ReceptionSVG" class="q-pa-xl gt-sm" width="100%" :ratio="1" />
		</div>
		<div class="col-md-6 col-12">
			<WidgetsAppointmentForm />
		</div>
	</section>
</template>
