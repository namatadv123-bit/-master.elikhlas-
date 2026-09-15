"use client";

import React from "react";

import Link from "next/link";
import { FaBookOpen, FaAward, FaUsers, FaGlobe, FaHeart, FaCheckCircle, FaWhatsapp } from "react-icons/fa";
import Background3D from "../components/Background3D";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import WhatsAppButton from "../components/WhatsAppButton";
import { useLang } from "../components/LanguageProvider";
import { getWhatsappLink } from "@/lib/translations";


export default function AboutPage() {
  const { lang, t, isRtl } = useLang();

  return (
    <div dir={isRtl ? "rtl" : "ltr"} className="min-h-screen bg-[#070b12] text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950 relative overflow-x-hidden">
      <Background3D />
      <Navbar />
      <Breadcrumb items={[{ label: "About" }]} />

      {/* Hero */}
      <section className="relative z-10 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-amber-300 bg-amber-950/80 border border-amber-500/30 px-4 py-1.5 rounded-full">{t.aboutBadge}</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-100">{t.aboutTitle}</h1>
            <p className="text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">{t.aboutSub}</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="relative z-10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <p className="text-base text-slate-300 leading-relaxed font-medium">{t.aboutP1}</p>
              <p className="text-base text-slate-300 leading-relaxed font-medium">{t.aboutP2}</p>
              <p className="text-base text-slate-300 leading-relaxed font-medium">{t.aboutP3}</p>
            </div>

            <div className="space-y-6">
              {[
                { icon: <FaAward />, title: t.aboutFeature1Title, desc: t.aboutFeature1Desc },
                { icon: <FaUsers />, title: t.aboutFeature2Title, desc: t.aboutFeature2Desc },
                { icon: <FaGlobe />, title: t.aboutFeature3Title, desc: t.aboutFeature3Desc },
                { icon: <FaHeart />, title: t.aboutFeature4Title, desc: t.aboutFeature4Desc },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start space-x-4 rtl:space-x-reverse p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-amber-500/50 transition-all">
                  <div className="w-14 h-14 rounded-xl bg-amber-950/80 border border-amber-700/50 flex items-center justify-center text-amber-400 text-2xl shrink-0">{item.icon}</div>
                  <div>
                    <h3 className="text-lg font-black text-white mb-1">{item.title}</h3>
                    <p className="text-sm text-slate-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="relative z-10 py-24 bg-slate-900/40 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl sm:text-5xl font-black text-white">{t.aboutMission}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <FaBookOpen />, title: t.aboutMission1Title, desc: t.aboutMission1Desc },
              { icon: <FaAward />, title: t.aboutMission2Title, desc: t.aboutMission2Desc },
              { icon: <FaUsers />, title: t.aboutMission3Title, desc: t.aboutMission3Desc },
            ].map((item, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-slate-900/70 backdrop-blur-xl border border-slate-800 hover:border-amber-500 hover:shadow-2xl hover:shadow-amber-900/20 transition-all duration-300 text-center">
                <div className="w-16 h-16 rounded-2xl bg-amber-950/80 border border-amber-700/50 flex items-center justify-center text-amber-400 text-3xl mb-6 mx-auto">{item.icon}</div>
                <h3 className="text-xl font-black text-white mb-3">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 py-24 bg-slate-950/80 backdrop-blur-lg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl sm:text-5xl font-black text-white">{t.aboutCta}</h2>
          <p className="text-lg text-slate-300">{t.aboutCtaSub}</p>
          <a href={getWhatsappLink("السلام عليكم، أريد التسجيل في أكاديمية الإخلاص")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center space-x-3 rtl:space-x-reverse px-10 py-5 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600 text-slate-950 font-black text-lg shadow-xl shadow-amber-950 border border-amber-300">
            <FaWhatsapp className="text-2xl" />
            <span>{t.btnRegister}</span>
          </a>
        </div>
      </section>

      {/* Internal Links */}
      <section className="relative z-10 py-16 bg-slate-900/40 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-black text-white">{t.aboutExplore}</h2>
            <p className="text-slate-400">{t.aboutExploreSub}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/tracks/kids" className="p-8 rounded-3xl bg-slate-900/70 backdrop-blur-xl border border-slate-800 hover:border-emerald-500/50 transition-all text-center">
              <div className="w-16 h-16 rounded-2xl bg-emerald-950/80 border border-emerald-700/50 flex items-center justify-center text-emerald-400 text-3xl mb-6 mx-auto"><FaBookOpen /></div>
              <h3 className="text-xl font-black text-white mb-3">{t.trackKidsTitle}</h3>
              <p className="text-sm text-slate-400">{t.trackKidsDesc}</p>
            </Link>
            <Link href="/tracks/adults" className="p-8 rounded-3xl bg-slate-900/70 backdrop-blur-xl border border-slate-800 hover:border-amber-500/50 transition-all text-center">
              <div className="w-16 h-16 rounded-2xl bg-amber-950/80 border border-amber-700/50 flex items-center justify-center text-amber-400 text-3xl mb-6 mx-auto"><FaUsers /></div>
              <h3 className="text-xl font-black text-white mb-3">{t.trackAdultsTitle}</h3>
              <p className="text-sm text-slate-400">{t.trackAdultsDesc}</p>
            </Link>
            <Link href="/tracks/ijazah" className="p-8 rounded-3xl bg-slate-900/70 backdrop-blur-xl border border-slate-800 hover:border-amber-500/50 transition-all text-center">
              <div className="w-16 h-16 rounded-2xl bg-amber-950/80 border border-amber-700/50 flex items-center justify-center text-amber-400 text-3xl mb-6 mx-auto"><FaAward /></div>
              <h3 className="text-xl font-black text-white mb-3">{t.trackIjazahTitle}</h3>
              <p className="text-sm text-slate-400">{t.trackIjazahDesc}</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="relative z-10 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <Link href="/contact" className="inline-flex items-center space-x-2 rtl:space-x-reverse px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600 text-slate-950 font-black text-base shadow-xl shadow-amber-950 border border-amber-300 hover:from-amber-400 hover:to-yellow-500 transition-all">
            <span>{t.aboutContact}</span>
          </Link>
        </div>
      </section>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            name: "El-Ikhlas Academy",
            alternateName: "El-Ikhlas Academy",
            url: "https://elikhlas-academy.com",
            logo: "https://elikhlas-academy.com/logo.png",
            description: "El-Ikhlas Academy - Online Quran Academy with certified scholars. Programs for kids and adults with connected Sanad chains.",
            sameAs: [],
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+201012884291",
              contactType: "customer service",
              availableLanguage: ["Arabic", "English"]
            },
            address: {
              "@type": "PostalAddress",
              addressCountry: "EG"
            },
            knowsAbout: ["Quran memorization", "Tajweed", "Ijazah", "Online Quran classes", "Islamic education"]
          })
        }}
      />

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
