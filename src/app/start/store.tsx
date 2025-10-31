"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface OnboardingState {
  name: string;
  gender: string | null;
  nameStyle: string | null;
  meaning: string;
  favorites: string[];
  setName: (name: string) => void;
  setGender: (gender: string) => void;
  setNameStyle: (style: string) => void;
  setMeaning: (meaning: string) => void;
  toggleFavorite: (name: string) => void;
}

const OnboardingContext = createContext<OnboardingState | undefined>(undefined);

export function OnboardingProvider({ children }: { children: ReactNode }) {
  const [name, setName] = useState("");
  const [gender, setGender] = useState<string | null>(null);
  const [nameStyle, setNameStyle] = useState<string | null>(null);
  const [meaning, setMeaning] = useState("");
  const [favorites, setFavorites] = useState<string[]>([]);

  const toggleFavorite = (name: string) => {
    setFavorites((prev) =>
      prev.includes(name)
        ? prev.filter((fav) => fav !== name)
        : [...prev, name]
    );
  };

  return (
    <OnboardingContext.Provider
      value={{
        name,
        gender,
        nameStyle,
        meaning,
        favorites,
        setName,
        setGender,
        setNameStyle,
        setMeaning,
        toggleFavorite,
      }}
    >
      {children}
    </OnboardingContext.Provider>
  );
}

export function useOnboardingState() {
  const context = useContext(OnboardingContext);
  if (!context) {
    throw new Error("useOnboardingState must be used within an OnboardingProvider");
  }
  return context;
}