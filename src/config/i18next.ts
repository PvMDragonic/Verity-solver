import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
.use(HttpApi)
.use(LanguageDetector)
.use(initReactI18next)
.init({
    debug: false,
    fallbackLng: 
    {
        'pt-BR': ['pt'],
        'pt-PT': ['pt'],
        'en-US': ['en'],
        'en-GB': ['en'],
        'es-ES': ['es'], 
        'es-MX': ['es'],  
        'default': ['en']
    },
    interpolation: 
    {
        escapeValue: false,
    },
    backend: 
    {
        loadPath: '/Verity-solver/locales/{{lng}}/translation.json',
    },
});

export default i18n;