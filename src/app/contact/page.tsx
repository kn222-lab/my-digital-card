"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Send } from "lucide-react";
import Link from "next/link";

type SubmitStatus = "idle" | "sending" | "success" | "error";

const GAS_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbwM_JxHormn2xXyCUyWe9u1ckshjfrefBaHSzhWtleeC9qWj-UNWSKcbl44SzCeUTvV/exec";

const fieldClass =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-100";

export default function ContactPage() {
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "sending") return;

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    setStatus("sending");
    try {
      const response = await fetch(GAS_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      setStatus("success");
    } catch (error) {
      console.error("お問い合わせの送信に失敗しました", error);
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-12 font-sans text-slate-900 md:py-16">
      <div className="mx-auto max-w-2xl">
        <motion.header
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 space-y-4"
        >
          <p className="text-xs font-bold tracking-wider text-blue-600">お問い合わせ</p>
          <h1 className="text-3xl font-black leading-snug tracking-tight md:text-4xl">
            まずは、お話を聞かせてください。
          </h1>
          <p className="text-sm leading-8 text-slate-600 md:text-base">
            ホームページ制作や日々の業務のことなど、
            「何から始めればいいか分からない」という段階でも構いません。
            今の状況やお困りごとを伺いながら、次の一歩を一緒に考えます。
          </p>
        </motion.header>

        <div className="mb-8 rounded-2xl border border-blue-100 bg-blue-50/70 px-5 py-4">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" aria-hidden="true" />
            <div className="space-y-1">
              <p className="text-sm font-bold text-slate-800">初回ヒアリング・課題整理は無料です</p>
              <p className="text-xs leading-6 text-slate-600">
                具体的な調査・制作・導入支援が必要な場合は、対応内容とお見積もりをご案内します。
              </p>
            </div>
          </div>
        </div>

        {status === "success" ? (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            role="status"
            className="rounded-2xl border border-emerald-100 bg-white px-6 py-12 text-center shadow-sm"
          >
            <CheckCircle2 className="mx-auto mb-4 h-10 w-10 text-emerald-600" aria-hidden="true" />
            <h2 className="mb-3 text-xl font-bold">送信を受け付けました</h2>
            <p className="text-sm leading-7 text-slate-600">
              お問い合わせありがとうございます。内容を確認のうえ、ご連絡いたします。
            </p>
            <Link href="/" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700">
              ホームに戻る <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            onSubmit={handleSubmit}
            className="space-y-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"
          >
            <div className="space-y-1">
              <h2 className="text-lg font-bold">お問い合わせフォーム</h2>
              <p className="text-xs text-slate-500">すべての項目をご入力ください。</p>
            </div>

            <div>
              <label htmlFor="contact-name" className="mb-2 block text-sm font-semibold text-slate-700">
                お名前 <span className="ml-1 text-xs text-blue-600">必須</span>
              </label>
              <input id="contact-name" name="name" type="text" autoComplete="name" required maxLength={100} className={fieldClass} placeholder="田中 太郎" />
            </div>

            <div>
              <label htmlFor="contact-email" className="mb-2 block text-sm font-semibold text-slate-700">
                メールアドレス <span className="ml-1 text-xs text-blue-600">必須</span>
              </label>
              <input id="contact-email" name="email" type="email" autoComplete="email" required maxLength={254} className={fieldClass} placeholder="name@example.com" />
            </div>

            <div>
              <label htmlFor="contact-message" className="mb-2 block text-sm font-semibold text-slate-700">
                お問い合わせ内容 <span className="ml-1 text-xs text-blue-600">必須</span>
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={6}
                required
                maxLength={5000}
                className={`${fieldClass} resize-y`}
                placeholder="今困っていることや、相談してみたいことを自由にお書きください。内容がまとまっていなくても大丈夫です。"
              />
              <p className="mt-2 text-xs text-slate-500">ご希望のプランや予算が決まっていなくても構いません。</p>
            </div>

            {status === "error" && (
              <p role="alert" className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                送信できませんでした。通信環境をご確認のうえ、時間をおいて再度お試しください。
              </p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "sending" ? (
                "送信中..."
              ) : (
                <><Send className="h-4 w-4" aria-hidden="true" /> お問い合わせを送信する</>
              )}
            </button>
            <p className="text-center text-xs leading-6 text-slate-500">
              送信いただいた情報は、お問い合わせへの対応のために使用します。
            </p>
          </motion.form>
        )}
      </div>
    </div>
  );
}
