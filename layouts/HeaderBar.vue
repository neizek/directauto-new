<script setup lang="ts">
const { locales, setLocale } = useI18n();
</script>
<template>
	<q-toolbar class="bg-white">
		<q-toolbar-title class="text-h6">
			<img
				src="~assets/logo.svg"
				alt="logo"
				class="q-mr-sm"
				style="display: flex; height: 50px"
			>
		</q-toolbar-title>
		<q-space />
		<div class="row q-gutter-x-sm">
			<q-btn color="primary" icon="add" :label="$t('applyForService')" to="/about" />
			<q-btn-group flat>
				<q-btn
					v-for="locale in locales"
					:key="locale.code"
					color="primary"
					:label="locale.code.toUpperCase()"
					@click="setLocale(locale.code)"
				/>
			</q-btn-group>
		</div>
	</q-toolbar>
</template>
