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
      station: "逗子・葉山駅 / 逗子駅 徒歩圏内",
      description: "海の空気を感じる落ち着いた空間で、日常の喧騒から離れて深くリラックスしていただけます。"
    },
    {
      weeks: "第2・第4 土曜日",
      place: "由比ガ浜サロン",
      station: "由比ヶ浜駅 徒歩圏内",
      description: "鎌倉の心地よい風が通るロケーション。お出かけや散策のついでにも立ち寄りやすい場所です。"
    }
  ] as SalonLocation[],

  // メニュー例（※料金や時間はご自身のものに調整してください）
  menu: [
    {
      name: "Reframe 全身骨格調整・コンディショニング",
      time: "60分",
      price: "¥8,000",
      detail: "カウンセリングを基に、頭首から足裏まで全体のバランスをチェック。骨盤の歪みや筋肉の強張りをピンポイントで緩め、本来の動きやすさを取り戻す基本コースです。"
    },
    {
      name: "ディープ・リラックス＆疲労回復コース",
      time: "90分",
      price: "¥11,000",
      detail: "特にデスクワークなどによる深刻な眼精疲労、首肩こり、自律神経の乱れを感じている方に。時間をかけて深層の筋肉までじっくりアプローチします。"
    }
  ] as BodycareMenu[]
};