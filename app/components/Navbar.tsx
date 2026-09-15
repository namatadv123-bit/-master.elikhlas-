"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaBookOpen, FaGlobe, FaWhatsapp } from "react-icons/fa";
import { getWhatsappLink } from "@/lib/translations";
import { useLang } from "./LanguageProvider";

export default function Navbar() {
  const { lang, setLang, t } = useLang();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#070b12]/80 backdrop-blur-2xl border-b border-amber-500/20 shadow-2xl shadow-amber-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 via-amber-600 to-amber-700 flex items-center justify-center shadow-lg shadow-amber-600/30 text-slate-950 border border-amber-300">
            <FaBookOpen className="text-2xl text-slate-950" />
          </div>
          <div>
            <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-100 tracking-tight block">
              {t.siteName}
            </span>
            <p className="text-[10px] text-amber-400/90 font-black tracking-wider uppercase hidden sm:block">
              {t.subTitle}
            </p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center space-x-8 rtl:space-x-reverse text-sm font-extrabold text-slate-300">
          <Link href="/" className="hover:text-amber-400 transition-colors">{t.navHome}</Link>
          <Link href="/about" className="hover:text-amber-400 transition-colors">{t.navAbout}</Link>
          <Link href="/tracks" className="hover:text-amber-400 transition-colors">{t.navTracks}</Link>
          <Link href="/faq" className="hover:text-amber-400 transition-colors">{t.navFaq}</Link>
          <Link href="/blog" className="hover:text-amber-400 transition-colors">{t.navBlog}</Link>
        </nav>

        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <button
            onClick={() => setLang(lang === "ar" ? "en" : "ar")}
            className="flex items-center space-x-2 rtl:space-x-reverse px-4 py-2 rounded-xl border border-amber-500/30 bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 text-xs font-bold transition-all shadow-sm hover:scale-105 active:scale-95"
          >
            <FaGlobe className="text-amber-400" />
            <span>{lang === "ar" ? "English" : "عربي"}</span>
          </button>

          <a
            href={getWhatsappLink("Hello, I'd like to inquire about booking a free trial class at El-Ikhlas Academy.")}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center space-x-2 rtl:space-x-reverse px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 text-slate-950 font-black text-xs tracking-wide shadow-lg shadow-amber-600/30 border border-amber-200 transition-all hover:scale-105 active:scale-95"
          >
            <FaWhatsapp className="text-lg" />
            <span>{t.btnRegister}</span>
          </a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-amber-400 text-2xl"
          >
            ☰
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-[#070b12]/95 backdrop-blur-2xl border-b border-amber-500/20 px-4 py-6 space-y-4">
          <Link href="/" onClick={() => setMobileOpen(false)} className="block text-slate-300 font-bold hover:text-amber-400">{t.navHome}</Link>
          <Link href="/about" onClick={() => setMobileOpen(false)} className="block text-slate-300 font-bold hover:text-amber-400">{t.navAbout}</Link>
          <Link href="/tracks" onClick={() => setMobileOpen(false)} className="block text-slate-300 font-bold hover:text-amber-400">{t.navTracks}</Link>
          <Link href="/faq" onClick={() => setMobileOpen(false)} className="block text-slate-300 font-bold hover:text-amber-400">{t.navFaq}</Link>
          <Link href="/blog" onClick={() => setMobileOpen(false)} className="block text-slate-300 font-bold hover:text-amber-400">{t.navBlog}</Link>
          <Link href="/contact" onClick={() => setMobileOpen(false)} className="block py-3 text-center rounded-xl bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-950 font-black">{t.btnRegister}</Link>
        </div>
      )}
    </header>
  );
}
