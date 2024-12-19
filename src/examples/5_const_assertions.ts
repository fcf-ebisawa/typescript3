// 通常の配列
const colors = ["red", "blue", "green"];
colors.push("yellow"); // OK
type Colors = typeof colors; // string[]

// constアサーション
const colors2 = ["red", "blue", "green"] as const;
colors2.push("yellow"); // エラー：読み取り専用の配列
type Colors2 = typeof colors2; // readonly ["red", "blue", "green"]

// オブジェクトでの使用例
const config = {
  apiUrl: "https://api.example.com",
  timeout: 3000,
  retryCount: 3,
} as const;

// すべての値が読み取り専用になる
config.timeout = 5000; // エラー
