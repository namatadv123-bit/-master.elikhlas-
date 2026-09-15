"use client";

import React from "react";
import Link from "next/link";
import { FaHome, FaWhatsapp } from "react-icons/fa";
import Background3D from "./components/Background3D";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useLang } from "./components/LanguageProvider";
import { getWhatsappLink } from "@/lib/translations";

export default function NotFound() {
  const { lang, t, isRtl } = useLang();

  return (
    <div dir={isRtl ? "rtl" : "ltr"} className="min-h-screen bg-[#070b12] text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950 relative overflow-x-hidden">
      <Background3D />
      <Navbar />
      <section className="relative z-10 pt-32 pb-24 text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-8">
          <h1 className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-100">404</h1>
          <h2 className="text-3xl sm:text-4xl font-black text-white">{t.notFoundTitle}</h2>
          <p className="text-lg text-slate-300">{t.notFoundDesc}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/" className="inline-flex items-center justify-center space-x-3 rtl:space-x-reverse px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600 text-slate-950 font-black shadow-xl shadow-amber-950 border border-amber-300">
              <FaHome className="text-lg" />
              <span>{t.notFoundHome}</span>
            </Link>
            <a href={getWhatsappLink("السلام عليكم، أريد الاستفسار")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center space-x-3 rtl:space-x-reverse px-8 py-4 rounded-2xl border border-slate-700 bg-slate-900/60 hover:bg-slate-800 text-slate-200 font-extrabold">
              <FaWhatsapp className="text-2xl text-emerald-400" />
              <span>{t.notFoundContact}</span>
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
