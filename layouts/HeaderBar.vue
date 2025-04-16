<script setup lang="ts">
import Logo from '~/assets/logo.svg';
const { locales, setLocale } = useI18n();
const openDrawer: Ref<boolean> = ref(false);
</script>
<template>
	<q-toolbar class="bg-black">
		<q-toolbar-title class="row text-h6">
			<q-img
				:src="Logo"
				alt="logo"
				class="q-mr-sm"
				height="50px"
				fit="contain"
				position="0" />
		</q-toolbar-title>
		<q-space />
		<div class="row q-gutter-x-sm gt-xs">
			<q-btn class="" color="primary" icon="add" :label="$t('applyForService')" />
			<q-btn-group flat>
				<q-btn
					v-for="locale in locales"
					:key="locale.code"
					color="transparent"
					text-color="white"
					:label="locale.code.toUpperCase()"
					@click="setLocale(locale.code)" />
			</q-btn-group>
		</div>
		<q-btn
			flat
			round
			dense
			icon="menu"
			class="q-ml-sm"
			@click="() => (openDrawer = !openDrawer)" />
		<q-drawer v-model="openDrawer" side="right" overlay class="bg-black text-white">
			<q-list>
				<q-item clickable>
					<q-item-section>Home</q-item-section>
				</q-item>
				<q-item clickable>
					<q-item-section>Services</q-item-section>
				</q-item>
				<q-item clickable>
					<q-item-section>Contact</q-item-section>
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
</template>
