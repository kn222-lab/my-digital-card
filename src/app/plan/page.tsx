"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  FileText,
  MessageSquare,
  Monitor,
  Settings2,
  Wrench,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Webサイト制作・リニューアル",
    description:
      "事業の特徴や伝えたいことを整理し、見に来た方に分かりやすく伝わるホームページを制作します。納品後の更新のしやすさも大切にしています。",
    icon: Monitor,
    iconColor: "text-blue-600",
    iconBg: "bg-blue-50",
    examples: [
      "Wixを活用したホームページ制作",
      "既存サイトのリニューアル",
      "お知らせ・ブログなどの更新しやすい仕組みづくり",
      "公開後の更新方法のご案内",
    ],
  },
  {
    title: "業務改善・仕組みづくり",
    description:
      "日々の繰り返し作業や情報共有の方法を見直し、今使っているツールも活かしながら、無理なく続けられる仕組みを考えます。",
    icon: Settings2,
    iconColor: "text-emerald-600",
    iconBg: "bg-emerald-50",
    examples: [
      "Googleスプレッドシート・GASによる作業の自動化",
      "LINE・Notionなどを活用した情報共有",
      "既存ツール同士の連携",
      "業務の流れの整理・簡易ツールの構築",
    ],
  },
];

const questions = [
  "ホームページを作りたいけれど、何から始めればいい？",
  "今あるホームページをもっと使いやすくしたい",
  "毎月の集計や転記など、同じ作業に時間がかかっている",
  "LINEやGoogleのツールを、仕事でもっと活用したい",
];

const steps = [
  {
    number: "01",
    title: "ヒアリング・課題整理",
    description:
      "今の状況やこれまでの経緯、お困りごとを伺います。初回のヒアリング・課題整理は無料です。",
    icon: MessageSquare,
  },
  {
    number: "02",
    title: "ご提案・お見積もり",
    description:
      "必要な対応や進め方を整理し、作業範囲と費用をご案内します。内容をご確認いただいてから進めます。",
    icon: ClipboardList,
  },
  {
    number: "03",
    title: "制作・導入",
    description:
      "ご相談した内容に沿って制作や設定を進めます。必要に応じて途中経過も共有します。",
    icon: Wrench,
  },
  {
    number: "04",
    title: "納品・使い方のご案内",
    description:
      "完成したものをお渡しし、更新方法や使い方をご案内します。追加の改善が必要な場合は別途ご相談いただけます。",
    icon: FileText,
  },
];

