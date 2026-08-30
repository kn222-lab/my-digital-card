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
          <p className="text-slate-400">現場の状況やご予算に合わせて、無理のない最適なステップをご提案します。</p>
        </motion.div>

        {/* できることセクション */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            できること <span className="text-blue-600">/</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                title: "小さく作る・整える", 
                desc: "WixやGAS・Notionを活用し、まずは現場に寄り添った仕組みをつくります。",
                items: ["Wix (自走型HP制作)", "スプレッドシート/GAS自動化", "LINE／Notion連携", "簡易業務システム構築"]
              },
              { 
                title: "使える形にする", 
                desc: "作るだけでなく、現場で「自分たちで回せる形」に整えます。",
                items: ["業務フロー整理", "操作レクチャー", "更新手順のマニュアル化", "改善提案"]
              },
              { 
                title: "育てる・伴走する", 
                desc: "導入後も、状況や変化に合わせて無理なく改善・拡張します。",
                items: ["機能追加・変更対応", "Webサイトの更新サポート", "継続的なIT相談"]
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

        {/* 参考モデル（価格例）セクション */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-2">サポート事例・参考モデル <span className="text-blue-600">/</span></h2>
          <p className="text-sm text-slate-400 mb-8">
            決まった定額プランではなく、ご要望や課題の範囲に応じて柔軟にお見積もりします（※表示金額は参考の目安です）。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                name: "自走型Webサイト制作", 
                price: "10万円〜", 
                badge: "実例あり",
                detail: "Wixを活用したHP制作。納品後もご自身でお知らせやブログを更新できるよう操作レクチャーまで伴走します。" 
              },
              { 
                name: "業務整理 ＋ 仕組み構築", 
                price: "5万円〜15万円", 
                badge: "スポット",
                detail: "LINE×Notion連携やGASでの自動化など、現場のリテラシーに合わせた業務改善システムを構築します。" 
              },
              { 
                name: "継続伴走・レクチャー", 
                price: "月3万円〜", 
                badge: "月額相談",
                detail: "導入後のシステム改修やWeb更新サポート、日々のITの困りごとに定額で相談に乗るパートナー契約です。" 
              }
            ].map((plan, i) => (
              <div key={i} className="relative p-8 rounded-2xl bg-gradient-to-b from-slate-800/60 to-slate-900 border border-slate-700 hover:border-blue-500/50 transition-colors flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg">{plan.name}</h3>
                    <span className="text-[10px] bg-blue-900/60 text-blue-300 px-2 py-0.5 rounded border border-blue-700/50">
                      {plan.badge}
                    </span>
                  </div>
                  <div className="text-2xl font-bold text-blue-400 mb-4">{plan.price}</div>
                  <p className="text-sm text-slate-400 leading-relaxed">{plan.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 価格について・問い合わせ案内 */}
        <section className="text-center bg-blue-600/10 p-10 rounded-3xl border border-blue-500/20">
          <h2 className="text-xl font-bold mb-4">お気軽にご相談ください <span className="text-blue-600">/</span></h2>
          <p className="text-slate-300 mb-6 leading-relaxed max-w-xl mx-auto text-sm md:text-base">
            「何から手をつければいいか分からない」「予算○万円の中でできることを相談したい」といった状態でも全く問題ありません。<br />
            まずは現状のお困りごとをお聞かせください。
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-blue-600 hover:bg-blue-500 text-white px-10 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-blue-500/25"
          >
            ご相談・お見積もりはこちら（無料）
          </Link>
        </section>

      </div>
    </div>
  );
}