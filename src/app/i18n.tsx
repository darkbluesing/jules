"use client";

import { createContext, useContext, useState, ReactNode, useCallback } from "react";
import en from "../../locales/en.json";
import ko from "../../locales/ko.json";

type Locale = "en" | "ko";
type Translations = typeof en;

const translations: Record<Locale, Translations> = { en, ko };

interface I18nState {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: keyof Translations, replacements?: Record<string, string>) => string;
}

const I18nContext = createContext<I18nState | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");

  const t = useCallback(
    (key: keyof Translations, replacements?: Record<string, string>) => {
      let translation = translations[locale][key] || translations["en"][key];
      if (replacements) {
        Object.entries(replacements).forEach(([key, value]) => {
          translation = translation.replace(`{${key}}`, value);
        });
      }
      return translation;
    },
    [locale]
  );

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
}