/**
 * 問題1: 判別可能なユニオン型
 *
 * 以下のNotificationユニオン型を使って、通知メッセージを生成する関数を実装してください。
 * - type: "success" → "✅ {message}"
 * - type: "error" → "❌ {message}"
 * - type: "warning" → "⚠️ {message}"
 */
export type Notification =
  | { type: "success"; message: string }
  | { type: "error"; message: string }
  | { type: "warning"; message: string };

export function formatNotification(notification: Notification): string {
  // TODO: 通知の種類に応じて適切なメッセージを生成してください
  return "";
}

/**
 * 問題2: インデックス型
 *
 * 以下のValidationErrorsの型を使って、フォームの検証エラーを管理する
 * クラスを実装してください。
 */
export interface ValidationErrors {
  [fieldName: string]: string[];
}

export class FormValidator {
  private errors: ValidationErrors = {};

  // TODO: 特定のフィールドにエラーを追加するメソッドを実装してください
  addError(fieldName: string, error: string): void {}

  // TODO: 特定のフィールドのエラーを取得するメソッドを実装してください
  getFieldErrors(fieldName: string): string[] {
    return [];
  }

  // TODO: すべてのエラーを取得するメソッドを実装してください
  getAllErrors(): ValidationErrors {
    return {};
  }
}

/**
 * 問題3: const アサーション
 *
 * 以下のAPIエンドポイントの設定を、const アサーションを使って
 * 読み取り専用かつリテラル型として定義してください。
 */
export const apiEndpoints = {
  // TODO: const アサーションを使って、読み取り専用のオブジェクトを定義してください
  users: "/api/users",
  posts: "/api/posts",
  comments: "/api/comments",
};

/**
 * 問題4: クラスとインターフェース
 *
 * 以下のShoppingCartインターフェースを実装したクラスを作成してください。
 * - addItem(): カートに商品を追加
 * - removeItem(): カートから商品を削除
 * - getTotal(): カート内の商品の合計金額を計算
 */
export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export interface ShoppingCart {
  addItem(item: CartItem): void;
  removeItem(itemId: number): void;
  getTotal(): number;
}

// TODO: ShoppingCartインターフェースを実装したクラスを作成してください
export class Cart implements ShoppingCart {}
