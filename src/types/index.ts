// src/types/index.ts

export type Project = {
  id: string;
  title: string;
  description: string;
  technology: string[];
  link?: string; // 公開できるもの用（オプション）
};

export type Profile = {
  name: string;
  brandName: string;
  title: string;
  message: string;
  skills: string[];
  projects: Project[];
  concept: string[];
};

// ステータスを「相談可能」「開発中」「休暇中」の3種類に限定する（Union Types）
export type WorkStatus = "Available" | "Busy" | "Away";

// 利用可能なアクセントカラーを型で制限
export type AccentColor = "text-blue-600" | "text-emerald-600" | "text-violet-600" | "text-orange-600";