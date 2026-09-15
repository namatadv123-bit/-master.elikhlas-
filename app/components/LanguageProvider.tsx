"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Lang = "ar" | "en";

interface LangContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: typeof import("@/lib/translations").translations.ar;
  isRtl: boolean;
}

const LangContext = createContext<LangContextType | undefined>(undefined);

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Lang;
    if (saved && (saved === "ar" || saved === "en")) {
      setLangState(saved);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const setLang = (newLang: Lang) => {
    setLangState(newLang);
  };

  const { translations } = require("@/lib/translations");
  const t = translations[lang];

  return (
    <LangContext.Provider value={{ lang, setLang, t, isRtl: lang === "ar" }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const context = useContext(LangContext);
  if (!context) {
    throw new Error("useLang must be used within a LangProvider");
  }
  return context;
}
