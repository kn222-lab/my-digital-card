"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function ContactPage() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    
    const formData = new FormData(e.currentTarget);
    const data = {
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
    };

    try{
        const response = await fetch("https://script.google.com/macros/s/AKfycbwM_JxHormn2xXyCUyWe9u1ckshjfrefBaHSzhWtleeC9qWj-UNWSKcbl44SzCeUTvV/exec", {
            method: "POST",

            headers:{
                "Content-Type": "text/plain",
            },
            body: JSON.stringify(data),
        });

        if(response.ok){
            setStatus("success");
        } else{
            throw new Error("送信失敗");
        }
    } catch(error){
        console.error(error);
        alert("送信に失敗しました。時間をおいて再度お試しください。");
        setStatus("");
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 px-6 py-20">
      <div className="max-w-2xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Contact <span className="text-blue-600">/</span></h1>
          <p className="text-slate-400">ご相談、お見積もりの依頼などお気軽にお問い合わせください。</p>
        </motion.div>

        {status === "success" ? (
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="p-10 rounded-3xl bg-blue-600/10 border border-blue-500/20 text-center">
            <h2 className="text-2xl font-bold mb-4">送信完了</h2>
            <p className="text-slate-300">メッセージを承りました。数日中に並木よりご連絡いたします。</p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2 text-slate-400">お名前</label>
              <input required
                     name="name" 
                     type="text" 
                     className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors" 
                     placeholder="田中 太郎" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-slate-400">メールアドレス</label>
              <input required 
                     name="email"
                     type="email" 
                     className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors" 
                     placeholder="name@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-slate-400">お問い合わせ内容</label>
              <textarea required 
                        name="message"
                        rows={5} 
                        className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors" 
                        placeholder="具体的なお悩みや、ご希望のプランをご記入ください"></textarea>
            </div>
            
            <button
              disabled={status === "sending"}
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2"
            >
              {status === "sending" ? "送信中..." : <><Send className="w-4 h-4" /> 送信する</>}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}