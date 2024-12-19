/**
 * 問題1: 判別可能なユニオン型
 */
export type Notification =
  | { type: "success"; message: string }
  | { type: "error"; errMessage: string }
  | { type: "warning"; warnMessage: string };

export function formatNotification(notification: Notification): string {
  switch (notification.type) {
    case "success":
      return `✅ ${notification.message}`;
    case "error":
      return `❌ ${notification.errMessage}`;
    case "warning":
      return `⚠️ ${notification.warnMessage}`;
  }
}

/**
 * 問題2: インデックス型
 */
export interface ValidationErrors {
  [fieldName: string]: string[];
}

export class FormValidator {
  private errors: ValidationErrors = {};

  addError(fieldName: string, error: string): void {
    if (!this.errors[fieldName]) {
      this.errors[fieldName] = [];
    }
    this.errors[fieldName].push(error);
  }

  getFieldErrors(fieldName: string): string[] {
    return this.errors[fieldName] || [];
  }

  getAllErrors(): ValidationErrors {
    return this.errors;
  }
}

/**
 * 問題3: const アサーション
 */
export const apiEndpoints = {
  users: "/api/users",
  posts: "/api/posts",
  comments: "/api/comments",
} as const;

/**
 * 問題4: クラスとインターフェース
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

export class Cart implements ShoppingCart {
  private items: CartItem[] = [];

  addItem(item: CartItem): void {
    this.items.push(item);
  }

  removeItem(itemId: number): void {
    this.items = this.items.filter((item) => item.id !== itemId);
  }

  getTotal(): number {
    return this.items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }
}
