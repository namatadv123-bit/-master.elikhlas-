"use client";

import React from "react";
import Link from "next/link";

import { FaArrowRight, FaCalendar, FaUser, FaClock, FaWhatsapp } from "react-icons/fa";
import Background3D from "../../components/Background3D";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import WhatsAppButton from "../../components/WhatsAppButton";
import { useLang } from "../../components/LanguageProvider";
import { getWhatsappLink } from "@/lib/translations";


export default function HowToMemorizeQuranOnline() {
  const { lang, t, isRtl } = useLang();

  return (
    <div dir={isRtl ? "rtl" : "ltr"} className="min-h-screen bg-[#070b12] text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950 relative overflow-x-hidden">
      <Background3D />
      <Navbar />

      <article className="relative z-10 pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <Link href="/blog" className="inline-flex items-center space-x-2 rtl:space-x-reverse text-amber-400 font-bold text-sm mb-8 hover:text-amber-300 transition-colors">
              <FaArrowRight className="rotate-180" />
              <span>العودة للمدونة</span>
            </Link>

            <div className="flex items-center space-x-4 rtl:space-x-reverse text-xs text-slate-500 mb-6">
              <span className="px-3 py-1 rounded-full bg-amber-950/80 border border-amber-700/50 text-amber-400 font-bold">حفظ القرآن</span>
              <span className="flex items-center space-x-1 rtl:space-x-reverse"><FaCalendar className="text-amber-400" /><span>1 سبتمبر 2026</span></span>
              <span className="flex items-center space-x-1 rtl:space-x-reverse"><FaClock className="text-amber-400" /><span>5 دقائق قراءة</span></span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-100 leading-relaxed mb-8">كيف تحفظ القرآن أونلاين في 3 خطوات بسيطة</h1>
          </div>

          <div className="prose prose-invert prose-amber max-w-none">
            <div className="space-y-8 text-slate-300 leading-relaxed font-medium">
              <section>
                <h2 className="text-2xl font-black text-white mb-4">مقدمة</h2>
                <p className="mb-4">أصبح حفظ القرآن الكريم أونلاين من الخيارات المتاحة والمريحة للعديد من المسلمين حول العالم. مع التقدم التكنولوجي والمنصات التعليمية الحديثة، أصبح بإمكانك حفظ كتاب الله من منزلك بسهولة وفعالية.</p>
                <p>في هذا المقال، سنتعرّف على 3 خطوات بسيطة لبدء رحلة حفظ القرآن أونلاين وتحقيق أهدافك القرآنية.</p>
              </section>

              <section>
                <h2 className="text-2xl font-black text-white mb-4">الخطوة الأولى: اختر أكاديمية قرآنية معتمدة</h2>
                <p className="mb-4">أول خطوة نحو حفظ القرآن أونلاين هي اختيار أكاديمية قرآنية ذات سمعة طيبة ومعتمدة. يجب أن تبحث عن:</p>
                <ul className="list-disc list-inside space-y-2 mr-4">
                  <li>معلمين مجازين بالسند المتصل إلى النبي ﷺ</li>
                  <li>برامج تعليمية متكاملة تشمل الحفظ والمراجعة</li>
                  <li>مواعيد مرنة تناسب جدولك اليومي</li>
                  <li>نظام متابعة وتقييم مستمر</li>
                  <li>إمكانية الحصة التجريبية المجانية</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-black text-white mb-4">الخطوة الثانية: حدد خطة الحفظ المناسبة</h2>
                <p className="mb-4">بعد اختيار الأكاديمية المناسبة، يجب وضع خطة حفظ واضحة وواقعية. إليك بعض النصائح:</p>
                <ul className="list-disc list-inside space-y-2 mr-4">
                  <li>حدد الهدف اليومي: ابدأ بحفظ صفحة أو نصف صفحة يومياً</li>
                  <li>خصص وقتاً محدداً للحفظ كل يوم</li>
                  <li>خصص وقتاً آخر للمراجعة اليومية</li>
                  <li>ضع جدولاً أسبوعياً لمراجعة ما حفظته سابقاً</li>
                  <li>لا تكن صارماً جداً مع نفسك في البداية</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-black text-white mb-4">الخطوة الثالثة: التزم والاستمر</h2>
                <p className="mb-4">الsecret في حفظ القرآن هو الاستمرارية والالتزام. إليك كيف تضمن استمراريتك:</p>
                <ul className="list-disc list-inside space-y-2 mr-4">
                  <li>استمع إلى التلاوة يومياً قبل الحفظ</li>
                  <li>راجع ما حفظته قبل البدء في حفظ جديد</li>
                  <li>شارك في حلقات مراجعة مع زملائك</li>
                  <li>استمع إلى القرآن في أوقات الفراغ</li>
                  <li>ادعي الله في كل حصة أن يثبت حفظك</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-black text-white mb-4">نصائح إضافية للنجاح</h2>
                <ul className="list-disc list-inside space-y-2 mr-4">
                  <li>احرص على فهم معاني الآيات قبل الحفظ</li>
                  <li>استخدم وسائل مساعدة مثل التلوين والتمييز</li>
                  <li>حافظ على تواصلك مع معلمك ومتابعته</li>
                  <li>لا تتردد في طلب المساعدة عند الحاجة</li>
                  <li>احتفل بالإنجازات الصغيرة على طول الطريق</li>
                </ul>
              </section>

              <section className="bg-slate-900/80 border border-amber-500/30 rounded-3xl p-8 text-center space-y-4">
                <h3 className="text-2xl font-black text-white">ابدأ رحلتك اليوم</h3>
                <p className="text-slate-300">احجز حصتك التجريبية المجانية في أكاديمية الإ独有的 وابدأ حفظ القرآن بسرعة وفعالية</p>
                <a href={getWhatsappLink("السلام عليكم، أريد حجز حصص تجريبية لحفظ القرآن في أكاديمية الإ独有的")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center space-x-3 rtl:space-x-reverse px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600 text-slate-950 font-black shadow-xl shadow-amber-950 border border-amber-300">
                  <FaWhatsapp className="text-2xl" />
                  <span>احجز الآن</span>
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
