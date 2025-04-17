<script setup lang="ts">
	import LogoSVG from '~/assets/logo.svg';
	const q = useQuasar();
</script>

<template>
	<div class="col-12 relative-position full-width" style="height: 100vh">
		<q-intersection
			tag="img"
			transition="fade"
			src="/images/service/3.jpg"
			alt="DirectAuto"
			class="Image"
			style="" />
		<div class="absolute-center text-white text-center">
			<q-intersection transition="scale" tag="div">
				<q-img
					v-gsap.parallax.faster
					:src="LogoSVG"
					height="250px"
					:width="q.screen.lt.sm ? `85vw` : '100%'"
					fit="contain" />
			</q-intersection>
			<q-intersection
				v-gsap.parallax.slower
				transition="fade"
				:transition-duration="1000"
				tag="div"
				class="text-h6 text-grey-4">
				{{ $t('slogan') }}
			</q-intersection>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.Image {
		-webkit-mask-image: linear-gradient(to bottom, black 0%, transparent 100%);
		mask-image: linear-gradient(to bottom, black 0%, transparent 100%);
		position: relative;
		height: inherit;
		width: 100%;
		object-fit: cover;
		object-position: center;
		filter: brightness(0.3);
	}
</style>
