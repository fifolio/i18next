import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      welcomeMSG_one: "You have {{count}} notification", // this going to tell react-i18next to use this if the count is 1
      welcomeMSG_other: "You have {{count}} notifications" // this is going to tell react-i18next that this key receives a count that has a value of 0 or grater than 1, its going to use this version because this a plural version.
    }
  },
  fr: {
    translation: {
      welcomeMSG_one: "Vous avez {{count}} notification",
      welcomeMSG_other: "Vous avez {{count}} notifications" 
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: 'fr',
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;