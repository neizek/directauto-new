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
			<q-intersection tag="h2" transition="scale" class="no-wrap">
				DirectAuto autoserviss
			</q-intersection>
			<q-intersection transition="fade" :transition-duration="1000" tag="div" class="text-h6">
				Наш приоритет – качественная работа, индивидуальный подход и довольный клиент!
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
