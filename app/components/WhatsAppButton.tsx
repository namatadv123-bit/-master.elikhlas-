"use client";

import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { getWhatsappLink } from "@/lib/translations";

export default function WhatsAppButton() {
  return (
    <a
      href={getWhatsappLink("Hello, I'd like to inquire about Quran classes at El-Ikhlas Academy.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 shadow-2xl transition-all hover:scale-110 active:scale-90 flex items-center justify-center border-2 border-emerald-200"
    >
      <FaWhatsapp className="text-3xl text-white" />
    </a>
  );
}
