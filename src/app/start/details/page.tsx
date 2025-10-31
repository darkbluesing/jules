"use client";

import Link from "next/link";
import { useOnboardingState } from "../store";
import { useI18n } from "@/app/i18n";
import clsx from "clsx";

export default function DetailsInputPage() {
  const {
    gender,
    setGender,
    nameStyle,
    setNameStyle,
    meaning,
    setMeaning,
  } = useOnboardingState();
  const { t, setLocale, locale } = useI18n();

  const toggleLocale = () => {
    setLocale(locale === "en" ? "ko" : "en");
  };

  const genderOptions = [
    { key: "details.gender.male", value: "Male" },
    { key: "details.gender.female", value: "Female" },
  ];
  const styleOptions = [
    { key: "details.style.modern", value: "Modern" },
    { key: "details.style.traditional", value: "Traditional" },
    { key: "details.style.gentle", value: "Gentle" },
    { key: "details.style.strong", value: "Strong" },
  ];

  return (
    <div className="relative z-20 flex w-full max-w-md flex-1 flex-col justify-between px-6 pt-2 pb-8">
      <header className="relative z-20 flex items-center justify-between p-4 px-6 -mx-6">
        <Link href="/start/name" className="flex items-center justify-center w-10 h-10">
          <span className="material-symbols-outlined text-slate-900 dark:text-white">
            {t("back")}
          </span>
        </Link>
        <div className="relative">
          <button
            onClick={toggleLocale}
            className="flex items-center gap-1.5 rounded-full bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm px-3 py-1.5 ring-1 ring-inset ring-slate-300 dark:ring-slate-700"
          >
            <span className="material-symbols-outlined text-base text-slate-700 dark:text-slate-300">
              language
            </span>
            <span className="text-sm font-medium text-slate-800 dark:text-slate-200">
              {t("language")}
            </span>
            <span className="material-symbols-outlined text-base text-slate-700 dark:text-slate-300">
              expand_more
            </span>
          </button>
        </div>
      </header>
      <div className="flex flex-col items-center text-center">
        <div className="relative w-24 h-24 mb-6">
          <div className="absolute inset-0 bg-white dark:bg-slate-900 rounded-full shadow-lg"></div>
          <div className="absolute w-full h-1/2 top-0 left-0 bg-tae-red rounded-t-full overflow-hidden"></div>
          <div className="absolute w-full h-1/2 bottom-0 left-0 bg-tae-blue rounded-b-full overflow-hidden"></div>
          <div className="absolute w-1/2 h-1/2 top-1/4 left-0 bg-tae-blue rounded-full"></div>
          <div className="absolute w-1/2 h-1/2 top-1/4 right-0 bg-tae-red rounded-full"></div>
        </div>
        <h1 className="text-slate-900 dark:text-white tracking-tight text-3xl sm:text-4xl font-bold leading-tight whitespace-pre-line">
          {t("details.title")}
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-base font-normal leading-normal pt-3">
          {t("details.subtitle")}
        </p>
      </div>
      <div className="flex flex-col w-full gap-6 mt-8">
        <div className="flex flex-col gap-4">
          <label className="flex w-full flex-col">
            <p className="text-slate-800 dark:text-slate-200 text-base font-medium leading-normal pb-2">
              {t("details.gender.label")}
            </p>
            <div className="grid grid-cols-2 gap-3">
              {genderOptions.map((option) => (
                <button
                  key={option.key}
                  onClick={() => setGender(option.value)}
                  className={clsx(
                    "flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-4 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm text-slate-800 dark:text-slate-200 text-base font-medium leading-normal ring-1 ring-inset ring-slate-300 dark:ring-slate-700 hover:bg-white/80 dark:hover:bg-slate-800/80",
                    gender === option.value && "ring-2 ring-tae-blue"
                  )}
                >
                  <span className="truncate">{t(option.key as keyof import("../../../locales/en.json"))}</span>
                </button>
              ))}
            </div>
          </label>
          <label className="flex w-full flex-col">
            <p className="text-slate-800 dark:text-slate-200 text-base font-medium leading-normal pb-2">
              {t("details.style.label")}
            </p>
            <div className="grid grid-cols-2 gap-3">
              {styleOptions.map((option) => (
                <button
                  key={option.key}
                  onClick={() => setNameStyle(option.value)}
                  className={clsx(
                    "flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-4 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm text-slate-800 dark:text-slate-200 text-base font-medium leading-normal ring-1 ring-inset ring-slate-300 dark:ring-slate-700 hover:bg-white/80 dark:hover:bg-slate-800/80",
                    nameStyle === option.value && "ring-2 ring-tae-blue"
                  )}
                >
                  <span className="truncate">{t(option.key as keyof import("../../../locales/en.json"))}</span>
                </button>
              ))}
            </div>
          </label>
          <label className="flex w-full flex-col">
            <p className="text-slate-800 dark:text-slate-200 text-base font-medium leading-normal pb-2">
              {t("details.meaning.label")}
            </p>
            <input
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-slate-900 dark:text-white focus:outline-0 focus:ring-2 ring-inset focus:ring-tae-blue dark:focus:ring-tae-blue border border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm h-14 placeholder:text-slate-400 dark:placeholder:text-slate-500 p-[15px] text-base font-normal leading-normal shadow-sm"
              placeholder={t("details.meaning.placeholder")}
              value={meaning}
              onChange={(e) => setMeaning(e.target.value)}
            />
          </label>
        </div>
        <Link
          href="/results"
          className="flex min-w-[84px] w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-5 bg-gradient-to-r from-tae-blue to-tae-red text-white text-base font-bold leading-normal tracking-[0.015em] shadow-lg shadow-tae-blue/20 dark:shadow-tae-red/20 hover:opacity-90 transition-opacity duration-200 mt-2"
        >
          <span className="truncate">{t("details.cta")}</span>
        </Link>
      </div>
    </div>
  );
}