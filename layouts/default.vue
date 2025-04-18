<script setup lang="ts">
	import Drawer from './Drawer.vue';
	import FooterBar from './FooterBar.vue';
	import HeaderBar from './HeaderBar.vue';
</script>

<template>
	<div>
		<q-layout view="hHh lpR fff" class="bg-black">
			<HeaderBar />
			<Drawer />
			<q-page-container class="wrapper w1200">
				<slot />
			</q-page-container>
			<FooterBar />
		</q-layout>
	</div>
</template>
