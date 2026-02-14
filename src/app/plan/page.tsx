"use client";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, MessageSquare, Rocket, Settings, RefreshCcw } from "lucide-react";
import Link from "next/link";


export default function PlanPage() {
  const steps = [
    { title: "現状ヒアリング", icon: <MessageSquare className="w-5 h-5" /> },
    { title: "改善案の提示", icon: <Settings className="w-5 h-5" /> },
    { title: "小さく実装", icon: <Rocket className="w-5 h-5" /> },
    { title: "現場で運用", icon: <CheckCircle2 className="w-5 h-5" /> },
    { title: "改善・拡張", icon: <RefreshCcw className="w-5 h-5" /> },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 px-6 py-20">
      <div className="max-w-4xl mx-auto">
        
        {/* タイトル */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center md:text-left"
        >
          <h1 className="text-4xl font-bold mb-4">
            Plan <span className="text-blue-600">/</span>
          </h1>
          <p className="text-slate-400">ビジネスの状況に合わせた最適なステップをご提案します。</p>
        </motion.div>

        {/* できることセクション */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            できること <span className="text-blue-600">/</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                title: "小さく作る", 
                desc: "GAS・Python・Webを活用し、まずは“小さく動く仕組み”をつくります。",
                items: ["スプレッドシート自動化", "フォーム連携", "LINE／Notion連携", "簡易業務システム構築"]
              },
              { 
                title: "使える形にする", 
                desc: "作るだけでなく、「現場で回る形」に整えます。",
                items: ["業務フロー整理", "マニュアル化", "操作説明", "改善提案"]
              },
              { 
                title: "育てる", 
                desc: "導入後も、状況に合わせて改善・拡張します。",
                items: ["機能追加", "仕様変更対応", "運用サポート"]
              }
            ].map((box, i) => (
              <div key={i} className="p-6 rounded-2xl bg-slate-800/40 border border-slate-700/50">
                <h3 className="text-blue-400 font-bold mb-3">{box.title}</h3>
                <p className="text-xs text-slate-400 mb-4 h-12">{box.desc}</p>
                <ul className="space-y-2">
                  {box.items.map((item, j) => (
                    <li key={j} className="text-sm flex items-center gap-2 text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-blue-500" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* 進め方セクション */}
        <section className="mb-20 bg-slate-800/20 p-8 rounded-3xl border border-slate-800">
          <h2 className="text-2xl font-bold mb-8 text-center">進め方 <span className="text-blue-600">/</span></h2>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col md:flex-row items-center gap-4 flex-1">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-slate-800 border border-blue-500/50 flex items-center justify-center text-blue-400 mb-2">
                    {step.icon}
                  </div>
                  <span className="text-xs font-medium text-slate-300 whitespace-nowrap">{step.title}</span>
                </div>
                {i !== steps.length - 1 && (
                  <ArrowRight className="hidden md:block w-4 h-4 text-slate-600" />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* プラン例セクション */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-4">プラン例 <span className="text-blue-600">/</span></h2>
          <p className="text-sm text-slate-500 mb-8">※内容により変動します。まずはご相談ください。</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "単発サポート", price: "5万円〜", detail: "小さな自動化や仕組み化をスポットで対応します。" },
              { name: "業務整理＋実装パック", price: "10万円〜20万円", detail: "現状整理から設計・実装まで一気通貫で支援します。" },
              { name: "継続改善サポート", price: "月3万円〜", detail: "導入後の改善・拡張を月額でサポートします。" }
            ].map((plan, i) => (
              <div key={i} className="relative p-8 rounded-2xl bg-gradient-to-b from-slate-800/60 to-slate-900 border border-slate-700 hover:border-blue-500/50 transition-colors">
                <h3 className="font-bold text-lg mb-2">{plan.name}</h3>
                <div className="text-2xl font-bold text-blue-400 mb-4">{plan.price}</div>
                <p className="text-sm text-slate-400">{plan.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 価格について */}
        <section className="text-center bg-blue-600/10 p-10 rounded-3xl border border-blue-500/20">
          <h2 className="text-xl font-bold mb-4">価格について <span className="text-blue-600">/</span></h2>
          <p className="text-slate-300 mb-6 leading-relaxed">
            規模や内容によって変動します。無理のない形で段階的に進めることも可能です。<br />
            まずはお気軽にご相談ください。
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-blue-600 hover:bg-blue-500 text-white px-10 py-4 rounded-full font-bold transition-all"
            >
            ご相談はこちらから
          </Link>
        </section>

      </div>
    </div>
  );
}