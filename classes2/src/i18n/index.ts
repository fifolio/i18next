import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enCommon from "./locales/en/common.json";
import frCommon from "./locales/fr/common.json";
import arCommon from "./locales/ar/common.json";

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                common: enCommon,
            },
            fr: {
                common: frCommon,
            },
            ar: {
                common: arCommon,
            }
        },
        lng: "en", // default language
        fallbackLng: "en",
        ns: ["common"],
        defaultNS: "common",
        interpolation: {
            escapeValue: false, // React already escapes
        },
    });

export default i18n;
