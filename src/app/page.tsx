"use client";

import Link from "next/link";
import { useI18n } from "./i18n";

export default function WelcomePage() {
  const { t, setLocale, locale } = useI18n();

  const toggleLocale = () => {
    setLocale(locale === "en" ? "ko" : "en");
  };

  return (
    <div className="relative z-20 flex w-full max-w-md flex-1 flex-col items-center justify-between px-6 pt-12 pb-8 text-center">
      <div className="flex items-center justify-end w-full">
        <button
          onClick={toggleLocale}
          className="flex items-center gap-1 rounded-full bg-white/20 dark:bg-black/20 backdrop-blur-sm px-3 py-1.5 text-slate-800 dark:text-slate-200 text-sm font-medium"
        >
          <span className="material-symbols-outlined !text-base">language</span>
          <span>{t("language")}</span>
          <span className="material-symbols-outlined !text-base">expand_more</span>
        </button>
      </div>
      <div className="flex flex-col items-center text-center">
        <div className="relative w-24 h-24 mb-6">
          <div className="absolute inset-0 bg-white dark:bg-slate-900 rounded-full shadow-lg"></div>
          <div className="absolute w-full h-1/2 top-0 left-0 bg-tae-red rounded-t-full overflow-hidden"></div>
          <div className="absolute w-full h-1/2 bottom-0 left-0 bg-tae-blue rounded-b-full overflow-hidden"></div>
          <div className="absolute w-1/2 h-1/2 top-1/4 left-0 bg-tae-blue rounded-full"></div>
          <div className="absolute w-1/2 h-1/2 top-1/4 right-0 bg-tae-red rounded-full"></div>
        </div>
        <h1 className="text-slate-900 dark:text-white tracking-tight text-3xl sm:text-4xl font-bold leading-tight">
          {t("welcome.title")}
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-base font-normal leading-normal pt-3">
          {t("welcome.subtitle")}
        </p>
      </div>
      <div className="w-full pt-10">
        <Link
          href="/start/name"
          className="flex min-w-[84px] w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-5 bg-gradient-to-r from-tae-blue to-tae-red text-white text-base font-bold leading-normal tracking-[0.015em] shadow-lg shadow-tae-blue/20 dark:shadow-tae-red/20 hover:opacity-90 transition-opacity duration-200"
        >
          <span className="truncate">{t("welcome.cta")}</span>
        </Link>
      </div>
    </div>
  );
}