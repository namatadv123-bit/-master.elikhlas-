"use client";

import React from "react";
import Link from "next/link";
import {
  FaWhatsapp, FaBookOpen, FaAward, FaClock, FaChartLine,
  FaChild, FaUserGraduate, FaArrowRight, FaArrowLeft, FaStar,
  FaCheckCircle, FaShieldAlt, FaHeart, FaQuoteRight
} from "react-icons/fa";
import Background3D from "./components/Background3D";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import { useLang } from "./components/LanguageProvider";
import { quranVersesList, getWhatsappLink } from "@/lib/translations";

export default function Home() {
  const { lang, t, isRtl } = useLang();

  return (
    <div dir={isRtl ? "rtl" : "ltr"} className="min-h-screen bg-[#070b12] text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950 relative overflow-x-hidden">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "El-Ikhlas Academy",
            url: "https://elikhlas-academy.com",
            description: "Learn Quran online with certified scholars in USA, Canada & worldwide",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://elikhlas-academy.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })
        }}
      />
      <Background3D />
      <Navbar />

      {/* Hero Section */}
      <section className="relative z-10 pt-12 pb-20 lg:pt-20 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-4 py-2 rounded-full border border-amber-500/40 bg-amber-500/10 text-amber-300 text-xs font-extrabold shadow-md backdrop-blur-md">
                <FaStar className="text-amber-400 text-xs animate-pulse" />
                <span>{t.heroBadge}</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-black text-white leading-[1.15]">
                {t.heroTitle1}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500">{t.heroTitle2}</span>{" "}
                <br className="hidden sm:block" />{t.heroTitle3}
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-medium">{t.heroDesc}</p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href={getWhatsappLink("Hello, I'd like to inquire about booking a free trial class at El-Ikhlas Academy.")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center space-x-3 rtl:space-x-reverse px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 text-slate-950 font-black text-base shadow-xl shadow-amber-950 border border-amber-300 transition-all hover:scale-105 active:scale-95">
                  <span>{t.btnRegister}</span>
                  <FaArrowLeft />
                </a>
                <a href={getWhatsappLink("Hello, I'd like to inquire about booking a free trial class at El-Ikhlas Academy.")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center space-x-3 rtl:space-x-reverse px-8 py-4 rounded-2xl border border-slate-700 bg-slate-900/60 backdrop-blur-xl hover:bg-slate-800 text-slate-200 font-extrabold text-base shadow-sm transition-all hover:scale-105 active:scale-95">
                  <FaWhatsapp className="text-2xl text-emerald-400" />
                  <span>{t.btnWhatsapp}</span>
                </a>
              </div>

              <div className="pt-6 border-t border-slate-800 grid grid-cols-3 gap-4">
                <div className="flex items-center space-x-2 rtl:space-x-reverse text-slate-300">
                  <FaShieldAlt className="text-amber-400 text-lg" />
                  <span className="text-xs font-bold">{isRtl ? "سند متصل معتمد" : "Certified Sanad Chain"}</span>
                </div>
                <div className="flex items-center space-x-2 rtl:space-x-reverse text-slate-300">
                  <FaCheckCircle className="text-amber-400 text-lg" />
                  <span className="text-xs font-bold">{isRtl ? "حصة تجريبية مجاناً" : "Free Trial Class"}</span>
                </div>
                <div className="flex items-center space-x-2 rtl:space-x-reverse text-slate-300">
                  <FaHeart className="text-emerald-400 text-lg" />
                  <span className="text-xs font-bold">{isRtl ? "معلمون ومعلمات للجميع" : "Male & Female Teachers"}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative z-10">
              <div className="relative mx-auto max-w-md">
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 via-amber-600 to-yellow-500 rounded-3xl blur-xl opacity-50 animate-pulse" />
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-amber-500/30 bg-slate-900">
                  <img 
                    src="https://images.unsplash.com/photo-1609599006353-e629aaabfeae?q=80&w=800&auto=format&fit=crop" 
                    alt="Learn Quran Online - El-Ikhlas Academy" 
                    className="w-full h-[460px] object-cover hover:scale-105 transition-transform duration-700 opacity-90" 
                    width="800" 
                    height="460"
                    loading="eager"
                    fetchPriority="high"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070b12] via-[#070b12]/40 to-transparent flex flex-col justify-end p-8 text-white">
                    <span className="px-3 py-1 rounded-full bg-amber-500 text-slate-950 font-black text-xs w-fit mb-2">﴿ وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا ﴾</span>
                    <h3 className="text-2xl font-black text-amber-100">{isRtl ? "طريقك لحفظ وإتقان المصحف الشريف" : "Your Path to Quran Mastery"}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative z-10 py-12 bg-slate-900/80 backdrop-blur-xl text-white shadow-2xl border-y border-amber-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-1"><p className="text-3xl sm:text-5xl font-black text-amber-400">2,000+</p><p className="text-xs sm:text-sm text-slate-300 font-bold">{t.statStudents}</p></div>
            <div className="space-y-1"><p className="text-3xl sm:text-5xl font-black text-amber-400">60+</p><p className="text-xs sm:text-sm text-slate-300 font-bold">{t.statTeachers}</p></div>
            <div className="space-y-1"><p className="text-3xl sm:text-5xl font-black text-amber-400">24/7</p><p className="text-xs sm:text-sm text-slate-300 font-bold">{t.statFlexibility}</p></div>
            <div className="space-y-1"><p className="text-3xl sm:text-5xl font-black text-amber-400">30+</p><p className="text-xs sm:text-sm text-slate-300 font-bold">{t.statCountries}</p></div>
          </div>
        </div>
      </section>

      {/* Quranic Verses */}
      <section className="relative z-10 py-24 bg-gradient-to-b from-[#070b12] via-amber-950/20 to-[#070b12] border-b border-amber-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-black uppercase tracking-widest text-amber-300 bg-amber-950/80 border border-amber-500/30 px-4 py-1.5 rounded-full shadow-md">{t.versesSub}</span>
            <h2 className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-100">{t.versesTitle}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quranVersesList.map((item, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-slate-900/80 backdrop-blur-xl border border-amber-500/30 hover:border-amber-400 shadow-xl relative overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl group-hover:bg-amber-500/20 transition-all" />
                <div>
                  <FaQuoteRight className="text-3xl text-amber-500/40 mb-6" />
                  <p className="text-xl sm:text-2xl font-bold text-amber-200 font-serif leading-relaxed mb-4">﴿ {item.ayah} ﴾</p>
                  <p className="text-xs text-slate-400 italic mb-4 font-sans leading-normal">"{item.translationEn}"</p>
                </div>
                <div className="pt-4 border-t border-slate-800 text-xs font-black text-amber-400">{item.surahAr}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative z-10 py-24 bg-slate-900/40 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-black uppercase tracking-widest text-emerald-400 bg-emerald-950/80 border border-emerald-800/50 px-4 py-1.5 rounded-full">{t.featuresSub}</span>
            <h2 className="text-3xl sm:text-5xl font-black text-white">{t.featuresTitle}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-slate-900/70 backdrop-blur-xl border border-slate-800 hover:border-amber-500 hover:shadow-2xl hover:shadow-amber-900/20 transition-all duration-300 group">
              <div className="w-16 h-16 rounded-2xl bg-amber-950/80 border border-amber-700/50 flex items-center justify-center text-amber-400 text-3xl mb-6 shadow-lg group-hover:scale-110 transition-transform"><FaAward /></div>
              <h3 className="text-xl font-black text-white mb-3">{t.feat1Title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed font-medium">{t.feat1Desc}</p>
            </div>
            <div className="p-8 rounded-3xl bg-slate-900/70 backdrop-blur-xl border border-slate-800 hover:border-amber-500 hover:shadow-2xl hover:shadow-amber-900/20 transition-all duration-300 group">
              <div className="w-16 h-16 rounded-2xl bg-amber-950/80 border border-amber-700/50 flex items-center justify-center text-amber-400 text-3xl mb-6 shadow-lg group-hover:scale-110 transition-transform"><FaClock /></div>
              <h3 className="text-xl font-black text-white mb-3">{t.feat2Title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed font-medium">{t.feat2Desc}</p>
            </div>
            <div className="p-8 rounded-3xl bg-slate-900/70 backdrop-blur-xl border border-slate-800 hover:border-amber-500 hover:shadow-2xl hover:shadow-amber-900/20 transition-all duration-300 group">
              <div className="w-16 h-16 rounded-2xl bg-amber-950/80 border border-amber-700/50 flex items-center justify-center text-amber-400 text-3xl mb-6 shadow-lg group-hover:scale-110 transition-transform"><FaChartLine /></div>
              <h3 className="text-xl font-black text-white mb-3">{t.feat3Title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed font-medium">{t.feat3Desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tracks */}
      <section className="relative z-10 py-24 bg-slate-950/60 backdrop-blur-lg border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl sm:text-5xl font-black text-white">{t.tracksTitle}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-slate-900/80 backdrop-blur-xl border border-slate-800 flex flex-col justify-between hover:border-amber-500 transition-all duration-300">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-emerald-950 border border-emerald-800 flex items-center justify-center text-emerald-400 text-2xl mb-6"><FaChild /></div>
                <h3 className="text-2xl font-black text-white mb-3">{t.track1Title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed font-medium">{t.track1Desc}</p>
              </div>
              <Link href="/tracks/kids" className="mt-8 py-3.5 text-center rounded-xl border border-amber-500/50 text-amber-300 font-black text-sm hover:bg-amber-950/50 transition-all">{t.btnLearnMore}</Link>
            </div>
            <div className="p-8 rounded-3xl bg-slate-900 border-2 border-amber-400 shadow-2xl shadow-amber-950/50 relative flex flex-col justify-between transform md:-translate-y-2">
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 text-slate-950 text-xs font-black px-5 py-1 rounded-full shadow-md border border-amber-200">★ {t.mostPopular}</span>
              <div>
                <div className="w-14 h-14 rounded-2xl bg-amber-950 border border-amber-800 flex items-center justify-center text-amber-400 text-2xl mb-6 mt-2"><FaUserGraduate /></div>
                <h3 className="text-2xl font-black text-white mb-3">{t.track2Title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed font-medium">{t.track2Desc}</p>
              </div>
              <Link href="/tracks/adults" className="mt-8 py-4 text-center rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 text-slate-950 font-black text-sm shadow-lg shadow-amber-900/50 border border-amber-300 transition-all">{t.btnLearnMore}</Link>
            </div>
            <div className="p-8 rounded-3xl bg-slate-900/80 backdrop-blur-xl border border-slate-800 flex flex-col justify-between hover:border-amber-500 transition-all duration-300">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-amber-950 border border-amber-800 flex items-center justify-center text-amber-400 text-2xl mb-6"><FaAward /></div>
                <h3 className="text-2xl font-black text-white mb-3">{t.track3Title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed font-medium">{t.track3Desc}</p>
              </div>
              <Link href="/tracks/ijazah" className="mt-8 py-3.5 text-center rounded-xl border border-amber-500/50 text-amber-300 font-black text-sm hover:bg-amber-950/50 transition-all">{t.btnLearnMore}</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 py-24 bg-slate-950/80 backdrop-blur-lg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl sm:text-5xl font-black text-white">{t.formTitle}</h2>
          <p className="text-lg text-slate-300">{t.formSub}</p>
          <a href={getWhatsappLink("Hello, I'd like to book a free trial class at El-Ikhlas Academy")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center space-x-3 rtl:space-x-reverse px-10 py-5 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 text-slate-950 font-black text-lg shadow-xl shadow-amber-950 border border-amber-300 transition-all hover:scale-105 active:scale-95">
            <FaWhatsapp className="text-2xl" />
            <span>{t.btnRegister}</span>
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
