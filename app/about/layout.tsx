import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About El-Ikhlas Academy | Online Quran School in USA & Canada",
  description: "Learn about El-Ikhlas Academy - a leading online Quran academy serving students in USA, Canada and worldwide. Certified scholars with authentic Sanad chains. Free trial classes available.",
  keywords: ["about el-ikhlas academy", "online quran school USA", "quran academy Canada", "certified quran teachers"],
  openGraph: {
    title: "About El-Ikhlas Academy | Online Quran School",
    description: "Learn about El-Ikhlas Academy - serving students in USA, Canada and worldwide with certified scholars.",
  }
};
export default function AboutLayout({ children }: { children: React.ReactNode }) { return children; }
