// 基本的な例：多言語対応の辞書
interface Translations {
  [key: string]: string;
}

const messages: Translations = {
  hello: "こんにちは",
  goodbye: "さようなら",
  thanks: "ありがとう",
};

// 数値をキーにする例：成績表
interface Scores {
  [studentId: number]: {
    math: number;
    english: number;
  };
}

const classScores: Scores = {
  1: { math: 85, english: 90 },
  2: { math: 95, english: 85 },
};
