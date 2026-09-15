"use client";

import React from "react";
import { LangProvider } from "./LanguageProvider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <LangProvider>{children}</LangProvider>;
}
