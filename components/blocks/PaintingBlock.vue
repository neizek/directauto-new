<script lang="ts" setup>
const slide = ref(1);
</script>

<template>
	<div class="text-white q-pa-xl q-pa-md-xs row q-col-gutter-xl">
		<div class="column col-lg-5 col-12">
			<q-intersection transition="slide-right" tag="h4" class="text-center">
				Автопокраска
			</q-intersection>
			<p class="text-justify">
				DirectAuto автосервис оснащён современным многопользовательским оборудованием,
				которое позволяет быстро и качественно осуществить покраску автомобиля, гарантирую
				аккуратную работу каждому клиенту. Наш специалист с 13-ти летним стажем работы в
				этой сфере выполняет качественно ремонтные работы по кузову любой машины.
			</p>
			<p class="text-justify">
				Автомобильная покраска происходит в специально оборудованном месте, в закрытой
				камере, что гарантирует соблюдение стандартов качества и экологии покраски. В камере
				покраски высокие потолки, что позволяет красить не только легковые автомобили, а
				микроавтобусы и джипы в том числе. Чтобы обеспечить нужное качество покраски и
				дружественные цены для клиентов, мы работаем с проверенными материалами. Краска
				заказывается индивидуально, чтобы тон краски точно совпадал с оригинальным цветом
				автомобиля. В нашем автосервисе возможна как полная, так и частичная покраска,
				включая перекраску отдельных деталей.
			</p>
		</div>
		<div class="col-lg-7 col-12">
			<q-carousel
				v-model="slide"
				transition-prev="slide-right"
				transition-next="slide-left"
				swipeable
				animated
				navigation
				autoplay
				control-color="white"
				class="rounded-borders">
				<q-carousel-slide :name="1" img-src="/images/paint/1.jpg" />
				<q-carousel-slide :name="2" img-src="/images/paint/2.jpg" />
				<q-carousel-slide :name="3" img-src="/images/paint/3.jpg" />
				<q-carousel-slide :name="4" img-src="/images/paint/4.jpg" />
				<q-carousel-slide :name="5" img-src="/images/paint/5.jpg" />
			</q-carousel>
		</div>
	</div>
</template>
