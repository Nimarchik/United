import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import HttpBackend from 'i18next-http-backend'
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector/cjs'


i18n
	.use(HttpBackend)
	.use(I18nextBrowserLanguageDetector)
	.use(initReactI18next)
	.init({
		lang: 'uk',
		fallbackLng: 'uk',
		debug: false,
		backend: {
			loadPath: '/public/locales/{{lng}}/translate.json',
		},
		interpolation: {
			escapeValue: false,
		},
		
	})

export default i18n
