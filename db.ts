export const DB: { category: string; name: string }[] = [
  { category: "アサルト", name: "バンガロール" },
  { category: "アサルト", name: "ヒューズ" },
  { category: "アサルト", name: "アッシュ" },
  { category: "アサルト", name: "マッドマギー" },
  { category: "アサルト", name: "バリスティック" },
  { category: "スカーミッシャー", name: "パスファインダー" },
  { category: "スカーミッシャー", name: "レイス" },
  { category: "スカーミッシャー", name: "オクタン" },
  { category: "スカーミッシャー", name: "レヴナント" },
  { category: "スカーミッシャー", name: "ホライゾン" },
  { category: "スカーミッシャー", name: "ヴァルキリー" },
  { category: "リコン", name: "ブラッドハウンド" },
  { category: "リコン", name: "クリプト" },
  { category: "リコン", name: "シア" },
  { category: "リコン", name: "ヴァンテージ" },
  { category: "サポート", name: "ジブラルタル" },
  { category: "サポート", name: "ライフライン" },
  { category: "サポート", name: "ミラージュ" },
  { category: "サポート", name: "ローバ" },
  { category: "サポート", name: "ニューキャッスル" },
  { category: "サポート", name: "コンジット" },
  { category: "コントローラー", name: "カタリスト" },
  { category: "コントローラー", name: "コースティック" },
  { category: "コントローラー", name: "ランパート" },
  { category: "コントローラー", name: "ワットソン" },
];

// 3つのランダムなインデックスを生成
export const GetRandom = (count: number) => {
  const indexes: number[] = [];
  while (indexes.length < count) {
    const randomIndex: number = Math.floor(Math.random() * DB.length);
    if (!indexes.includes(randomIndex)) {
      indexes.push(randomIndex);
    }
  }
  return indexes.map((i) => DB[i]);
};
