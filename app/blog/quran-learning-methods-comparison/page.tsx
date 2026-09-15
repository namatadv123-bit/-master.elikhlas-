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


export default function QuranLearningComparisonPage() {
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
              <span className="px-3 py-1 rounded-full bg-amber-950/80 border border-amber-700/50 text-amber-400 font-bold">التعليم</span>
              <span className="flex items-center space-x-1 rtl:space-x-reverse"><FaCalendar className="text-amber-400" /><span>3 أغسطس 2026</span></span>
              <span className="flex items-center space-x-1 rtl:space-x-reverse"><FaClock className="text-amber-400" /><span>7 دقائق قراءة</span></span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-100 leading-relaxed mb-8">مقارنة بين مناحي تعلم القرآن المختلفة</h1>
          </div>
          <div className="max-w-none">
            <div className="space-y-8 text-slate-300 leading-relaxed font-medium">
              <section>
                <h2 className="text-2xl font-black text-white mb-4">مقدمة</h2>
                <p>هناك عدة مناحي لتعلم القرآن الكريم، وكل منها يناسب فئة معينة من المتعلمين. في هذا المقال، نقارن بين هذه المناحي لمساعدتك في اختيار الأنسب لك.</p>
              </section>
              <section>
                <h2 className="text-2xl font-black text-white mb-4">1. مسار الحفظ الكامل</h2>
                <p className="mb-4">يهدف إلى حفظ القرآن الكريم كاملاً (30 جزءاً). مناسب للطلاب الطموحين الذين يرغبون في حفظ كتاب الله كاملاً.</p>
                <ul className="list-disc list-inside space-y-1 mr-4">
                  <li><strong>المدة:</strong> 2-4 سنوات حسب السرعة</li>
                  <li><strong>النتيجة:</strong> حفظ كامل + قدرة على التلاوة بلا مصحف</li>
                </ul>
              </section>
              <section>
                <h2 className="text-2xl font-black text-white mb-4">2. مسار التجويد والإتقان</h2>
                <p className="mb-4">يركز على إتقان تلاوة القرآن بأحكام التجويد الصحيحة. مناسب لمن يريد تحسين جودة تلاوته.</p>
                <ul className="list-disc list-inside space-y-1 mr-4">
                  <li><strong>المدة:</strong> 1-2 سنة</li>
                  <li><strong>النتيجة:</strong> إتقان التجويد + تلاوة جميلة وصحيحة</li>
                </ul>
              </section>
              <section>
                <h2 className="text-2xl font-black text-white mb-4">3. مسار الإجازة بالسند</h2>
                <p className="mb-4">برنامج متقدم للحصول على إجازة قرآنية بسند متصل إلى النبي ﷺ. مناسب للطلاب المتقدمين.</p>
                <ul className="list-disc list-inside space-y-1 mr-4">
                  <li><strong>المدة:</strong> 3-5 سنوات</li>
                  <li><strong>النتيجة:</strong> إجازة رسمية + صلاحية التدريس</li>
                </ul>
              </section>
              <section>
                <h2 className="text-2xl font-black text-white mb-4">如何 تختار المسار المناسب لك؟</h2>
                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800"><strong className="text-amber-400">إذا كنت مبتدئاً:</strong> ابدأ بمسار براعم القرآن أو الحفظ التدريجي</div>
                  <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800"><strong className="text-amber-400">إذا كنت تريد الت专项:</strong> اختر مسار التجويد والإتقان</div>
                  <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800"><strong className="text-amber-400">إذا كنت طموحاً:</strong> اختر مسار الإجازة بالسند المتصل</div>
                </div>
              </section>
              <section className="bg-slate-900/80 border border-amber-500/30 rounded-3xl p-8 text-center space-y-4">
                <h3 className="text-2xl font-black text-white">استشر معلمنا المتخصص</h3>
                <p className="text-slate-300">احجز استشارة مجانية لتحديد المسار الأنسب لمستواك وأهدافك</p>
                <a href={getWhatsappLink("السلام عليكم، أريد استشارة لاختيار المسار المناسب لي في تعلم القرآن")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center space-x-3 rtl:space-x-reverse px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600 text-slate-950 font-black shadow-xl shadow-amber-950 border border-amber-300">
                  <FaWhatsapp className="text-2xl" /><span>احجز استشارتك</span>
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
