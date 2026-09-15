"use client";

import React from "react";
import Link from "next/link";
import { FaBookOpen } from "react-icons/fa";
import { useLang } from "./LanguageProvider";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="relative z-10 border-t-2 border-amber-500/50 bg-gradient-to-b from-amber-950/90 via-[#0a0702] to-[#040301] text-amber-100 py-16 shadow-[0_-10px_40px_rgba(245,158,11,0.15)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <Link href="/" className="flex items-center justify-center space-x-3 rtl:space-x-reverse">
          <div className="w-12 h-12 rounded-2xl bg-amber-400 flex items-center justify-center shadow-lg shadow-amber-500/30 text-slate-950 border border-amber-200">
            <FaBookOpen className="text-2xl" />
          </div>
          <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-100">
            {t.siteName}
          </span>
        </Link>

        <p className="text-sm text-amber-200/80 max-w-lg mx-auto leading-relaxed font-medium">
          {t.footerDesc}
        </p>

        <div className="flex flex-wrap justify-center gap-6 text-xs font-bold text-amber-300/80">
          <Link href="/" className="hover:text-amber-100 transition-colors">{t.navHome}</Link>
          <Link href="/about" className="hover:text-amber-100 transition-colors">{t.navAbout}</Link>
          <Link href="/tracks" className="hover:text-amber-100 transition-colors">{t.navTracks}</Link>
          <Link href="/faq" className="hover:text-amber-100 transition-colors">{t.navFaq}</Link>
          <Link href="/blog" className="hover:text-amber-100 transition-colors">{t.navBlog}</Link>
          <Link href="/contact" className="hover:text-amber-100 transition-colors">{t.navContact}</Link>
        </div>

        <div className="pt-8 border-t border-amber-500/20 text-xs text-amber-400/60 font-semibold">
          © {new Date().getFullYear()} {t.siteName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
