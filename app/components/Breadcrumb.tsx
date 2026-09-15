"use client";

import React from "react";
import Link from "next/link";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { useLang } from "./LanguageProvider";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  const { isRtl } = useLang();

  return (
    <nav aria-label="Breadcrumb" className="relative z-10 pt-4 pb-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center space-x-2 rtl:space-x-reverse text-xs font-bold text-slate-400">
          <li>
            <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
          </li>
          {items.map((item, idx) => (
            <li key={idx} className="flex items-center space-x-2 rtl:space-x-reverse">
              {isRtl ? <FaChevronLeft className="text-amber-400/50 text-[10px]" /> : <FaChevronRight className="text-amber-400/50 text-[10px]" />}
              {item.href ? (
                <Link href={item.href} className="hover:text-amber-400 transition-colors">{item.label}</Link>
              ) : (
                <span className="text-amber-400">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
