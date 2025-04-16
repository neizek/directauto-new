<script setup lang="ts">
const images = [
	'/images/service/1.jpg',
	'/images/service/2.jpg',
	'/images/service/3.jpg',
	'/images/service/4.jpg',
	'/images/service/5.jpg',
];
</script>
<template>
	<div class="row q-col-gutter-xl">
		<UiImageBeauty :images="images" />
	</div>
</template>
