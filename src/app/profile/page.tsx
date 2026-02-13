"use client";
import { motion } from "framer-motion";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 px-6 py-20">
      <div className="max-w-3xl mx-auto">
        {/* タイトルセクション */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">
            Profile <span className="text-blue-600">/</span>
          </h1>
          <p className="text-blue-400 text-lg">並木 健太 | Namiki Kenta</p>
        </motion.div>

        {/* メインコンテンツ */}
        <div className="space-y-16">
          <section>
            <h2 className="text-xl font-bold mb-6 border-l-4 border-blue-600 pl-4">Background</h2>
            <div className="text-slate-300 leading-relaxed space-y-4">
              <p>
                エンジニアとしてキャリアをスタートした後、一度その道を離れ、リラクゼーション・整体の世界に身を置きました。
              </p>
              <p>
                身体や人の状態を深く見る経験を通じて学んだのは、<span className="text-white font-medium">「物事は立ち位置や枠組み（フレーム）次第で、見え方が大きく変わる」</span>ということです。
              </p>
              <p>
                再びエンジニアの領域に戻ってきた今、以前と同じ場所に立っていても、見えている景色はまったく違います。この多角的な視点こそが、私の最大の強みです。
              </p>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 rounded-2xl bg-slate-800/40 border border-slate-700/50 hover:border-blue-500/50 transition-colors">
              <h3 className="text-blue-400 font-bold mb-2">Vision</h3>
              <p className="text-sm text-slate-400">
                「無理のない前進」をつくる。技術を目的とするのではなく、ビジネスや生活がより良く循環するための手段として実装します。
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-slate-800/40 border border-slate-700/50 hover:border-blue-500/50 transition-colors">
              <h3 className="text-blue-400 font-bold mb-2">Role</h3>
              <p className="text-sm text-slate-400">
                ビジネス実装パートナーとして、要件定義からTypeScriptによる堅牢な開発、デプロイ後の運用まで一気通貫でサポートします。
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}