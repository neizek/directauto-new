<script lang="ts" setup>
defineProps<{ images: string[] }>();
const activeImg = ref(2);
</script>

<template>
	<div class="ImageBeauty col-12" @mouseleave="activeImg = 2">
		<div
			v-for="(image, index) in images"
			:key="image"
			class="ImageContainer"
			:class="{ active: index === activeImg }"
			@mouseover="activeImg = index">
			<q-img :src="image" fit="cover" height="100%" width="100%" alt="DirectAuto" />
		</div>
	</div>
</template>

<style lang="scss">
.ImageBeauty {
	display: flex;
	flex-direction: row;
	gap: 16px;

	.ImageContainer {
		height: 400px;
		width: 10%;
		border-radius: 16px;
		overflow: hidden;
		transition: width 0.3s;

		&.active {
			width: 60%;
		}

		&:first-child {
			border-radius: 0 16px 16px 0;
		}

		&:last-child {
			border-radius: 16px 0 0 16px;
		}
	}
}
</style>
