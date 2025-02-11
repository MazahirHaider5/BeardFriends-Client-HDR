import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enLang from "./locales/en/default.json";
import arLang from "./locales/gr/default.json";

const resources = {
  en: {
    translation: enLang
  },
  gr: {
    translation: arLang
  }
};

let savedLanguage: string;

if (typeof window !== "undefined") {
  // Access localStorage only if window is defined (client side)
  savedLanguage = localStorage.getItem("language") === "gr" ? "gr" : "en";
} else {
  // Default to English on the server side
  savedLanguage = "en";
}

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "en",
  lng: savedLanguage || "en",
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
