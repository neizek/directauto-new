<script lang="ts" setup>
	import { UiParagraph } from '#components';

	const slide = ref(1);
	const tab = ref('desc');
</script>

<template>
	<div class="row">
		<div class="q-pa-md q-pa-sm-xl column col-md-5 col-12">
			<h4
				v-gsap.whenVisible.once.reversible.from="{ x: '-40%', opacity: 0 }"
				class="text-center">
				Автопокраска
			</h4>
			<q-tabs
				v-model="tab"
				no-caps
				dense
				align="justify"
				active-color="accent"
				indicator-color="accent">
				<q-tab name="desc" icon="description" :label="$t('description')" />
				<q-tab name="tech" icon="handyman" :label="$t('technology')" />
			</q-tabs>
			<q-tab-panels
				v-model="tab"
				class="bg-transparent q-mt-md"
				animated
				swipeable
				transition-prev="slide-left"
				transition-next="slide-right">
				<q-tab-panel name="desc">
					<UiParagraph>
						DirectAuto автосервис оснащён современным многопользовательским
						оборудованием, которое позволяет быстро и качественно осуществить покраску
						автомобиля, гарантирую аккуратную работу каждому клиенту. Наш специалист с
						13-ти летним стажем работы в этой сфере выполняет качественно ремонтные
						работы по кузову любой машины.
					</UiParagraph>
				</q-tab-panel>

				<q-tab-panel name="tech">
					<UiParagraph>
						Автомобильная покраска происходит в специально оборудованном месте, в
						закрытой камере, что гарантирует соблюдение стандартов качества и экологии
						покраски. В камере покраски высокие потолки, что позволяет красить не только
						легковые автомобили, а микроавтобусы и джипы в том числе. Чтобы обеспечить
						нужное качество покраски и дружественные цены для клиентов, мы работаем с
						проверенными материалами. Краска заказывается индивидуально, чтобы тон
						краски точно совпадал с оригинальным цветом автомобиля. В нашем автосервисе
						возможна как полная, так и частичная покраска, включая перекраску отдельных
						деталей.
					</UiParagraph>
				</q-tab-panel>
			</q-tab-panels>
		</div>
		<div v-gsap.whenVisible.once.reversible.from="{ opacity: 0 }" class="col-md-7 col-12">
			<div
				class="bg-primary lt-md"
				style="clip-path: polygon(0% 0%, 90% 60%, 100% 100%, 0% 100%); height: 50px" />
			<div
				class="bg-primary gt-sm"
				style="clip-path: polygon(10% 0%, 90% 60%, 100% 100%, 0% 100%); height: 50px" />
			<q-carousel
				v-model="slide"
				transition-prev="slide-right"
				transition-next="slide-left"
				swipeable
				animated
				navigation
				autoplay
				infinite
				:class="`Carousel${$q.screen.gt.md ? '' : '-mobile'}`"
				control-color="white">
				<q-carousel-slide :name="1" img-src="/images/paint/1.jpg" />
				<q-carousel-slide :name="2" img-src="/images/paint/2.jpg" />
				<q-carousel-slide :name="3" img-src="/images/paint/3.jpg" />
				<q-carousel-slide :name="4" img-src="/images/paint/4.jpg" />
				<q-carousel-slide :name="5" img-src="/images/paint/5.jpg" />
			</q-carousel>
			<div
				class="bg-primary"
				style="clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 10% 40%); height: 50px" />
		</div>
	</div>
</template>

<style lang="scss">
	.Carousel {
		width: 100%;
		height: 100%;
		max-height: 460px;
		aspect-ratio: 16 / 9;

		&-mobile {
			width: 100%;
			aspect-ratio: 16 / 9;
		}
	}
</style>
