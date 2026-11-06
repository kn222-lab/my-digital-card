"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  BookOpenText,
  CheckSquare2,
  Globe2,
  MessageCircle,
} from "lucide-react";

type Work = {
  id: string;
  category: string;
  title: string;
  description: string;
  details: string[];
  technologies: string[];
  detailHref?: string;
};

// 公開できる内容だけを掲載。事業者名や画像は掲載許可後に追加できます。
const works: Work[] = [
  {
    id: "web-production",
    category: "Webサイト制作",
    title: "ホームページ制作",
    description:
      "伝えたい情報を整理し、サイト構成からデザイン、公開まで対応。更新しやすさも考慮して制作しました。",
    details: ["サイト構成・デザイン", "CMS設定", "公開対応"],
    technologies: ["Wix", "CMS"],
    // 許可後に詳細ページを作成したら、例: detailHref: "/works/web-production"
  },
  {
    id: "task-management",
    category: "業務改善・ツール開発",
    title: "タスク管理ツール開発",
    description:
      "タスクの登録や一覧表示、担当者ごとの確認など、日々の進行状況を共有しやすくする仕組みを構築しました。",
    details: ["タスク登録・一覧表示", "担当者による絞り込み", "情報の一元管理"],
    technologies: ["Google Apps Script", "Google スプレッドシート"],
  },
  {
    id: "knowledge-management",
    category: "業務改善・ツール開発",
    title: "ナレッジ管理ツール開発",
    description:
      "業務に関する資料や動画などを整理し、必要な情報にアクセスしやすくするWebツールを構築しました。",
    details: ["情報の一覧表示", "カテゴリ・タブによる整理", "動画コンテンツの表示"],
    technologies: ["Google Apps Script", "Google スプレッドシート"],
  },
];

// 掲載許可を得た取引先のみ追加。空の間はセクションを表示しません。
const clients: string[] = [];

const icons = [Globe2, CheckSquare2, BookOpenText];

export default function WorksPage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      <section className="relative overflow-hidden bg-slate-50 px-6 pb-16 pt-20 md:pb-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 h-72 w-1/2 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(to right, #cbd5e1 1px, transparent 1px), linear-gradient(to bottom, #cbd5e1 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            maskImage: "linear-gradient(to left, black, transparent)",
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative mx-auto max-w-6xl"
        >
          <p className="mb-4 text-sm font-semibold tracking-widest text-blue-600">
            Reframe / WORKS
          </p>
          <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900">
            実績紹介<span className="ml-2 text-blue-600">/</span>
          </h1>
          <p className="max-w-2xl text-base leading-8 text-slate-600">
            これまでに手がけたWebサイト制作や、業務を支えるツール開発をご紹介します。
          </p>
        </motion.div>
      </section>

      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10">
            <p className="mb-3 text-sm font-semibold tracking-widest text-blue-600">
              PROJECTS
            </p>
            <h2 className="text-2xl font-bold text-slate-900">制作・開発実績</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {works.map((work, index) => {
              const Icon = icons[index] ?? Globe2;
              return (
                <motion.article
                  key={work.id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
                >
                  <div className="flex h-40 items-center justify-center bg-slate-50">
                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-sm">
                      <Icon className="h-9 w-9 text-blue-600" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <p className="mb-3 text-xs font-medium text-blue-600">
                      {work.category}
                    </p>
                    <h3 className="mb-4 text-xl font-bold text-slate-900">
                      {work.title}
                    </h3>
                    <p className="mb-6 text-sm leading-7 text-slate-600">
                      {work.description}
                    </p>
                    <ul className="mb-6 space-y-2 text-sm text-slate-600">
                      {work.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-2">
                          <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto flex flex-wrap gap-2 border-t border-slate-100 pt-5">
                      {work.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-md bg-slate-100 px-2.5 py-1 text-xs text-slate-600"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                    {work.detailHref && (
                      <Link
                        href={work.detailHref}
                        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700"
                      >
                        詳しく見る <ArrowRight className="h-4 w-4" />
                      </Link>
                    )}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {clients.length > 0 && (
        <section className="bg-slate-50 px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <p className="mb-3 text-sm font-semibold tracking-widest text-blue-600">
              CLIENTS
            </p>
            <h2 className="mb-8 text-2xl font-bold text-slate-900">取引実績</h2>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {clients.map((client) => (
                <div
                  key={client}
                  className="rounded-xl border border-slate-200 bg-white px-5 py-6 text-center text-sm font-medium text-slate-700"
                >
                  {client}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-slate-50 px-8 py-14 text-center md:px-14">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">
            <MessageCircle className="h-7 w-7 text-blue-600" aria-hidden="true" />
          </div>
          <h2 className="mb-5 text-2xl font-bold text-slate-900">
            まずは、お話を聞かせてください。
          </h2>
          <p className="mx-auto mb-5 max-w-xl text-sm leading-8 text-slate-600">
            ホームページのことも、日々の業務のことも。
            何から始めればよいか分からない段階から、一緒に考えます。
          </p>
          <p className="mb-8 text-sm text-slate-500">
            初回ヒアリング・課題整理は無料です。
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition-colors hover:bg-blue-700"
          >
            無料相談・お問い合わせ <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
