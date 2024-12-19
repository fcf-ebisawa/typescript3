// DOM要素の型アサーション
const input = document.getElementById("username") as HTMLInputElement;
input.value = "新しい値"; // OK: HTMLInputElementとして扱える

// 別の書き方（JSXでは使用不可）
const canvas = <HTMLCanvasElement>document.getElementById("main-canvas");

// 型アサーションの基本
interface User {
  name: string;
  age: number;
}

// オブジェクトを特定の型として扱う
const data = { name: "田中" } as User;
// 注意: ageプロパティが無いが、型アサーションによってエラーを抑制している

// 型アサーションの制限
const str = "hello" as number; // エラー: 文字列を数値として扱うことはできない
