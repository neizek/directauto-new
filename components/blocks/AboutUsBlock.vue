<script setup lang="ts">
	import ProgressSVG from '~/assets/icons/illustrations/team.svg';
	const itemsList = [
		{
			text: 'Проконсультирует Вас во всех вопросах, которые касаются ремонта, обслуживания и технического состояния авто;',
			icon: 'question_answer',
		},
		{
			text: 'Детализировано зафиксирует все Ваши пожелания, касающиеся ремонта авто;',
			icon: 'assignment',
		},
		{
			text: 'Проконтролирует весь процесс ремонтных работ Вашего авто;',
			icon: 'supervisor_account',
		},
		{
			text: 'Проинформирует Вас о дополнительных расходах и ремонтных работах (если они будут необходимы), которые будут связаны с качественным ремонтом и обслуживанием Вашего авто;',
			icon: 'payments',
		},
		{
			text: 'После проделанных ремонтных работ проведёт детализированый осмотр авто, чтобы убедится в качестве работы;',
			icon: 'policy',
		},
		{
			text: 'Свяжется с Вами, чтобы проинформировать о проделанной работе и согласовать удобное для Вас время возврата авто;',
			icon: 'call',
		},
	];
</script>

<template>
	<div id="about" class="q-pa-md q-pa-sm-xl row q-col-gutter-xl">
		<div class="column col-md-6 col-12">
			<h4 v-gsap.whenVisible.from="{ x: '-40%', opacity: 0 }" class="text-center">
				{{ $t('about') }}
			</h4>
			<q-img
				v-gsap.whenVisible.from="{ scale: 0.3, opacity: 0 }"
				v-gsap.parallax.faster
				fit="contain"
				:src="ProgressSVG"
				alt="contacts"
				:ratio="2 / 1"
				class="q-mt-md" />
			<UiParagraph>
				DirectAuto продолжает удачно развиваться, как автосервис который с индивидуальным
				подходом и высоким чувством ответственности обслуживает юридические и физические
				лица. Предлагаем Вам обслуживать своё личное авто или автопарк Вашего предприятия у
				нас, так как наша команда состоит из высоко квалифицированных специалистов.
			</UiParagraph>
			<UiParagraph>
				Обслуживая свой автомобиль в нашем сервисе, у Вас будет возможность, убедиться в
				позитивной атмосфере и в профессиональной подготовке наших работников. Сотрудничая с
				ведущими дилерами запчастей в Прибалтике и Европе, наш автосервис сможет подобрать
				запчасти соответствующие Вашим финансовым возможностям и желаниям.
			</UiParagraph>
		</div>
		<div class="column col-md-6 col-12">
			<h4 v-gsap.whenVisible.from="{ x: '-40%', opacity: 0 }" class="text-center">
				{{ $t('carService') }}
			</h4>
			<UiParagraph>
				Обращаясь в автосервис DirectAuto Вас встретит наш отзывчивый коллектив и Ваш
				автомобиль примет управляющее лицо, которое:
			</UiParagraph>
			<q-list>
				<q-item
					v-for="(item, index) in itemsList"
					:key="index"
					v-gsap.whenVisible.once.reversible.from="{
						x: index % 2 ? '-40%' : '40%',
						scale: 0.3,
						opacity: 0,
					}"
					class="q-mb-sm">
					<q-item-section avatar>
						<q-icon :name="item.icon" color="primary" size="32px" />
					</q-item-section>
					<q-item-section>{{ item.text }}</q-item-section>
				</q-item>
			</q-list>
		</div>
	</div>
</template>
