import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { en, jp, th } from "./locate";

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: en,
            jp: jp,
            th: th
        },
        /* default language when load the website in browser */
        lng: localStorage.getItem("language") ? localStorage.getItem("language"):"en",
        /* When react i18next not finding any language to as default in borwser */
        fallbackLng: "en",
        /* debugger For Development environment */
        debug: false,
        ns: ["Language"],
        defaultNS: "Language",
        keySeparator: ".",
        interpolation: {
            escapeValue: false,
            formatSeparator: ","
        },
        react: {
            wait: true,
            bindI18n: 'languageChanged loaded',
            bindStore: 'added removed',
            nsMode: 'default'
        }
    })

export default i18n;