"use client";

import { useOnboardingState } from "@/app/start/store";
import { getMockRecommendations } from "@/lib/recommendations";
import { KoreanName } from "@/lib/names";
import Link from "next/link";
import { useI18n } from "@/app/i18n";
import clsx from "clsx";

export default function ResultsPage() {
  const { name, gender, nameStyle } = useOnboardingState();
  const { t, setLocale, locale } = useI18n();
  const recommendations = getMockRecommendations({ gender, nameStyle });

  const toggleLocale = () => {
    setLocale(locale === "en" ? "ko" : "en");
  };

  if (recommendations.length === 0) {
    return (
      <div className="text-center">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          No recommendations found
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mt-2">
          Please try changing your selections.
        </p>
        <Link href="/start/details" className="mt-4 inline-block bg-slate-200 px-4 py-2 rounded-lg">
          Go Back
        </Link>
      </div>
    );
  }

  return (
    <div className="relative z-20 flex w-full max-w-md mx-auto flex-1 flex-col px-6 pt-12 pb-8">
      <div className="flex items-center justify-between mb-8">
        <Link href="/start/details" className="flex items-center justify-center w-10 h-10 rounded-full bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm shadow-sm">
          <span className="material-symbols-outlined text-slate-900 dark:text-white">
            {t("back")}
          </span>
        </Link>
        <h1 className="text-xl font-bold text-slate-900 dark:text-white">
          {t("results.title")}
        </h1>
        <button
          onClick={toggleLocale}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm shadow-sm"
        >
          <span className="material-symbols-outlined text-slate-900 dark:text-white">
            translate
          </span>
        </button>
      </div>
      <div className="text-center mb-8">
        <p className="text-slate-600 dark:text-slate-400">
          {t("results.subtitle", { name: name || "you" })}
        </p>
        <h2 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white mt-2">
          {t("results.found", { count: recommendations.length.toString() })}
        </h2>
      </div>
      <div className="flex-1 overflow-y-auto -mx-6">
        <div className="horizontal-scroll">
          {recommendations.map((rec, index) => (
            <NameCard key={rec.koreanName} name={rec} index={index} />
          ))}
        </div>
      </div>
      <div className="mt-auto pt-6 flex flex-col gap-3">
        <button className="flex min-w-[84px] w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-5 bg-gradient-to-r from-tae-blue to-tae-red text-white text-base font-bold leading-normal tracking-[0.015em] shadow-lg shadow-tae-blue/20 dark:shadow-tae-red/20 hover:opacity-90 transition-opacity duration-200">
          <span className="truncate">{t("results.cta.select")}</span>
        </button>
        <button className="flex min-w-[84px] w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-5 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm text-slate-800 dark:text-slate-200 text-base font-medium leading-normal hover:bg-white/80 dark:hover:bg-slate-800/80 transition-colors duration-200">
          <span className="truncate">{t("results.cta.other")}</span>
        </button>
      </div>
    </div>
  );
}

function NameCard({ name, index }: { name: KoreanName; index: number }) {
  const { t } = useI18n();
  const { favorites, toggleFavorite } = useOnboardingState();
  const isFavorited = favorites.includes(name.koreanName);

  const recommendationTitles = [
    t("results.card.first"),
    t("results.card.second"),
    t("results.card.third"),
  ];
  return (
    <div className="flex flex-col gap-6 p-6 rounded-3xl bg-white/60 dark:bg-slate-800/60 backdrop-blur-lg shadow-lg">
      <div className="flex items-center justify-between">
        <div className="text-left">
          <p className="text-lg font-medium text-slate-600 dark:text-slate-400">
            {recommendationTitles[index]}
          </p>
          <p
            className="text-5xl font-extrabold tracking-tight mt-2 bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(to right, #0047A0, #CD2E3A)",
            }}
          >
            {name.koreanName}
          </p>
          <p className="text-lg font-semibold text-slate-800 dark:text-slate-200 mt-1">
            {name.romanizedName}
          </p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <button className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-200/50 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
            <span className="material-symbols-outlined text-xl">share</span>
          </button>
          <button
            onClick={() => toggleFavorite(name.koreanName)}
            className={clsx(
              "flex items-center justify-center w-10 h-10 rounded-full transition-colors",
              isFavorited
                ? "bg-tae-red/10 text-tae-red hover:bg-tae-red/20"
                : "bg-slate-200/50 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
            )}
          >
            <span
              className={clsx(
                "material-symbols-outlined text-xl",
                isFavorited && "filled"
              )}
            >
              favorite
            </span>
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <h3 className="font-bold text-slate-900 dark:text-white mb-2">
            {t("results.card.meaning")}
          </h3>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm">
            {name.meaning}
          </p>
        </div>
        <div>
          <h3 className="font-bold text-slate-900 dark:text-white mb-2">
            {t("results.card.connection")}
          </h3>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm">
            {name.connection}
          </p>
        </div>
      </div>
    </div>
  );
}