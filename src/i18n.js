import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';

i18n
	.use(HttpBackend)
	.use(I18nextBrowserLanguageDetector)
	.use(initReactI18next)
	.init({
		lng: 'uk',
		fallbackLng: 'uk',
		debug: false,
		backend: {
			loadPath: `${import.meta.env.BASE_URL}locales/{{lng}}/translate.json`,

		},
		interpolation: {
			escapeValue: false,
		},
		react: {
			useSuspense: false,
		},
	});

export default i18n;
