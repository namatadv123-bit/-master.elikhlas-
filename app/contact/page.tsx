"use client";

import React from "react";

import { FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Background3D from "../components/Background3D";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import WhatsAppButton from "../components/WhatsAppButton";
import { useLang } from "../components/LanguageProvider";
import { getWhatsappLink } from "@/lib/translations";


export default function ContactPage() {
  const { lang, t, isRtl } = useLang();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const message = `طلب حجز حصة تجريبية مجانية:\n- الاسم: ${formData.get("name")}\n- الواتساب: ${formData.get("phone")}\n- المسار: ${formData.get("track")}\n- نوع المعلم: ${formData.get("teacher")}`;
    window.open(getWhatsappLink(message), "_blank");
  };

  return (
    <div dir={isRtl ? "rtl" : "ltr"} className="min-h-screen bg-[#070b12] text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950 relative overflow-x-hidden">
      <Background3D />
      <Navbar />
      <Breadcrumb items={[{ label: "Contact" }]} />

      <section className="relative z-10 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <h1 className="text-4xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-100">{t.formTitle}</h1>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">{t.formSub}</p>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="p-8 sm:p-14 rounded-3xl bg-slate-900/90 backdrop-blur-2xl border border-amber-500/30 shadow-2xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-xs font-black text-slate-300 mb-2">{t.nameLabel}</label>
                    <input type="text" name="name" required placeholder="محمد أحمد" className="w-full px-5 py-4 rounded-xl border border-slate-700 bg-slate-950/80 text-white focus:outline-none focus:border-amber-400 transition-all shadow-sm font-medium placeholder-slate-600" />
                  </div>
                  <div>
                    <label className="block text-xs font-black text-slate-300 mb-2">{t.phoneLabel}</label>
                    <input type="tel" name="phone" required placeholder="+20 101 288 4291" className="w-full px-5 py-4 rounded-xl border border-slate-700 bg-slate-950/80 text-white focus:outline-none focus:border-amber-400 transition-all shadow-sm font-medium placeholder-slate-600" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-black text-slate-300 mb-2">{t.trackSelect}</label>
                      <select name="track" className="w-full px-5 py-4 rounded-xl border border-slate-700 bg-slate-950/80 text-white focus:outline-none focus:border-amber-400 transition-all shadow-sm font-bold">
                        <option className="bg-slate-900">{t.track1Title}</option>
                        <option className="bg-slate-900">{t.track2Title}</option>
                        <option className="bg-slate-900">{t.track3Title}</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-black text-slate-300 mb-2">{t.teacherSelect}</label>
                      <select name="teacher" className="w-full px-5 py-4 rounded-xl border border-slate-700 bg-slate-950/80 text-white focus:outline-none focus:border-amber-400 transition-all shadow-sm font-bold">
                        <option className="bg-slate-900">{t.teacherMale}</option>
                        <option className="bg-slate-900">{t.teacherFemale}</option>
                        <option className="bg-slate-900">{t.teacherAny}</option>
                      </select>
                    </div>
                  </div>
                  <button type="submit" className="w-full py-5 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 text-slate-950 font-black text-base shadow-xl shadow-amber-950 border border-amber-300">
                    {t.btnSubmit}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <div className="w-12 h-12 rounded-xl bg-emerald-950 border border-emerald-800 flex items-center justify-center text-emerald-400 text-xl"><FaWhatsapp /></div>
                  <div>
                    <h3 className="font-black text-white">الواتساب</h3>
                    <p className="text-sm text-slate-400" dir="ltr">+20 101 288 4291</p>
                  </div>
                </div>
              </div>
              <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <div className="w-12 h-12 rounded-xl bg-amber-950 border border-amber-800 flex items-center justify-center text-amber-400 text-xl"><FaPhone /></div>
                  <div>
                    <h3 className="font-black text-white">الهاتف</h3>
                    <p className="text-sm text-slate-400" dir="ltr">+20 101 288 4291</p>
                  </div>
                </div>
              </div>
              <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <div className="w-12 h-12 rounded-xl bg-amber-950 border border-amber-800 flex items-center justify-center text-amber-400 text-xl"><FaEnvelope /></div>
                  <div>
                    <h3 className="font-black text-white">البريد الإلكتروني</h3>
                    <p className="text-sm text-slate-400">info@elikhlas-academy.com</p>
                  </div>
                </div>
              </div>
              <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <div className="w-12 h-12 rounded-xl bg-amber-950 border border-amber-800 flex items-center justify-center text-amber-400 text-xl"><FaMapMarkerAlt /></div>
                  <div>
                    <h3 className="font-black text-white">العنوان</h3>
                    <p className="text-sm text-slate-400">أكاديمية الإ独有的 - تعليم أونلاين</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "تواصل معنا - أكاديمية الإخلاص",
            description: "تواصل مع أكاديمية الإخلاص لتعلم القرآن الكريم. احجز حصتك التجريبية المجانية عبر الواتساب أو نموذج التواصل",
            mainEntity: {
              "@type": "Organization",
              name: "El-Ikhlas Academy",
              url: "https://elikhlas-academy.com",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+201012884291",
                contactType: "customer service",
                availableLanguage: ["Arabic", "English"],
                areaServed: "Worldwide"
              }
            }
          })
        }}
      />

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
