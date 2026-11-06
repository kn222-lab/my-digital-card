// src/app/page.tsx
"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion, useMotionValue, useTransform } from "framer-motion";
import type { Variants } from "framer-motion";
import { MY_PROFILE } from "../constants/profile";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const steps = ["ヒアリング", "課題整理", "ご提案・お見積もり", "制作・導入支援"];

export default function Home() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouseX.set(event.clientX / window.innerWidth - 0.5);
      mouseY.set(event.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const gradientX = useTransform(mouseX, [-0.5, 0.5], ["30%", "70%"]);
  const gradientY = useTransform(mouseY, [-0.5, 0.5], ["30%", "70%"]);
  const spotlightBackground = useTransform(
    [gradientX, gradientY],
    ([x, y]) =>
      `radial-gradient(circle at ${x} ${y}, rgba(29, 78, 216, 0.10) 0%, rgba(29, 78, 216, 0) 50%)`
  );

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative min-h-screen overflow-hidden bg-slate-50 px-6 py-8 font-sans md:px-12 md:py-14"
    >
      {/* 控えめなスポットライト */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-40"
        style={{ background: spotlightBackground }}
      />

      {/* ファーストビュー右上のグリッド装飾 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 z-0 h-[390px] w-[70%] opacity-40 [mask-image:linear-gradient(to_left,black,transparent)]"
        style={{
          backgroundImage:
            "linear-gradient(to_right, rgba(148,163,184,0.18) 1px, transparent 1px), linear-gradient(to_bottom, rgba(148,163,184,0.18) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl space-y-16 md:space-y-24">
        {/* 1. ファーストビュー */}
        <motion.section variants={itemVariants} className="space-y-7 pt-4 md:pt-8">
          <p className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
            個人事業主・小規模事業者向け Web制作・ITサポート
          </p>

          <h1 className="text-3xl font-black leading-[1.4] tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            ホームページ制作から、
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
              日々の業務改善まで。
            </span>
          </h1>

          <h2 className="text-lg font-bold leading-relaxed text-slate-800 md:text-xl">
            今の状況を一緒に整理し、次の一歩を考える。
          </h2>

          <p className="max-w-2xl text-sm leading-8 text-slate-600 md:text-base">
            「何から始めればいい？」「こんなことはできる？」
            <br />
            そんな疑問や困りごとから、お聞かせください。
            <br className="hidden sm:block" />
            お話を伺いながら課題を整理し、Webサイトや既存ツールを活用した方法をご提案します。
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-sm transition-colors hover:bg-blue-700"
            >
              まずは無料で相談する →
            </Link>
            <Link href="/plan" className="text-sm font-bold text-slate-600 hover:text-blue-600">
              サービスを見る →
            </Link>
          </div>
        </motion.section>

        {/* 2. できること */}
        <motion.section variants={itemVariants} className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-sm font-bold text-blue-600">できること</h2>
            <p className="text-xl font-bold text-slate-900 md:text-2xl">
              Web制作と、日々の業務を支える仕組みづくり。
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <article className="space-y-3 rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <span aria-hidden="true" className="text-2xl">💻</span>
                <span className="text-xs font-bold text-blue-600">Wixを活用</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900">Webサイト制作</h3>
              <p className="text-sm leading-7 text-slate-600">
                ホームページの新規制作・リニューアル・運用支援。
                事業の魅力や伝えたいことを整理し、分かりやすいサイトをつくります。
              </p>
            </article>

            <article className="space-y-3 rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <span aria-hidden="true" className="text-2xl">⚙️</span>
                <span className="text-xs font-bold text-emerald-600">GASなどを活用</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900">業務効率化</h3>
              <p className="text-sm leading-7 text-slate-600">
                日々の作業の自動化や情報共有の仕組みづくり。
                今使っているツールも活かしながら、無理のない方法を考えます。
              </p>
            </article>
          </div>
          <div className="text-right">
            <Link href="/plan" className="text-sm font-bold text-blue-600 hover:text-blue-700">
              サービスの詳細を見る →
            </Link>
          </div>
        </motion.section>

        {/* 3. 大切にしていること */}
        <motion.section variants={itemVariants} className="space-y-5">
          <h2 className="text-sm font-bold text-blue-600">大切にしていること</h2>
          <div className="space-y-5 rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm md:p-8">
            <h3 className="text-xl font-bold leading-relaxed text-slate-900 md:text-2xl">
              答えを出す前に、まず状況を知る。
            </h3>
            <p className="text-sm leading-8 text-slate-600 md:text-base">
              同じような悩みでも、事業の状況やこれまでの経緯によって、必要な方法は異なります。
              だからこそ、まずはお話を伺い、今の状況や課題を一緒に整理することを大切にしています。
            </p>
            <p className="text-sm leading-8 text-slate-600 md:text-base">
              ITを導入すること自体を目的にせず、その方に合った次の一歩を考え、
              必要な仕組みづくりまでサポートします。
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-2">
              {steps.map((step, index) => (
                <div key={step} className="flex items-center gap-2">
                  {index > 0 && <span aria-hidden="true" className="text-xs text-slate-300">→</span>}
                  <span className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs text-blue-700">
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="text-right">
            <Link href="/works" className="text-sm font-bold text-blue-600 hover:text-blue-700">
              これまでの制作・支援実績を見る →
            </Link>
          </div>
        </motion.section>

        {/* 4. お問い合わせ */}
        <motion.section variants={itemVariants} className="space-y-5">
          <h2 className="text-sm font-bold text-blue-600">お問い合わせ</h2>
          <div className="space-y-5 rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-sm md:p-8">
            <h3 className="text-xl font-bold text-slate-900 md:text-2xl">
              まずは、お話を聞かせてください。
            </h3>
            <p className="text-sm leading-8 text-slate-600">
              具体的な依頼内容が決まっていなくても大丈夫です。
              初回のヒアリング・課題整理は無料で行い、
              具体的な調査や制作・導入支援は内容に応じてお見積もりします。
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-sm transition-colors hover:bg-blue-700"
            >
              無料相談・お問い合わせ →
            </Link>
          </div>
        </motion.section>

        <footer className="border-t border-slate-200 pt-6 text-center text-xs text-slate-400">
          © 2026 {MY_PROFILE.name} | Reframe /
        </footer>
      </div>
    </motion.div>
  );
}
