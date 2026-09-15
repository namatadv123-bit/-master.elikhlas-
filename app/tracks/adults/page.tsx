"use client";

import React from "react";

import { FaUserGraduate, FaBookOpen, FaCheckCircle, FaClock, FaChartLine, FaWhatsapp } from "react-icons/fa";
import Background3D from "../../components/Background3D";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Breadcrumb from "../../components/Breadcrumb";
import WhatsAppButton from "../../components/WhatsAppButton";
import { useLang } from "../../components/LanguageProvider";
import { getWhatsappLink } from "@/lib/translations";


export default function AdultsTrackPage() {
  const { lang, t, isRtl } = useLang();

  const features = [
    { title: t.trackAdultsFeature1Title, desc: t.trackAdultsFeature1Desc },
    { title: t.trackAdultsFeature2Title, desc: t.trackAdultsFeature2Desc },
    { title: t.trackAdultsFeature3Title, desc: t.trackAdultsFeature3Desc },
    { title: t.trackAdultsFeature4Title, desc: t.trackAdultsFeature4Desc },
  ];

  return (
    <div dir={isRtl ? "rtl" : "ltr"} className="min-h-screen bg-[#070b12] text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950 relative overflow-x-hidden">
      <Background3D />
      <Navbar />
      <Breadcrumb items={[{ label: "Programs", href: "/tracks" }, { label: "Adults Program" }]} />

      <section className="relative z-10 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-4 py-2 rounded-full border border-amber-500/40 bg-amber-500/10 text-amber-300 text-xs font-extrabold">
              <FaUserGraduate className="text-amber-400" />
              <span>{t.trackAdultsBadge}</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-100">{t.trackAdultsTitle}</h1>
            <p className="text-lg text-slate-300 leading-relaxed max-w-3xl">{t.trackAdultsDesc}</p>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feat, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-slate-900/80 backdrop-blur-xl border border-slate-800 hover:border-amber-500/50 transition-all">
                <div className="w-12 h-12 rounded-xl bg-amber-950 border border-amber-800 flex items-center justify-center text-amber-400 text-xl mb-4"><FaCheckCircle /></div>
                <h3 className="text-xl font-black text-white mb-3">{feat.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed font-medium">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 py-16 bg-slate-900/40 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-black text-white">{t.trackAdultsBenefits}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <FaBookOpen />, title: t.trackAdultsBenefit1Title, desc: t.trackAdultsBenefit1Desc },
              { icon: <FaClock />, title: t.trackAdultsBenefit2Title, desc: t.trackAdultsBenefit2Desc },
              { icon: <FaChartLine />, title: t.trackAdultsBenefit3Title, desc: t.trackAdultsBenefit3Desc },
            ].map((item, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-slate-900/70 backdrop-blur-xl border border-slate-800 hover:border-amber-500/50 transition-all text-center">
                <div className="w-16 h-16 rounded-2xl bg-amber-950/80 border border-amber-700/50 flex items-center justify-center text-amber-400 text-3xl mb-6 mx-auto">{item.icon}</div>
                <h3 className="text-xl font-black text-white mb-3">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 py-24 bg-slate-950/80 backdrop-blur-lg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl sm:text-5xl font-black text-white">{t.trackAdultsCta}</h2>
          <p className="text-lg text-slate-300">{t.trackAdultsCtaSub}</p>
          <a href={getWhatsappLink("السلام عليكم، أريد التسجيل في مسار الحفظ والتجويد في أكاديمية الإخلاص")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center space-x-3 rtl:space-x-reverse px-10 py-5 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600 text-slate-950 font-black text-lg shadow-xl shadow-amber-950 border border-amber-300">
            <FaWhatsapp className="text-2xl" />
            <span>{t.btnRegister}</span>
          </a>
        </div>
      </section>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            name: "Adults Quran Program - Memorization & Tajweed",
            description: "Comprehensive online program for adult men and women. Master Tajweed rules, complete memorization, and develop excellent recitation skills.",
            provider: {
              "@type": "Organization",
              name: "El-Ikhlas Academy",
              sameAs: "https://elikhlas-academy.com"
            },
            educationalLevel: "Intermediate",
            inLanguage: "ar",
            coursePrerequisites: "Basic reading and recitation skills",
            hasCourseInstance: {
              "@type": "CourseInstance",
              courseMode: "online",
              courseWorkload: "5-7 hours per week"
            },
            about: ["Quran memorization for adults", "Tajweed rules", "Quran recitation", "Online Quran classes for adults"]
          })
        }}
      />

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
