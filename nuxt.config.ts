// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	devtools: { enabled: true },
	modules: ['@nuxt/eslint', 'nuxt-quasar-ui', '@nuxtjs/i18n', 'v-gsap-nuxt', 'nuxt-anchorscroll'],
	i18n: {
		locales: [
			{ code: 'lv', language: 'lv-LV', name: 'Latviešu', file: 'lv.json' },
			{ code: 'ru', language: 'ru-RU', name: 'Русский', file: 'ru.json' },
		],
		defaultLocale: 'lv',
	},
	css: ['~/assets/styles/mapbox-gl.css', '~/assets/styles/main.scss'],
	runtimeConfig: {
		public: {
			mapBoxToken: process.env.MAPBOX_ACCESS_TOKEN,
		},
	},
	router: {
		options: {
			scrollBehaviorType: 'smooth',
		},
	},
	anchorscroll: {
		// If you're using page transitions, specify the correct hook
		hooks: ['page:transition:finish'],
	},
	quasar: {
		config: {
			dark: true,
		},
		cssAddon: true,
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
				QInput: {
					color: 'accent',
					outlined: true,
				},
				QSelect: {
					color: 'accent',
					outlined: true,
				},
			},
		},
	},
});
