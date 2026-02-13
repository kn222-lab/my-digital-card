"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 px-6 py-20">
      <div className="max-w-3xl mx-auto">
        
        {/* プロフィール上部：写真と名前 */}
        <div className="flex flex-col md:flex-row items-center gap-10 mb-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            {/* 写真の背景に青いアクセント（光彩効果） */}
            <div className="absolute -inset-1 bg-blue-600 rounded-2xl blur opacity-25"></div>
            
            <div className="relative w-48 h-48 md:w-56 md:h-56">
              <Image
                src="/profile.jpg" // public/profile.jpg を参照
                alt="並木 健太"
                fill
                className="object-cover rounded-2xl border-2 border-slate-700 shadow-2xl"
                priority
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl font-bold mb-2">
              Profile <span className="text-blue-600">/</span>
            </h1>
            <p className="text-blue-400 text-xl font-medium mb-4">並木 健太 | Kenta Namiki</p>
            <div className="flex gap-3 justify-center md:justify-start">
              <span className="px-3 py-1 bg-slate-800 rounded-full text-xs border border-slate-700 text-slate-300">Web Engineer</span>
              <span className="px-3 py-1 bg-slate-800 rounded-full text-xs border border-slate-700 text-slate-300">Optimize Engineer</span>
              <span className="px-3 py-1 bg-slate-800 rounded-full text-xs border border-slate-700 text-slate-300">Business Partner</span>
            </div>
          </motion.div>
        </div>

        {/* ストーリー・背景セクション */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-16"
        >
          <section>
            <h2 className="text-xl font-bold mb-6 border-l-4 border-blue-600 pl-4">Background</h2>
            <div className="text-slate-300 leading-relaxed space-y-4">
              <p>
                エンジニアとしてキャリアをスタートした後、一度その道を離れ、リラクゼーション・整体の世界に身を置きました。
              </p>
              <p>
                身体や人の状態を深く見る経験を通じて学んだのは、<span className="text-white font-medium underline decoration-blue-500/50 underline-offset-4">「物事は立ち位置や枠組み（フレーム）次第で、見え方が大きく変わる」</span>ということです。
              </p>
              <p>
                再びエンジニアの領域に戻ってきた今、以前と同じ場所に立っていても、見えている景色はまったく違います。この多角的な視点こそが、私の最大の強みです。
              </p>
            </div>
          </section>

          {/* ビジョン・役割のカード */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 rounded-2xl bg-slate-800/40 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 group">
              <h3 className="text-blue-400 font-bold mb-2 group-hover:text-blue-300 transition-colors">Vision</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                「無理のない前進」をつくる。技術を目的とするのではなく、ビジネスや生活がより良く循環するための手段として実装します。
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-slate-800/40 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 group">
              <h3 className="text-blue-400 font-bold mb-2 group-hover:text-blue-300 transition-colors">Role</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                ビジネス実装パートナーとして、要件定義からTypeScriptによる堅牢な開発、デプロイ後の運用まで一気通貫でサポートします。
              </p>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}