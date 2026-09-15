"use client";

import React from "react";

export default function Background3D() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#070b12] via-[#0a1628] to-[#070b12]" />
      
      {/* Animated gold particles */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-amber-400/30 rounded-full animate-pulse" style={{ animationDuration: "3s" }} />
      <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-amber-300/20 rounded-full animate-pulse" style={{ animationDuration: "4s", animationDelay: "1s" }} />
      <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-emerald-400/20 rounded-full animate-pulse" style={{ animationDuration: "5s", animationDelay: "2s" }} />
      <div className="absolute top-2/3 right-1/4 w-2.5 h-2.5 bg-amber-500/15 rounded-full animate-pulse" style={{ animationDuration: "6s" }} />
      <div className="absolute top-1/2 left-1/6 w-1 h-1 bg-amber-400/25 rounded-full animate-pulse" style={{ animationDuration: "3.5s", animationDelay: "0.5s" }} />
      
      {/* Floating orbs */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "8s" }} />
      <div className="absolute bottom-32 left-16 w-48 h-48 bg-emerald-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "10s", animationDelay: "3s" }} />
      <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-amber-400/5 rounded-full blur-2xl animate-pulse" style={{ animationDuration: "7s", animationDelay: "1s" }} />
      
      {/* Grid lines (subtle) */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: "linear-gradient(rgba(251,191,36,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(251,191,36,0.3) 1px, transparent 1px)",
        backgroundSize: "100px 100px"
      }} />
    </div>
  );
}
