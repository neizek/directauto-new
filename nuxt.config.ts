// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	devtools: { enabled: true },
	modules: ['@nuxt/eslint', 'nuxt-quasar-ui', '@nuxtjs/i18n'],
	i18n: {
		locales: [
			{ code: 'lv', language: 'lv-LV', name: 'Latviešu', file: 'lv.json' },
			{ code: 'ru', language: 'ru-RU', name: 'Русский', file: 'ru.json' },
		],
		defaultLocale: 'lv',
	},
	quasar: {
		config: {
			dark: true,
		},
		components: {
			defaults: {
				QBtn: {
					unelevated: true,
					noCaps: true,
				},
				QBtnToggle: {
					unelevated: true,
				},
				QIntersection: {
					threshold: 0.5,
					margin: '30%',
				},
				QCard: {
					flat: true,
				},
			},
		},
	},
});
