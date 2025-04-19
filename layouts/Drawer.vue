<script setup lang="ts">
	import { links } from '~/lib/links';
	import { openDrawer } from '~/lib/drawer';
	import { gsap } from 'gsap/all';

	watch(openDrawer, (val) => {
		if (val) {
			gsap.globalTimeline.pause();
		} else {
			gsap.globalTimeline.resume();
		}
	});

	// const { scrollToAnchor } = useAnchorScroll({
	// 	scrollOptions: {
	// 		behavior: 'smooth',
	// 	},
	// });

	const { locales, setLocale } = useI18n();
</script>

<template>
	<q-drawer v-model="openDrawer" side="left" overlay class="bg-black text-white">
		<q-list class="q-pa-md q-gutter-y-sm">
			<q-item-label class="text-h6 text-center q-ma-md">
				{{ $t('menu') }}
			</q-item-label>
			<q-separator class="q-my-sm" color="primary" />
			<q-btn-group flat spread>
				<q-btn
					v-for="locale in locales"
					:key="locale.code"
					color="transparent"
					:text-color="locale.code === $i18n.locale ? 'secondary' : 'white'"
					:label="locale.name"
					@click="setLocale(locale.code)" />
			</q-btn-group>
			<q-separator class="q-my-sm" color="primary" />
			<q-item
				v-for="link in links"
				:key="link.label"
				clickable
				class="rounded-borders"
				:to="{ path: '/', hash: link.to }">
				<q-item-section avatar>
					<q-icon :name="link.icon" color="white" />
				</q-item-section>
				<q-item-section class="text-white">{{ $t(link.label) }}</q-item-section>
			</q-item>
			<q-item class="bg-primary rounded-borders" clickable :to="$localePath('/appointment')">
				<q-item-section avatar>
					<q-icon name="add" color="white" />
				</q-item-section>
				<q-item-section class="text-white">
					{{ $t('applyForService') }}
				</q-item-section>
			</q-item>
		</q-list>
	</q-drawer>
</template>
