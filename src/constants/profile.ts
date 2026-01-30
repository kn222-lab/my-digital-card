// src/constants/profile.ts
import { Profile, WorkStatus } from "../types";

export const MY_PROFILE: Profile = {
  name: "並木　健太", // ここを書き換えてください
  brandName: "Reframe /",
  title: "Webエンジニア / ビジネス実装パートナー",
  message: "あなたの『やりたい』を、設計から公開まで一気通貫で形にします。",
  skills: ["TypeScript", "Next.js", "Python", "GAS", "RPA"],
  projects: [
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
    // 事例3も同様に追加...
  ],
  concept: [
    "エンジニアとして働いたあと、一度その道を離れ、リラクゼーション・整体の世界に身を置きました。",
    "身体や人の状態を見る経験を通して学んだのは、「物事は立ち位置や枠組み次第で、見え方が大きく変わる」ということ。",
    "再びエンジニアの領域に戻ってきた今、以前と同じ場所に立っていても、見ている景色はまったく違います。",
    "Reframe（リフレーム）は、壊すことでも、やり直すことでもありません。一度立ち止まり、枠組みを組み替えることで、「無理のない前進」をつくるための考え方です。"
  ],
};