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


export default function QuranBenefitsChildrenPage() {
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
              <span className="px-3 py-1 rounded-full bg-amber-950/80 border border-amber-700/50 text-amber-400 font-bold">الأطفال</span>
              <span className="flex items-center space-x-1 rtl:space-x-reverse"><FaCalendar className="text-amber-400" /><span>18 أغسطس 2026</span></span>
              <span className="flex items-center space-x-1 rtl:space-x-reverse"><FaClock className="text-amber-400" /><span>6 دقائق قراءة</span></span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-100 leading-relaxed mb-8">فوائد تعلم القرآن على الأطفال</h1>
          </div>
          <div className="max-w-none">
            <div className="space-y-8 text-slate-300 leading-relaxed font-medium">
              <section>
                <h2 className="text-2xl font-black text-white mb-4">لماذا نعلم الأطفال القرآن في سن مبكرة؟</h2>
                <p>تعليم القرآن الكريم للأطفال في سن مبكرة من أهم القرارات التي يمكن أن يتخذها الأبوان. فالقرآن الكريم ليس مجرد كتاب ديني، بل هو شفاء ورحمة وبركة في حياة الطفل.</p>
              </section>
              <section>
                <h2 className="text-2xl font-black text-white mb-4">الفوائد الروحية والنفسية</h2>
                <ul className="list-disc list-inside space-y-2 mr-4">
                  <li>تقوية الروابط العاطفية بين الطفل وكتاب الله تعالى</li>
                  <li>تنمية الشخصية الإسلامية والأخلاق الحميدة منذ الصغر</li>
                  <li>تقوية الثقة بالنفس والشعور بالأمان الروحي</li>
                  <li>تهدئة النفس وتقليل التوتر والقلق عند الأطفال</li>
                </ul>
              </section>
              <section>
                <h2 className="text-2xl font-black text-white mb-4">الفوائد العلمية والintellectuelle</h2>
                <ul className="list-disc list-inside space-y-2 mr-4">
                  <li>تحسين القدرة على الحفظ والتذكّر بشكل عام</li>
                  <li>تنمية مهارات اللغة والقراءة والكتابة</li>
                  <li>تنمية القدرة على التركيز والانتباه</li>
                  <li>تحسين المهارات الحركية الدقيقة من خلال التلاوة</li>
                </ul>
              </section>
              <section>
                <h2 className="text-2xl font-black text-white mb-4">نصائح للأبوين</h2>
                <ul className="list-disc list-inside space-y-2 mr-4">
                  <li>ابدأ بتعليم الحروف العربية أولاً قبل القرآن</li>
                  <li>اجعل التعلم ممتعاً من خلال الألعاب والقصص</li>
                  <li>خصص وقتاً قصيراً يومياً للتحفيظ (15-20 دقيقة)</li>
                  <li>شجّع الطفل وكافئه عند التقدم</li>
                  <li>كن قدوة في حب القرآن والتلاوة</li>
                </ul>
              </section>
              <section className="bg-slate-900/80 border border-amber-500/30 rounded-3xl p-8 text-center space-y-4">
                <h3 className="text-2xl font-black text-white">سجّل طفلك في أكاديمية الإ独有的</h3>
                <p className="text-slate-300">احجز حصص تجريبية مجانية لطفلك مع معلمات متخصصات في تعليم الأطفال</p>
                <a href={getWhatsappLink("السلام عليكم، أريد تسجيل طفلي في أكاديمية الإ独有的")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center space-x-3 rtl:space-x-reverse px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600 text-slate-950 font-black shadow-xl shadow-amber-950 border border-amber-300">
                  <FaWhatsapp className="text-2xl" /><span>احجز الآن</span>
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
