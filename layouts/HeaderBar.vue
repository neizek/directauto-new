<script setup lang="ts">
	import Logo from '~/assets/logo.svg';

	const { locales, setLocale, t } = useI18n();

	const openDrawer: Ref<boolean> = ref(false);
	const links = computed(() => [
		{ label: t('services'), to: '/#offers', icon: 'build' },
		{ label: t('contacts'), to: '/#contacts', icon: 'place' },
		{ label: t('about'), to: '/#about', icon: 'info' },
	]);
	const isOpenAppointmentForm = ref(false);
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
				<q-btn
					class=""
					color="primary"
					icon="add"
					:label="$t('applyForService')"
					@click="isOpenAppointmentForm = true" />
			</div>
			<q-btn
				flat
				round
				dense
				icon="menu"
				class="q-ml-sm lt-sm"
				@click="() => (openDrawer = !openDrawer)" />
			<q-drawer v-model="openDrawer" side="right" overlay class="bg-black text-white">
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
						:to="$localePath(link.to)">
						<q-item-section avatar>
							<q-icon :name="link.icon" color="white" />
						</q-item-section>
						<q-item-section class="text-white">{{ link.label }}</q-item-section>
					</q-item>
					<q-item
						class="bg-primary rounded-borders"
						clickable
						@click="
							() => {
								isOpenAppointmentForm = true;
								openDrawer = false;
							}
						">
						<q-item-section avatar>
							<q-icon name="add" color="white" />
						</q-item-section>
						<q-item-section class="text-white">
							{{ $t('applyForService') }}
						</q-item-section>
					</q-item>
					<!-- <q-btn
						class="full-width"
						color="primary"
						icon="add"
						:label="$t('applyForService')"
						@click="isOpenAppointmentForm = true" /> -->
				</q-list>
			</q-drawer>
		</q-toolbar>
		<q-dialog v-model="isOpenAppointmentForm" position="bottom">
			<WidgetsAppointmentForm />
		</q-dialog>
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
