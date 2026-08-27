// src/app/page.tsx
"use client";
import { useEffect } from "react";
import Image from "next/image";
import { motion, Variants, useMotionValue, useTransform } from "framer-motion";
import { MY_PROFILE } from "../constants/profile";

export default function Home() {
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
      transition: { staggerChildren: 0.12, delayChildren: 0.1 }
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
      className="min-h-screen bg-slate-50 px-6 py-4 md:px-24 md:py-8 font-sans bg-grid relative overflow-hidden"
    >
      {/* マウス追従スポットライト */}
      <motion.div 
        className="absolute inset-0 pointer-events-none opacity-40 z-0"
        style={{
          background: useTransform(
            [gradientX, gradientY],
            ([x, y]) => `radial-gradient(circle at ${x} ${y}, rgba(29, 78, 216, 0.15) 0%, rgba(29, 78, 216, 0) 50%)`
          ),
        }}
      />

      <div className="max-w-3xl mx-auto space-y-12 md:space-y-16 relative z-10 pt-2">
        
        {/* 大型キャッチコピー & ヒーロー写真 */}
        <motion.section variants={itemVariants} className="space-y-6 pt-2">
          {/* サブタグ（名前と肩書きをさりげなく配置） */}
          <div className="flex items-center gap-2 text-xs md:text-sm font-bold">
            <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full border border-blue-100">
              IT活用サポート / 整体師
            </span>
            <span className="text-slate-400">by 並木 健太</span>
          </div>

          {/* ドンと目に飛び込む大型キャッチコピー */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
            「難しい」を、<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
              「使える」に変える。
            </span>
          </h1>

          <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-xl">
            専門用語ばかりのITも、自分自身の身体の現在地も。かみ砕いて理解し、自分で使いこなすための「枠組み」を整えます。
          </p>

          {/* ヒーロー写真ビジュアル */}
          <div className="relative w-full h-56 sm:h-72 md:h-80 rounded-3xl overflow-hidden shadow-xl border border-slate-200/60 group">
            <img 
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
              alt="Reframe Background"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            {/* 上品なグラデーションオーバーレイ */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent" />
            
            <div className="absolute bottom-4 left-6 right-6 text-white flex justify-between items-end">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-300">Location</span>
                <p className="text-xs font-bold">Kamakura & Zushi, Japan</p>
              </div>
              <span className="text-[10px] font-mono text-slate-300">Reframe / Identity</span>
            </div>
          </div>
        </motion.section>

        {/* 3. 2つの事業軸（シンプルカード） */}
        <motion.section variants={itemVariants} className="space-y-4">
          <h3 className="text-xs font-mono font-bold tracking-widest text-slate-400 uppercase">OUR SERVICES</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {/* IT伴走 */}
            <div className="p-6 bg-white/90 backdrop-blur-sm rounded-2xl border border-slate-100 shadow-sm space-y-3">
              <div className="text-2xl">💻</div>
              <h4 className="font-bold text-slate-900 text-base md:text-lg">IT伴走 & 業務改善</h4>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                現場のリテラシーに合わせてツールを最適化。自分で使いこなせる（自走できる）まで丁寧に伴走します。
              </p>
              <div className="pt-1 flex flex-wrap gap-1">
                {["Wix", "GAS", "Java / SQL"].map(t => (
                  <span key={t} className="text-[10px] font-mono bg-slate-100 text-slate-600 px-2 py-0.5 rounded">{t}</span>
                ))}
              </div>
            </div>

            {/* 整体 */}
            <a href="/bodycare" className="p-6 bg-white/90 backdrop-blur-sm rounded-2xl border border-slate-100 shadow-sm space-y-3 hover:border-emerald-200 transition-all group block">
              <div className="flex justify-between items-start">
                <div className="text-2xl">🌿</div>
                <span className="text-xs font-bold text-emerald-600 group-hover:translate-x-1 transition-transform">詳細を見る →</span>
              </div>
              <h4 className="font-bold text-slate-900 text-base md:text-lg">身体のコンディショニング</h4>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                逗子・由比ガ浜での週末整体。施術とともに自身の身体の状態や癖を深く理解できる時間を提供します。
              </p>
              <div className="pt-1 flex flex-wrap gap-1">
                {["逗子 (神武寺)", "由比ヶ浜", "60分 ¥8,000"].map(t => (
                  <span key={t} className="text-[10px] font-mono bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded">{t}</span>
                ))}
              </div>
            </a>
          </div>
        </motion.section>

        {/* 4. スキルタグ */}
        <motion.section variants={itemVariants} className="space-y-3">
          <h3 className="text-xs font-mono font-bold tracking-widest text-slate-400 uppercase">SKILLS</h3>
          <div className="flex flex-wrap gap-2">
            {["IT導入・伴走支援", "業務プロセス改善", "Wix (HP制作)", "GAS / Notion / LINE", "Java / Spring Boot / SQL", "骨格調整・身体理解"].map((skill) => (
              <span 
                key={skill} 
                className="px-3 py-1 bg-white border border-slate-200 rounded-full text-slate-700 text-xs shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.section>

        {/* 5. 主な実績 */}
        <motion.section variants={itemVariants} className="space-y-4">
          <h3 className="text-xs font-mono font-bold tracking-widest text-slate-400 uppercase">WORKS & PROJECTS</h3>
          <div className="space-y-3">
            {MY_PROFILE.projects.map((project) => (
              <div 
                key={project.id} 
                className="p-5 bg-white/80 backdrop-blur-sm rounded-xl border border-slate-100 shadow-sm space-y-3"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <h4 className="text-sm md:text-base font-bold text-slate-900">{project.title}</h4>
                  
                  {/* link が存在する場合のみボタンを表示 */}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-lg transition-colors w-fit"
                    >
                      <span>デモ・詳細を見る</span>
                      <span className="text-[10px]">↗</span>
                    </a>
                  )}
                </div>

                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">{project.description}</p>

                {/* 技術タグ */}
                <div className="flex flex-wrap gap-1 pt-1">
                  {project.technology.map((t) => (
                    <span key={t} className="text-[10px] font-mono bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* 6. プロフィールページへのリンク */}
        <motion.section variants={itemVariants} className="text-center pt-2">
          <a 
            href="/profile" 
            className="inline-block text-xs font-bold text-slate-500 hover:text-blue-600 bg-white border border-slate-200 px-5 py-2.5 rounded-full transition-all shadow-sm hover:shadow"
          >
            Reframe / の詳しいプロフィール・思想を見る →
          </a>
        </motion.section>

        <footer className="text-center pt-6 text-slate-400 text-[10px]">
          © 2026 {MY_PROFILE.name} | Reframe / Digital Identity
        </footer>
        
      </div>
    </motion.main>
  );
}