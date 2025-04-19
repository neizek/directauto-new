<script setup lang="ts">
	import Logo from '~/assets/logo.svg';
	import { links } from '~/lib/links';
	import { openDrawer } from '~/lib/drawer';

	const { locales, setLocale } = useI18n();
</script>
<template>
	<q-header class="Header">
		<q-toolbar>
			<q-toolbar-title class="row text-h6">
				<NuxtLink :to="$localePath('/')" style="height: 100%; width: 112px">
					<q-img :src="Logo" alt="logo" class="q-mr-sm" fit="contain" position="0" />
				</NuxtLink>
			</q-toolbar-title>
			<q-space />
			<div class="row gt-sm q-gutter-x-md absolute-center">
				<q-btn
					v-for="link in links"
					:key="$t(link.label)"
					color="transparent"
					text-color="grey-5"
					:label="$t(link.label)"
					:to="{ path: $localePath('/'), hash: link.to }" />
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
				<q-btn
					class=""
					color="primary"
					icon="add"
					:label="$t('applyForService')"
					:to="$localePath('appointment')" />
			</div>
			<q-btn
				flat
				round
				dense
				icon="menu"
				class="q-ml-sm lt-sm"
				@click="() => (openDrawer = !openDrawer)" />
		</q-toolbar>
	</q-header>
</template>

<style lang="scss" scoped>
	.Header {
		margin: 8px;
		background: rgba(0, 0, 0, 0.38);
		border-radius: 6px;
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(20px);
		-webkit-backdrop-filter: blur(20px);
	}
</style>
