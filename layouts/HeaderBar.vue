<script setup lang="ts">
	import Logo from '~/assets/logo.svg';

	const { locales, setLocale, t } = useI18n();

	const openDrawer: Ref<boolean> = ref(false);
	const links = computed(() => [
		{ label: t('services'), to: '/#offers' },
		{ label: t('contacts'), to: '/#contacts' },
		{ label: t('about'), to: '/#about' },
	]);
</script>
<template>
	<q-header>
		<q-toolbar class="bg-black">
			<q-toolbar-title class="row text-h6">
				<NuxtLink :to="$localePath('/')" style="height: 100%; width: 112px">
					<q-img :src="Logo" alt="logo" class="q-mr-sm" fit="contain" position="0" />
				</NuxtLink>
			</q-toolbar-title>
			<q-space />
			<div class="row gt-sm q-gutter-x-md absolute-center">
				<q-btn
					v-for="link in links"
					:key="link.label"
					:to="$localePath(link.to)"
					color="transparent"
					text-color="grey-5"
					:label="link.label" />
			</div>
			<q-space />
			<div class="row q-gutter-x-sm gt-xs">
				<q-btn-group flat>
					<q-btn
						v-for="locale in locales"
						:key="locale.code"
						color="transparent"
						:text-color="locale.code === $i18n.locale ? 'secondary' : 'white'"
						:label="locale.code.toUpperCase()"
						@click="setLocale(locale.code)" />
				</q-btn-group>
				<q-btn class="" color="primary" icon="add" :label="$t('applyForService')" />
			</div>
			<q-btn
				flat
				round
				dense
				icon="menu"
				class="q-ml-sm lt-sm"
				@click="() => (openDrawer = !openDrawer)" />
			<q-drawer v-model="openDrawer" side="right" overlay class="bg-black text-white">
				<q-list class="q-pa-md">
					<q-item
						v-for="link in links"
						:key="link.label"
						clickable
						:to="$localePath(link.to)">
						<q-item-section class="text-white">{{ link.label }}</q-item-section>
					</q-item>
					<q-separator />
					<q-item
						v-for="locale in locales"
						:key="locale.code"
						clickable
						color="transparent"
						text-color="white"
						:label="locale.code.toUpperCase()"
						@click="setLocale(locale.code)">
						<q-item-section>{{ locale.code.toUpperCase() }}</q-item-section>
					</q-item>
				</q-list>
			</q-drawer>
		</q-toolbar>
	</q-header>
</template>
