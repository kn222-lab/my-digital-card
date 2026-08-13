// src/app/bodycare/page.tsx
"use client";
import { useEffect } from "react";
import { motion, Variants, useMotionValue, useTransform } from "framer-motion";
import { SALON_INFO } from "../../constants/bodycare";

export default function BodycarePage() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth - 0.5);
      mouseY.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const gradientX = useTransform(mouseX, [-0.5, 0.5], ["30%", "70%"]);
  const gradientY = useTransform(mouseY, [-0.5, 0.5], ["30%", "70%"]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <motion.main 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen bg-slate-50 p-6 md:p-24 font-sans bg-grid relative overflow-hidden"
    >
      {/* 整体らしい癒やしとクリーンさを表現するエメラルドグリーンの光 */}
      <motion.div 
        className="absolute inset-0 pointer-events-none opacity-40 z-0"
        style={{
          background: useTransform(
            [gradientX, gradientY],
            ([x, y]) => `radial-gradient(circle at ${x} ${y}, rgba(5, 150, 105, 0.12) 0%, rgba(5, 150, 105, 0) 60%)`
          ),
        }}
      />

      <div className="max-w-3xl mx-auto space-y-10 md:space-y-16 relative z-10 pt-10">
        
        {/* ヘッダーセクション */}
        <motion.section variants={itemVariants} className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tighter">
            Reframe <span className="text-emerald-600 font-mono">/</span> Bodycare
          </h1>
          <p className="text-lg text-emerald-600 font-semibold tracking-tight">
            {SALON_INFO.subtitle}
          </p>
          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 md:p-6 mt-4">
            <p className="text-slate-700 leading-relaxed whitespace-pre-wrap italic text-sm md:text-base">
              {SALON_INFO.message}
            </p>
          </div>
        </motion.section>

        {/* スケジュール & アクセス */}
        <motion.section variants={itemVariants} className="space-y-6">
          <h2 className="text-xl md:text-2xl font-bold text-slate-800 border-b-2 border-emerald-500 w-fit">Schedule & Location</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {SALON_INFO.schedule.map((loc, i) => (
              <div key={i} className="p-5 bg-white rounded-2xl shadow-md border border-slate-100">
                <span className="inline-block text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full mb-2">
                  {loc.weeks}
                </span>
                <h3 className="text-lg font-bold text-slate-900 mb-1">{loc.place}</h3>
                <p className="text-xs text-slate-500 mb-3 font-medium">📍 {loc.station}</p>
                <p className="text-sm text-slate-600 leading-relaxed">{loc.description}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* 施術メニュー */}
        <motion.section variants={itemVariants} className="space-y-6">
          <h2 className="text-xl md:text-2xl font-bold text-slate-800 border-b-2 border-emerald-500 w-fit">Menu</h2>
          <div className="space-y-4">
            {SALON_INFO.menu.map((item, i) => (
              <div key={i} className="p-5 md:p-6 bg-white rounded-2xl shadow-md border border-slate-100 flex flex-col md:flex-row justify-between gap-4">
                <div className="space-y-2 flex-1">
                  <h3 className="text-base md:text-lg font-bold text-slate-900">{item.name}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.detail}</p>
                </div>
                <div className="text-left md:text-right min-w-[120px] flex flex-row md:flex-col justify-between md:justify-center items-center md:items-end border-t md:border-t-0 border-slate-100 pt-3 md:pt-0">
                  <span className="text-xs font-mono text-slate-400 md:mb-1">{item.time}</span>
                  <span className="text-lg font-bold text-slate-900 font-mono">{item.price}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ご予約について（予約システムへのメイン導線） */}
        <motion.section 
          variants={itemVariants}
          className="py-10 px-6 md:py-12 md:px-10 bg-slate-900 text-slate-50 rounded-[2rem] shadow-2xl text-center space-y-6"
        >
          <div className="space-y-2">
            <h3 className="text-xl md:text-2xl font-bold">施術のご予約</h3>
            <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
              週末の施術は完全予約制にて承っております。以下の専用予約ページより、ご希望の日時を選択の上ご予約ください。
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-2">
            <a 
              href="https://refame-reservations.onrender.com/" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-emerald-600 text-white font-bold text-sm px-8 py-3.5 rounded-full hover:bg-emerald-500 transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2"
            >
              <span>Web予約はこちら</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>

            <a 
              href="/contact" 
              className="w-full sm:w-auto border border-slate-700 text-slate-300 font-bold text-sm px-6 py-3.5 rounded-full hover:bg-slate-800 transition-all active:scale-95"
            >
              事前のご相談はこちら
            </a>
          </div>
        </motion.section>

      </div>
    </motion.main>
  );
}