// src/constants/bodycare.ts

export type SalonLocation = {
  weeks: string;
  place: string;
  station: string;
  description: string;
};

export type BodycareMenu = {
  name: string;
  time: string;
  price: string;
  detail: string;
};

export const SALON_INFO = {
  title: "Bodycare & Conditioning",
  subtitle: "身体の枠組みを、心地よく整える。",
  message: "平日は画面に向かい、システムの構造を組み立てる。週末は身体に向き合い、その人本来のバランスを取り戻す。\n\nエンジニアとしての論理的な視点と、整体師としての感覚的なアプローチ。私にとってこの2つは切り離されたものではなく、どちらも『枠組みを整え、無理のない前進をつくる』というReframeの思想そのものです。\n\n日常の緊張や癖で少しズレてしまった身体のフレームを、心地よい対話と施術でゆるめ、ニュートラルな状態へと導きます。",
  
  // スケジュールと場所の情報
  schedule: [
    {
      weeks: "第1・第3 土曜日",
      place: "逗子サロン",
      station: "京急「神武寺駅」徒歩5分",
      description: "落ち着いた空間で日常の喧騒から離れて深くリラックス。駐車場あり（1台）。お車でも気軽にお越しいただけます。"
    },
    {
      weeks: "第2・第4 土曜日",
      place: "由比ヶ浜サロン",
      station: "江ノ島電鉄「和田塚駅」徒歩2分（由比ヶ浜公会堂）",
      description: "鎌倉の心地よい風が通るロケーション。駐輪場あり。お出かけや散策のついでにも立ち寄りやすい場所です。"
    }
  ] as SalonLocation[],

  // メニュー（60分 8,000円）
  menu: [
    {
      name: "整体 ＋ セルフケア指導コース",
      time: "60分",
      price: "¥8,000 (税込)",
      detail: "カウンセリングを基に全身のバランスをチェック。骨盤の歪みや筋肉の緊張を緩め、本来の動きやすさを取り戻します。施術後は日常で実践できる無理のないセルフケア方法をお伝えします。"
    }
  ] as BodycareMenu[]
};