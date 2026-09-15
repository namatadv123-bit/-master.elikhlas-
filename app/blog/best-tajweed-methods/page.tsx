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


export default function BestTajweedMethodsPage() {
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
              <span className="px-3 py-1 rounded-full bg-amber-950/80 border border-amber-700/50 text-amber-400 font-bold">التجويد</span>
              <span className="flex items-center space-x-1 rtl:space-x-reverse"><FaCalendar className="text-amber-400" /><span>25 أغسطس 2026</span></span>
              <span className="flex items-center space-x-1 rtl:space-x-reverse"><FaClock className="text-amber-400" /><span>7 دقائق قراءة</span></span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-100 leading-relaxed mb-8">أفضل طرق تعلم التجويد للمبتدئين</h1>
          </div>

          <div className="max-w-none">
            <div className="space-y-8 text-slate-300 leading-relaxed font-medium">
              <section>
                <h2 className="text-2xl font-black text-white mb-4">ما هو التجويد؟</h2>
                <p className="mb-4">التجويد لغة: التحسين والتحسين. واصطلاحاً: إخراج كل حرف من مخرجه مع إعطاءه حقه من الصفات وال疑点. هو فن تجويد القرآن الكريم وrules التي تحكم تلاوته بشكل صحيح وجميل.</p>
                <p>تعلم التجويد واجب على كل مسلم يقرأ القرآن الكريم، لأنه يضمن التلاوة الصحيحة والVGCE كما أنزلها الله تعالى.</p>
              </section>

              <section>
                <h2 className="text-2xl font-black text-white mb-4">الأدلة على وجوب تعلم التجويد</h2>
                <ul className="list-disc list-inside space-y-2 mr-4">
                  <li>قول الله تعالى: ﴿وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا﴾</li>
                  <li>حديث النبي ﷺ: «اقرأوا القرآن ب regulates ما عهد الله به كما عهد عليكم»</li>
                  <li>إجماع العلماء على وجوب تعلم قراءة القرآن بشكل صحيح</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-black text-white mb-4">خطوات تعلم التجويد للمبتدئين</h2>
                <div className="space-y-4">
                  <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
                    <h3 className="text-lg font-black text-amber-400 mb-2">1. تعلم مخارج الحروف</h3>
                    <p>ابدأ بتعلم مخارج الحروف العربية الـ 29 حرف. كل حرف له مخرج محدد في الفم أو الحلق أو اللسان. فهم المخارج هو الأساس لتعلم التجويد.</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
                    <h3 className="text-lg font-black text-amber-400 mb-2">2. تعلم صفات الحروف</h3>
                    <p>كل حرف في العربية له صفات تميزه عن غيره. من أهم الصفات: القوة والضعف، الإطباق والافتراء، الإewart والصدور.</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
                    <h3 className="text-lg font-black text-amber-400 mb-2">3. تعلم أحكام النون الساكنة والتنوين</h3>
                    <p>من أهم أحكام التجويد: الإخفاء الشفوي، الإقلاب، الإظهار، والغنة. هذه الأحكام تطبق عند النون الساكنة أو التنوين.</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
                    <h3 className="text-lg font-black text-amber-400 mb-2">4. تعلم أحكام الميم الساكنة</h3>
                    <p>للميم الساكنة ثلاثة أحكام: الإخفاء الشفوي، والغنة، والقلب. تختلف حسب الحرف الذي يليها.</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
                    <h3 className="text-lg font-black text-amber-400 mb-2">5. تعلم المدود</h3>
                    <p>المدود هي إطالة الصوت عند الهمزة التي تليها ألف. أنواعها: مد لين، مد عارض، مد متصل، مد منفصل.</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-black text-white mb-4">نصائح لتعلم التجويد بفعالية</h2>
                <ul className="list-disc list-inside space-y-2 mr-4">
                  <li>استمع إلى تلاوات القراء المشهورين وحاكي أسلوبهم</li>
                  <li>سجّل تلاوتك واستمع إليها وقارنها بالتلاوات الصحيحة</li>
                  <li>احجز حصصاً مع معلم متخصص للحصول على ملاحظات فورية</li>
                  <li>تدرّج في تعلم الأحكام: ابدأ بالأركان الأساسية ثم تقدّم</li>
                  <li>اطلب من الله التوفيق والسداد في كل مرة تقرأ فيها القرآن</li>
                </ul>
              </section>

              <section className="bg-slate-900/80 border border-amber-500/30 rounded-3xl p-8 text-center space-y-4">
                <h3 className="text-2xl font-black text-white">تعلم التجويد مع معلم متخصص</h3>
                <p className="text-slate-300">احجز حصتك التجريبية المجانية وتعلم أحكام التجويد مع معلمين مجازين بالسند المتصل</p>
                <a href={getWhatsappLink("السلام عليكم، أريد تعلم التجويد في أكاديمية الإ独有的")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center space-x-3 rtl:space-x-reverse px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600 text-slate-950 font-black shadow-xl shadow-amber-950 border border-amber-300">
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
