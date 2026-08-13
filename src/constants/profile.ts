// src/constants/profile.ts
import { Profile, WorkStatus } from "../types";

export const MY_PROFILE: Profile = {
  name: "並木 健太",
  brandName: "Reframe /",
  title: "Webエンジニア / 業務効率化",
  message: "あなたの『やりたい』を、設計から公開まで一気通貫で形にします。",
  // Wix をスキルの末尾に追加しました
  
  skills: ["TypeScript", "Next.js", "Python", "GAS", "RPA", "Wix"],
  projects: [
    // 【新着】Wixの制作実績を先頭に追加しました
    {
      id: "wix-web-production",
      title: "Wixを活用した「自走できる」ホームページ制作",
      description: "「デザインにはこだわりたいけれど、納品後のブログやイベント情報、お知らせは自分たちで手軽に更新したい」という小さなお店や個人事業主様に向けたWebサイト制作。ノーコードツール『Wix』を選定し、初期デザイン構築から独自ドメイン設定、公開後の操作レクチャーまでをトータルでサポート。運用コストを抑え、クライアント様自身で育てていけるWebサイト運用を実現しました。",
      technology: ["Wix", "Web Design"],
      // link: "https://example.com", // 今後公開できる実際のURLがあればコメントアウトを外して設定してください
    },
    {
      id: "action-tracker",
      title: "会議アクショントラッカー",
      description: "会議の決定事項を確実にアクションへ繋げるタスク管理ツール。",
      technology: ["Python", "Flask"],
      link: "https://meeting-action-tracker.onrender.com/ui/meetings",
    },
    {
      id: "line-notion",
      title: "LINE × Notion 業務連携",
      description: "現場の入力をLINEで完結させ、Notionへ自動集約するシステム。",
      technology: ["GAS", "LINE API", "Notion API"],
      link: "https://script.google.com/macros/s/AKfycbzItXiqH4MY9CPmEbF1tTOD_zOPLKFoWB5EKtU0PMHL62tQJGN0a74CFBNUGDI5rD9V/exec",
    },
  ],
  concept: [
    "エンジニアとして働いたあと、一度その道を離れ、リラクゼーション・整体の世界に身を置きました。",
    "身体や人の状態を見る経験を通して学んだのは、「物事は立ち位置や枠組み次第で、見え方が大きく変わる」ということ。",
    "再びエンジニアの領域に戻ってきた今、以前と同じ場所に立っていても、見ている景色はまったく違います。",
    "Reframe（リフレーム）は、壊すことでも、やり直すことでもありません。一度立ち止まり、枠組みを組み替えることで、「無理のない前進」をつくるための考え方です。"
  ],
};