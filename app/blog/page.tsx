"use client";

import React from "react";
import Link from "next/link";

import { FaCalendar, FaArrowLeft } from "react-icons/fa";
import Background3D from "../components/Background3D";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import WhatsAppButton from "../components/WhatsAppButton";
import { useLang } from "../components/LanguageProvider";


const blogPosts = [
  {
    slug: "how-to-memorize-quran-online",
    title: "كيف تحفظ القرآن أونلاين في 3 خطوات بسيطة",
    excerpt: "دليلك الشامل لبدء رحلة حفظ القرآن الكريم عبر الإنترنت. تعرّف على أفضل الطرق والاستراتيجيات للحفظ الفعال من خلال الأكاديميات القرآنية الإلكترونية.",
    date: "2026-09-01",
    category: "حفظ القرآن"
  },
  {
    slug: "best-tajweed-methods",
    title: "أفضل طرق تعلم التجويد للمبتدئين",
    excerpt: "مرشدك العملي لتعلم أحكام التجويد من الصفر. نستعرض أفضل المناهج والأساليب التعليمية التي تساعدك على إتقان تلاوة القرآن الكريم بشكل صحيح.",
    date: "2026-08-25",
    category: "التجويد"
  },
  {
    slug: "quran-benefits-children",
    title: "فوائد تعلم القرآن على الأطفال: دليل شامل للأبوين",
    excerpt: "تعرّف على الفوائد النفسية والروحية والعلمية لتعليم القرآن الكريم للأطفال في سن مبكرة. كيف يساهم تعلم القرآن في تنمية شخصية الطفل.",
    date: "2026-08-18",
    category: "الأطفال"
  },
  {
    slug: "what-is-sanad-ijazah",
    title: "ما هي الإجازة بالسند المتصل؟ دليلك الكامل",
    excerpt: "شرح تفصيلي لمفهوم الإجازة بالسند المتصل في القرآن الكريم. كيف تحصل على إجازة قرآنية وما هي شروطها وفوائدها.",
    date: "2026-08-10",
    category: "الإجازة"
  },
  {
    slug: "quran-learning-methods-comparison",
    title: "مقارنة بين مناحي تعلم القرآن المختلفة",
    excerpt: "مقارنة شاملة بين مختلف طرق تعلم القرآن: الحفظ الكامل، المراجعة، التجويد، القراءات العشر. أيها يناسبك أكثر؟",
    date: "2026-08-03",
    category: "التعليم"
  }
];

export default function BlogPage() {
  const { lang, t, isRtl } = useLang();

  return (
    <div dir={isRtl ? "rtl" : "ltr"} className="min-h-screen bg-[#070b12] text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950 relative overflow-x-hidden">
      <Background3D />
      <Navbar />
      <Breadcrumb items={[{ label: "Blog" }]} />

      <section className="relative z-10 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <h1 className="text-4xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-100">المدونة</h1>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">مقالات ومقالات عن تعليم القرآن الكريم والتجويد والإجازة بالسند المتصل</p>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, idx) => (
              <article key={idx} className="rounded-3xl bg-slate-900/80 backdrop-blur-xl border border-slate-800 hover:border-amber-500/50 overflow-hidden transition-all group">
                <div className="p-8">
                  <div className="flex items-center space-x-3 rtl:space-x-reverse text-xs text-slate-500 mb-4">
                    <span className="px-3 py-1 rounded-full bg-amber-950/80 border border-amber-700/50 text-amber-400 font-bold">{post.category}</span>
                    <span className="flex items-center space-x-1 rtl:space-x-reverse"><FaCalendar className="text-amber-400" /><span>{new Date(post.date).toLocaleDateString("ar-EG")}</span></span>
                  </div>
                  <h2 className="text-xl font-black text-white mb-3 group-hover:text-amber-400 transition-colors leading-relaxed">{post.title}</h2>
                  <p className="text-sm text-slate-400 leading-relaxed font-medium mb-6">{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`} className="inline-flex items-center space-x-2 rtl:space-x-reverse text-amber-400 font-black text-sm hover:text-amber-300 transition-colors">
                    <span>اقرأ المزيد</span>
                    <FaArrowLeft className="text-xs" />
                  </Link>
                </div>
              </article>
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
            "@type": "Blog",
            name: "مدونة أكاديمية الإخلاص",
            description: "مقالات ومقالات عن تعليم القرآن الكريم والتجويد والإجازة بالسند المتصل",
            url: "https://elikhlas-academy.com/blog",
            publisher: {
              "@type": "Organization",
              name: "El-Ikhlas Academy",
              logo: {
                "@type": "ImageObject",
                url: "https://elikhlas-academy.com/logo.png"
              }
            },
            blogPost: blogPosts.map((post) => ({
              "@type": "BlogPosting",
              headline: post.title,
              datePublished: post.date,
              description: post.excerpt,
              url: `https://elikhlas-academy.com/blog/${post.slug}`,
              keywords: post.category
            }))
          })
        }}
      />

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
