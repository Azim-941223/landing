/**
 * i18next Configuration
 *
 * This code initializes the i18next internationalization library in your application.
 * It sets up language detection, backend loading, and configuration options.
 *
 * @module i18next Configuration
 * @example
 * // Import and use the i18next configuration in your application:
 * import i18n from "./i18nConfig";
 * // ...
 */

import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

// Initialize i18next with necessary plugins and configuration options
i18next
  .use(HttpApi) // Use the HttpApi backend for loading translations from a remote server.
  .use(LanguageDetector) // Enable language detection based on user preferences.
  .use(initReactI18next) // Initialize i18next for React applications.
  .init({
    supportedLngs: ["en", "ru", "ky"], // Define the supported languages in your application.
    fallbackLng: "ru", // Set a fallback language in case the user's preferred language is not available.
    debug: false, // Enable debugging mode if needed.

    // Configure language detection with order and caches options.
    detection: {
      order: ["path", "cookie", "htmlTag"],
      caches: ["cookie"],
    },

    // Configure the backend to load translation files from a specific path.
    backend: {
      loadPath: "/shared/locales/{{lng}}/translation.json", // Specify the path to translation files.
    },
  });

export default i18next;
