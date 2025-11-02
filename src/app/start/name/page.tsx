"use client";

import Link from "next/link";
import { useOnboardingState } from "../store";
import { useI18n } from "@/app/i18n";

export default function NameInputPage() {
  const { name, setName } = useOnboardingState();
  const { t } = useI18n();

  return (
    <div className="relative z-20 flex w-full max-w-md flex-1 flex-col justify-between px-6 pt-12 pb-8">
      <div className="flex flex-col items-center text-center">
        <div className="relative w-24 h-24 mb-6">
          <div className="absolute inset-0 bg-white dark:bg-slate-900 rounded-full shadow-lg"></div>
          <div className="absolute w-full h-1/2 top-0 left-0 bg-tae-red rounded-t-full overflow-hidden"></div>
          <div className="absolute w-full h-1/2 bottom-0 left-0 bg-tae-blue rounded-b-full overflow-hidden"></div>
          <div className="absolute w-1/2 h-1/2 top-1/4 left-0 bg-tae-blue rounded-full"></div>
          <div className="absolute w-1/2 h-1/2 top-1/4 right-0 bg-tae-red rounded-full"></div>
        </div>
        <h1 className="text-slate-900 dark:text-white tracking-tight text-3xl sm:text-4xl font-bold leading-tight">
          {t("name.title")}
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-base font-normal leading-normal pt-3">
          {t("name.subtitle")}
        </p>
      </div>
      <div className="flex flex-col w-full gap-6">
        <label className="flex w-full flex-col">
          <p className="text-slate-800 dark:text-slate-200 text-base font-medium leading-normal pb-2">
            {t("name.label")}
          </p>
          <input
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-slate-900 dark:text-white focus:outline-0 focus:ring-2 ring-inset focus:ring-tae-blue dark:focus:ring-tae-blue border border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm h-14 placeholder:text-slate-400 dark:placeholder:text-slate-500 p-[15px] text-base font-normal leading-normal shadow-sm"
            placeholder={t("name.placeholder")}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <Link
          href="/start/details"
          className="flex min-w-[84px] w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-5 bg-gradient-to-r from-tae-blue to-tae-red text-white text-base font-bold leading-normal tracking-[0.015em] shadow-lg shadow-tae-blue/20 dark:shadow-tae-red/20 hover:opacity-90 transition-opacity duration-200"
        >
          <span className="truncate">{t("name.cta")}</span>
        </Link>
      </div>
    </div>
  );
}