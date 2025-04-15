<script setup lang="ts">
import FooterBar from './FooterBar.vue';
import HeaderBar from './HeaderBar.vue';
</script>

<template>
	<div>
		<q-layout view="hHh lpR fff" class="bg-grey-2">
			<HeaderBar />
			<q-page-container class="wrapper w1200">
				<q-page>
					<slot />
				</q-page>
			</q-page-container>
			<FooterBar />
		</q-layout>
	</div>
</template>
