"use client";

import React from "react";

import Link from "next/link";
import { FaChild, FaUserGraduate, FaAward } from "react-icons/fa";
import Background3D from "../components/Background3D";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import WhatsAppButton from "../components/WhatsAppButton";
import { useLang } from "../components/LanguageProvider";


export default function TracksPage() {
  const { lang, t, isRtl } = useLang();

  const tracks = [
    {
      href: "/tracks/kids",
      icon: <FaChild />,
      title: t.track1Title,
      desc: t.track1Desc,
      color: "emerald"
    },
    {
      href: "/tracks/adults",
      icon: <FaUserGraduate />,
      title: t.track2Title,
      desc: t.track2Desc,
      color: "amber",
      popular: true
    },
    {
      href: "/tracks/ijazah",
      icon: <FaAward />,
      title: t.track3Title,
      desc: t.track3Desc,
      color: "amber"
    }
  ];

  return (
    <div dir={isRtl ? "rtl" : "ltr"} className="min-h-screen bg-[#070b12] text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950 relative overflow-x-hidden">
      <Background3D />
      <Navbar />
      <Breadcrumb items={[{ label: "Programs" }]} />

      <section className="relative z-10 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto space-y-6 mb-16">
            <h1 className="text-4xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-100">{t.tracksTitle}</h1>
            <p className="text-lg text-slate-300">اختر المسار الذي يناسبك وابدأ رحلتك في تعليم القرآن الكريم</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tracks.map((track, idx) => (
              <div key={idx} className={`p-8 rounded-3xl bg-slate-900/80 backdrop-blur-xl border ${track.popular ? "border-2 border-amber-400 shadow-2xl shadow-amber-950/50" : "border-slate-800 hover:border-amber-500"} flex flex-col justify-between transition-all relative`}>
                {track.popular && <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 text-slate-950 text-xs font-black px-5 py-1 rounded-full shadow-md border border-amber-200">★ الأكثر إقبالاً</span>}
                <div className={track.popular ? "mt-2" : ""}>
                  <div className={`w-14 h-14 rounded-2xl bg-${track.color}-950 border border-${track.color}-800 flex items-center justify-center text-${track.color}-400 text-2xl mb-6`}>{track.icon}</div>
                  <h3 className="text-2xl font-black text-white mb-3">{track.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed font-medium mb-6">{track.desc}</p>
                </div>
                <Link href={track.href} className={`py-3.5 text-center rounded-xl ${track.popular ? "bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600 text-slate-950 shadow-lg shadow-amber-900/50 border border-amber-300" : "border border-amber-500/50 text-amber-300 hover:bg-amber-950/50"} font-black text-sm transition-all`}>اعرف المزيد</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Quran Learning Programs",
            description: "برامج تعليم القرآن الكريم في أكاديمية الإخلاص - مسارات متنوعة للأطفال والكبار",
            numberOfItems: 3,
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                item: {
                  "@type": "Course",
                  name: "مسار براعم القرآن",
                  description: "برنامج تعليمي متكامل مصمم خصيصاً للأطفال لتعليمهم القاعدة النورانية والقرآن الكريم"
                }
              },
              {
                "@type": "ListItem",
                position: 2,
                item: {
                  "@type": "Course",
                  name: "مسار الحفظ والتجويد",
                  description: "برنامج مكثف وشامل لل grownUps يهدف إلى الحفظ الكامل للقرآن الكريم مع الإتقان التام لأحكام التجويد"
                }
              },
              {
                "@type": "ListItem",
                position: 3,
                item: {
                  "@type": "Course",
                  name: "مسار الإجازة بالسند المتصل",
                  description: "برنامج متقدم للحصول على إجازة قرآنية بسند متصل إلى النبي محمد ﷺ"
                }
              }
            ]
          })
        }}
      />

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
