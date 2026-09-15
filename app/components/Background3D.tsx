"use client";

import React from "react";

export default function Background3D() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#070b12] via-[#0a1628] to-[#070b12]" />
      <div className="absolute top-20 right-20 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-32 left-16 w-48 h-48 bg-emerald-500/5 rounded-full blur-3xl" />
    </div>
  );
}
