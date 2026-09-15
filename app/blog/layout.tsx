import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quran Learning Blog | Tips & Guides for Students in USA & Canada",
  description: "Read the latest articles about learning Quran online, Tajweed tips, memorization strategies, and Ijazah guidance for students in USA and Canada.",
  keywords: ["quran learning blog", "tajweed tips", "quran memorization guide", "learn quran USA blog"],
};
export default function BlogLayout({ children }: { children: React.ReactNode }) { return children; }
