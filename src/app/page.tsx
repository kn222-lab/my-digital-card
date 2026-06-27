"use client";
import { useState, useEffect } from "react"; // 1. インポートを追加
import { motion, Variants, useMotionValue, useTransform } from "framer-motion"; // useMotionValueなど追加
import { MY_PROFILE } from "../constants/profile";

type AccentColor = "text-blue-600" | "text-emerald-600" | "text-violet-600" | "text-orange-600";
const COLORS: AccentColor[] = ["text-blue-600", "text-emerald-600", "text-violet-600", "text-orange-600"];

export default function Home() {
  // 2. マウスの座標を取得する処理を追加
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // 画面の中心を(0,0)とした座標に変換し、動きの幅を調整（-0.5〜0.5）
      mouseX.set(e.clientX / window.innerWidth - 0.5);
      mouseY.set(e.clientY / window.innerHeight - 0.5);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // 座標をグラデーションの位置に変換するための変数を定義
  // マウスが動くと、グラデーションの中心もかすかに動く
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
      // bg-grid は残し、relative を追加
      className="min-h-screen bg-slate-50 p-6 md:p-24 font-sans bg-grid relative overflow-hidden"
    >
      {/* 3. マウス追従のスポットライト背景を追加 */}
      <motion.div 
        className="absolute inset-0 pointer-events-none opacity-40 z-0"
        style={{
          background: useTransform(
            [gradientX, gradientY],
            ([x, y]) => `radial-gradient(circle at ${x} ${y}, rgba(29, 78, 216, 0.15) 0%, rgba(29, 78, 216, 0) 50%)`
            // rgba(29, 78, 216) は blue-700 の色
          ),
        }}
      />

      {/* 既存のコンテンツは z-10 を追加して背景より上に表示 */}
      <div className="max-w-3xl mx-auto space-y-10 md:space-y-16 relative z-10">
        
        {/* ヒーローセクション */}
        <motion.section variants={itemVariants} className="space-y-4">
          <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tighter hover:tracking-tight transition-all duration-300">
              Reframe <span className="text-blue-600 animate-cursor font-mono">/</span>
            </h1>
            <span className="text-slate-400 text-base md:text-lg font-medium">by {MY_PROFILE.name}</span>
          </div>
          <p className="text-lg md:text-xl text-blue-600 font-semibold tracking-tight">
            {MY_PROFILE.title}
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 md:p-6 mt-4">
            <p className="text-slate-700 leading-relaxed whitespace-pre-wrap italic text-sm md:text-base">
              {MY_PROFILE.message}
            </p>
          </div>
        </motion.section>

        {/* Concept セクション */}
        <motion.section 
          variants={itemVariants}
          className="py-10 px-6 md:py-12 md:px-10 bg-slate-900 text-slate-50 rounded-[2rem] shadow-2xl relative overflow-hidden group"
        >
          <motion.div 
            initial={{ rotate: -10, opacity: 0 }}
            animate={{ rotate: 0, opacity: 0.08 }} // スマホで見えすぎないよう透明度を微調整
            whileHover={{ scale: 1.1, rotate: 10, opacity: 0.2 }} // 回転を少し強く
            className="absolute -right-6 -bottom-8 text-[10rem] md:text-[15rem] font-bold text-slate-400 pointer-events-none select-none transition-transform duration-500"
          >
            /
          </motion.div>

          <div className="relative z-10 space-y-6">
            <h2 className="text-xl md:text-2xl font-bold border-b border-slate-700 pb-2 font-mono italic">
              Concept <span className="text-blue-400">/</span>
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed text-base md:text-lg">
              {MY_PROFILE.concept.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </motion.section>

        {/* スキルタグ */}
        <motion.section variants={itemVariants} className="space-y-4">
          <h2 className="text-xl md:text-2xl font-bold text-slate-800 border-b-2 border-blue-500 w-fit">Skills</h2>
          <div className="flex flex-wrap gap-2 md:gap-3">
            {MY_PROFILE.skills.map((skill) => (
              <motion.span 
            key={skill} 
            whileHover={{ scale: 1.1, y: -2 }}
            className="px-3 py-1 bg-white border border-slate-200 rounded-full text-slate-700 text-xs md:text-sm shadow-sm cursor-default transition-all"
          >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.section>

        {/* プロジェクト一覧 */}
        <motion.section variants={itemVariants} className="space-y-6">
          <h2 className="text-xl md:text-2xl font-bold text-slate-800 border-b-2 border-blue-500 w-fit">Projects</h2>
          <div className="grid gap-6">
            {MY_PROFILE.projects.map((project) => (
              <motion.div 
            key={project.id} 
            // 4. Projectsカードのホバー・インタラクション（提案2）を少し追加
            whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            className="p-5 md:p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-md border border-slate-100 hover:shadow-xl transition-all group"
          >
                <div className="flex flex-col sm:flex-row justify-between items-start gap-3 mb-4">
                  <h3 className="text-lg md:text-xl font-bold text-slate-900">{project.title}</h3>
                  {project.link && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs font-bold text-blue-600 bg-blue-50 px-4 py-2 rounded-full hover:bg-blue-600 hover:text-white transition-all shadow-sm active:scale-95 whitespace-nowrap"
                    >
                      <span>詳しく見る</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
                <p className="text-sm md:text-base text-slate-600 mb-6 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technology.map((tech) => (
                    <span key={tech} className="font-mono text-[9px] md:text-[10px] uppercase tracking-wider text-blue-500 bg-blue-50/30 px-2 py-1 rounded border border-blue-100/50">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <footer className="text-center pt-8 md:pt-12 text-slate-400 text-[10px] md:text-xs">
          © 2026 {MY_PROFILE.name} | Reframe / Digital Identity
        </footer>
        
      </div>
    </motion.main>
  );
}
