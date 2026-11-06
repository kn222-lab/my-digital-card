
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import {
  ArrowRight,
  Code2,
  Globe2,
  MessageCircle,
  Settings2,
  UserRound,
} from "lucide-react";

const experiences = [
  {
    icon: Code2,
    title: "システム開発・運用",
    description:
      "業務システムの開発や運用・保守など、さまざまな現場での経験があります。",
  },
  {
    icon: Globe2,
    title: "Webサイト制作",
    description:
      "Wixなどを活用し、目的や運用方法に合わせたホームページの制作・リニューアルを行っています。",
  },
  {
    icon: Settings2,
    title: "業務改善・仕組みづくり",
    description:
      "GoogleスプレッドシートやGASなどを活用し、日々の業務を少しでも進めやすくする仕組みを考えます。",
  },
];

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* ページ上部 */}
      <section className="relative overflow-hidden bg-slate-50 px-6 pb-20 pt-20">
        <div
          className="pointer-events-none absolute right-0 top-0 h-80 w-1/2 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(to right, #cbd5e1 1px, transparent 1px), linear-gradient(to bottom, #cbd5e1 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            maskImage:
              "linear-gradient(to left, black, transparent)",
          }}
        />

        <div className="relative mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-4 text-sm font-semibold tracking-widest text-blue-600">
              Reframe / PROFILE
            </p>

            <h1 className="mb-12 text-4xl font-bold tracking-tight text-slate-900">
              プロフィール
              <span className="ml-2 text-blue-600">/</span>
            </h1>

            <div className="grid items-center gap-12 md:grid-cols-[240px_1fr]">
              {/* 写真：後から設定 */}
              <div className="relative h-60 w-60 overflow-hidden rounded-3xl shadow-sm">
                <Image
                  src="/profile.jpg"
                  alt="並木 健太"
                  fill
                  sizes="240px"
                  className="object-cover"
                  priority
                />
              </div>

              <div>
                <p className="mb-3 text-sm font-medium text-blue-600">
                  Web制作・ITサポート
                </p>

                <h2 className="mb-2 text-3xl font-bold text-slate-900">
                  並木 健太
                </h2>

                <p className="mb-7 text-sm text-slate-500">
                  Kenta Namiki
                </p>

                <h3 className="mb-5 text-2xl font-bold leading-relaxed text-slate-900">
                  まず、あなたのことを
                  <br />
                  知るところから。
                </h3>

                <p className="max-w-xl leading-8 text-slate-600">
                  ホームページ制作や業務改善など、
                  ITを活用したサポートを行っています。
                  <br />
                  大切にしているのは、すぐに答えを出すことよりも、
                  まず相手の状況や思いを理解すること。
                  <br />
                  一緒に考えながら、その人に合った方法を
                  見つけていきたいと思っています。
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 仕事への思い */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8 flex items-center gap-3">
              <div className="h-8 w-1 rounded-full bg-blue-600" />
              <h2 className="text-2xl font-bold text-slate-900">
                事業への思い
              </h2>
            </div>

            <div className="max-w-3xl space-y-6 leading-9 text-slate-600">
              <p>
                ITエンジニアとして、業務システムの開発や運用、
                業務改善などに携わってきました。
              </p>

              <p>
                さまざまな仕事を経験する中で、
                次第に「自分だからこそできる関わり方」を
                考えるようになりました。
              </p>

              <p>
                その思いを強くしたのが、鎌倉での出会いです。
                自分の経験や得意なことを活かし、
                主体的に活動する人たち。
                その姿に刺激を受け、
                私自身も身近な人たちの力になりたいと
                考えるようになりました。
              </p>

              <p>
                私が大切にしているのは、
                技術やサービスを提案する前に、
                まず相手のことを知ること。
              </p>

              <p className="font-medium text-slate-900">
                何に困っているのか。
                <br />
                何を大切にしているのか。
              </p>

              <p>
                一緒に考えながら、その人に合った次の一歩を
                見つけていきたいと思っています。
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* これまでの経験 */}
      <section className="bg-slate-50 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12">
            <p className="mb-3 text-sm font-semibold tracking-widest text-blue-600">
              EXPERIENCE
            </p>

            <h2 className="mb-4 text-2xl font-bold text-slate-900">
              これまでの経験
            </h2>

            <p className="max-w-2xl leading-8 text-slate-600">
              これまでのITエンジニアとしての経験を活かし、
              ご相談の内容に応じて、必要な方法を一緒に考えます。
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {experiences.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>

                  <h3 className="mb-4 text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* お問い合わせ */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white px-8 py-14 text-center shadow-sm md:px-16">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50">
            <MessageCircle className="h-7 w-7 text-blue-600" />
          </div>

          <h2 className="mb-5 text-2xl font-bold text-slate-900">
            まずは、お話を聞かせてください。
          </h2>

          <p className="mx-auto mb-8 max-w-xl leading-8 text-slate-600">
            まだ具体的な依頼内容が決まっていなくても大丈夫です。
            今の状況や気になっていることから、
            一緒に整理していきましょう。
          </p>

          <p className="mb-8 text-sm text-slate-500">
            初回ヒアリング・課題整理は無料です。
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition-colors hover:bg-blue-700"
          >
            無料相談・お問い合わせ
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