export default function PlanPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-50 px-6 py-12 font-sans text-slate-900 md:px-12 md:py-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-[360px] w-[65%] opacity-40 [mask-image:linear-gradient(to_left,black,transparent)]"
        style={{
          backgroundImage:
            "linear-gradient(to_right, rgba(148,163,184,0.18) 1px, transparent 1px), linear-gradient(to_bottom, rgba(148,163,184,0.18) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl space-y-16 md:space-y-20">
        {/* ページ冒頭 */}
        <motion.header
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-5"
        >
          <p className="text-xs font-bold tracking-widest text-blue-600">REframe / SERVICE</p>
          <h1 className="text-3xl font-black tracking-tight md:text-4xl">サービス</h1>
          <h2 className="text-xl font-bold leading-relaxed text-slate-800 md:text-2xl">
            ホームページ制作も、日々の業務の困りごとも。
          </h2>
          <p className="max-w-2xl text-sm leading-8 text-slate-600 md:text-base">
            ホームページの制作や、日々の業務を効率化する仕組みづくりをお手伝いしています。
            具体的な依頼内容が決まっていなくても構いません。
            今の状況やお困りごとを伺いながら、必要な方法を一緒に考えます。
          </p>
        </motion.header>

        {/* 相談例 */}
        <section aria-labelledby="questions-heading" className="space-y-6">
          <div className="space-y-2">
            <h2 id="questions-heading" className="text-xl font-bold md:text-2xl">
              こんなことを相談できます
            </h2>
            <p className="text-sm text-slate-600">
              「何を頼めばいいのか分からない」という段階からでも大丈夫です。
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {questions.map((question) => (
              <div
                key={question}
                className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white/90 p-5 shadow-sm"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" aria-hidden="true" />
                <p className="text-sm leading-7 text-slate-700">{question}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 具体的な支援内容 */}
        <section aria-labelledby="services-heading" className="space-y-6">
          <div className="space-y-2">
            <h2 id="services-heading" className="text-xl font-bold md:text-2xl">
              具体的にできること
            </h2>
            <p className="text-sm text-slate-600">
              目的や状況に合わせて、必要な手段を選びます。
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.title}
                  className="rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-sm md:p-7"
                >
                  <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl ${service.iconBg}`}>
                    <Icon className={`h-6 w-6 ${service.iconColor}`} aria-hidden="true" />
                  </div>
                  <h3 className="mb-3 text-lg font-bold">{service.title}</h3>
                  <p className="mb-5 text-sm leading-7 text-slate-600">{service.description}</p>
                  <ul className="space-y-3 border-t border-slate-100 pt-5">
                    {service.examples.map((example) => (
                      <li key={example} className="flex items-start gap-2 text-sm leading-6 text-slate-700">
                        <CheckCircle2 className={`mt-1 h-4 w-4 shrink-0 ${service.iconColor}`} aria-hidden="true" />
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
          <div className="rounded-xl border border-blue-100 bg-blue-50/70 p-5">
            <h3 className="mb-2 text-sm font-bold text-slate-900">作って終わりにしないために</h3>
            <p className="text-sm leading-7 text-slate-600">
              制作・導入後にご自身で使い続けられることも大切にしています。
              更新方法のご案内や、必要に応じた改善・追加対応についてもご相談いただけます。
            </p>
          </div>
        </section>

        {/* ご相談の流れ */}
        <section aria-labelledby="flow-heading" className="space-y-6">
          <h2 id="flow-heading" className="text-xl font-bold md:text-2xl">
            ご相談から納品まで
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-sm font-bold tracking-widest text-blue-600">{step.number}</span>
                    <Icon className="h-5 w-5 text-slate-400" aria-hidden="true" />
                  </div>
                  <h3 className="mb-2 font-bold text-slate-900">{step.title}</h3>
                  <p className="text-sm leading-7 text-slate-600">{step.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* 費用 */}
        <section aria-labelledby="price-heading" className="space-y-6">
          <div className="space-y-3">
            <h2 id="price-heading" className="text-xl font-bold md:text-2xl">費用について</h2>
            <p className="text-sm leading-7 text-slate-600">
              決まった料金プランではなく、ご相談内容と作業範囲に応じて個別にお見積もりします。
              初回のヒアリング・課題整理は無料です。
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-5">
              <div>
                <p className="mb-1 text-xs font-semibold text-slate-500">ご相談の入口</p>
                <h3 className="font-bold">初回ヒアリング・課題整理</h3>
              </div>
              <span className="text-lg font-bold text-blue-600">無料</span>
            </div>
            <div className="space-y-3 pt-5">
              <p className="text-xs font-semibold text-slate-500">過去の制作実績（参考）</p>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-bold">Wixによるホームページ制作</h3>
                <span className="text-xl font-bold text-slate-900">10万円</span>
              </div>
              <p className="text-sm leading-7 text-slate-600">
                ホームページを制作し、ご自身でお知らせなどを更新できる形に整えた事例です。
              </p>
              <p className="text-xs leading-6 text-slate-500">
                ※ 過去の案件における実績金額であり、最低料金や定額プランではありません。
                実際の費用はご依頼内容によって異なります。
              </p>
            </div>
          </div>
        </section>

        {/* お問い合わせ */}
        <section className="rounded-2xl border border-blue-100 bg-white p-7 text-center shadow-sm md:p-10">
          <h2 className="mb-4 text-xl font-bold md:text-2xl">まずは、お話を聞かせてください。</h2>
          <p className="mx-auto mb-7 max-w-xl text-sm leading-8 text-slate-600">
            相談したい内容がまだまとまっていなくても大丈夫です。
            今の状況を伺いながら、できることを一緒に整理します。
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-blue-700"
          >
            無料相談・お問い合わせ
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </section>
      </div>
    </main>
  );
}
