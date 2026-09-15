"use client";

import React from "react";
import Link from "next/link";

import { FaArrowRight, FaCalendar, FaClock, FaWhatsapp } from "react-icons/fa";
import Background3D from "../../components/Background3D";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import WhatsAppButton from "../../components/WhatsAppButton";
import { useLang } from "../../components/LanguageProvider";
import { getWhatsappLink } from "@/lib/translations";


export default function WhatIsSanadIjazahPage() {
  const { lang, t, isRtl } = useLang();

  return (
    <div dir={isRtl ? "rtl" : "ltr"} className="min-h-screen bg-[#070b12] text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950 relative overflow-x-hidden">
      <Background3D />
      <Navbar />
      <article className="relative z-10 pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <Link href="/blog" className="inline-flex items-center space-x-2 rtl:space-x-reverse text-amber-400 font-bold text-sm mb-8 hover:text-amber-300 transition-colors">
              <FaArrowRight className="rotate-180" /><span>العودة للمدونة</span>
            </Link>
            <div className="flex items-center space-x-4 rtl:space-x-reverse text-xs text-slate-500 mb-6">
              <span className="px-3 py-1 rounded-full bg-amber-950/80 border border-amber-700/50 text-amber-400 font-bold">الإجازة</span>
              <span className="flex items-center space-x-1 rtl:space-x-reverse"><FaCalendar className="text-amber-400" /><span>10 أغسطس 2026</span></span>
              <span className="flex items-center space-x-1 rtl:space-x-reverse"><FaClock className="text-amber-400" /><span>8 دقائق قراءة</span></span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-100 leading-relaxed mb-8">ما هي الإجازة بالسند المتصل؟</h1>
          </div>
          <div className="max-w-none">
            <div className="space-y-8 text-slate-300 leading-relaxed font-medium">
              <section>
                <h2 className="text-2xl font-black text-white mb-4">تعريف الإجازة بالسند المتصل</h2>
                <p className="mb-4">الإجازة بالسند المتصل هي منهجية نقل القرآن الكريم من شيخ إلى تلميذ بشكل متواصل وم trực tiếp دون انقطاع في السلسلة، وصولاً إلى النبي محمد ﷺ.</p>
                <p>كل مسلم يقرأ القرآنtodayimplicitly يتلقى هذا السند المتصل، لكن الإجازة الرسمية تأتي كشهادة تثبت أن الطالب قد أتم الحفظ والقراءة بشكل صحيح أمام شيخه.</p>
              </section>
              <section>
                <h2 className="text-2xl font-black text-white mb-4">أهمية السند المتصل</h2>
                <ul className="list-disc list-inside space-y-2 mr-4">
                  <li>تضمن صحة النقل وسلامة النص القرآني عبر العصور</li>
                  <li>مرجعية علمية ودينية للتحقق من صحة القراءة</li>
                  <li>ربط المسلمين بسلسلة الإسناد التي تصل إلى النبي ﷺ</li>
                  <li>-obtaining authorization for teaching and reciting the Quran</li>
                </ul>
              </section>
              <section>
                <h2 className="text-2xl font-black text-white mb-4">شروط الحصول على الإجازة</h2>
                <ul className="list-disc list-inside space-y-2 mr-4">
                  <li>الحفظ الكامل للقرآن الكريم (30 جزءاً)</li>
                  <li>الإتقان التام لأحكام التجويد</li>
                  <li>القراءة على شيخ مجاز بالسند المتصل</li>
                  <li>الإجابة عن اختبارات التحكيم بنجاح</li>
                  <li>ال.google from the teacher who has the chain</li>
                </ul>
              </section>
              <section>
                <h2 className="text-2xl font-black text-white mb-4">فوائد الإجازة</h2>
                <ul className="list-disc list-inside space-y-2 mr-4">
                  <li>القدرة على تعليم القرآن وإجازة غيرك مستقبلاً</li>
                  <li>الثقة في صحة قراءتك وتجويدها</li>
                  <li>ال.An authentic certificate recognized globally</li>
                  <li>الشعور بالإنجاز الروحي والعام</li>
                </ul>
              </section>
              <section className="bg-slate-900/80 border border-amber-500/30 rounded-3xl p-8 text-center space-y-4">
                <h3 className="text-2xl font-black text-white">احصل على إجازتك معنا</h3>
                <p className="text-slate-300">أكاديمية الإ独有的 تقدم مسار الإجازة بالسند المتصل مع شيوخ مجازين</p>
                <a href={getWhatsappLink("السلام عليكم، أريد الاستفسار عن مسار الإجازة بالسند في أكاديمية الإ独有的")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center space-x-3 rtl:space-x-reverse px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600 text-slate-950 font-black shadow-xl shadow-amber-950 border border-amber-300">
                  <FaWhatsapp className="text-2xl" /><span>احجز تقييمك المجاني</span>
                </a>
              </section>
            </div>
          </div>
        </div>
      </article>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
