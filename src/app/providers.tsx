"use client";

import { I18nProvider } from "./i18n";
import { OnboardingProvider } from "./start/store";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <I18nProvider>
      <OnboardingProvider>{children}</OnboardingProvider>
    </I18nProvider>
  );
}