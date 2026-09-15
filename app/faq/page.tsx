"use client";

import React, { useState } from "react";

import { FaChevronDown, FaWhatsapp } from "react-icons/fa";
import Background3D from "../components/Background3D";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import WhatsAppButton from "../components/WhatsAppButton";
import { useLang } from "../components/LanguageProvider";
import { faqs, getWhatsappLink } from "@/lib/translations";


export default function FAQPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { lang, t, isRtl } = useLang();

  return (
    <div dir={isRtl ? "rtl" : "ltr"} className="min-h-screen bg-[#070b12] text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950 relative overflow-x-hidden">
      <Background3D />
      <Navbar />
      <Breadcrumb items={[{ label: "FAQ" }]} />

      <section className="relative z-10 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <span className="text-xs font-black uppercase tracking-widest text-amber-300 bg-amber-950/80 border border-amber-500/30 px-4 py-1.5 rounded-full inline-block">{t.faqSub}</span>
            <h1 className="text-4xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-100">{t.faqTitle}</h1>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-slate-800 hover:border-amber-500/50 rounded-2xl overflow-hidden transition-all duration-200 bg-slate-900/80 backdrop-blur-xl">
                <button onClick={() => setOpenFaq(openFaq === idx ? null : idx)} className="w-full p-6 text-right flex items-center justify-between font-black text-white text-lg focus:outline-none">
                  <span>{faq.qAr}</span>
                  <FaChevronDown className={`text-amber-400 transition-transform duration-300 ${openFaq === idx ? "rotate-180" : ""}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 text-sm text-slate-300 leading-relaxed font-medium border-t border-slate-800 pt-4 bg-slate-950/60">
                    {faq.aAr}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 py-24 bg-slate-950/80 backdrop-blur-lg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl sm:text-5xl font-black text-white">{t.faqCta}</h2>
          <p className="text-lg text-slate-300">{t.faqCtaSub}</p>
          <a href={getWhatsappLink("السلام عليكم، لدي استفسار عن أكاديمية الإخلاص")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center space-x-3 rtl:space-x-reverse px-10 py-5 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600 text-slate-950 font-black text-lg shadow-xl shadow-amber-950 border border-amber-300">
            <FaWhatsapp className="text-2xl" />
            <span>{t.faqContact}</span>
          </a>
        </div>
      </section>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            name: "FAQ - El-Ikhlas Academy",
            description: "Answers to frequently asked questions about Quran education, Tajweed, and Ijazah programs at El-Ikhlas Academy.",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.qAr,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.aAr
              }
            }))
          })
        }}
      />

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
