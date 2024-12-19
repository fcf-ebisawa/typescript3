import { expect, describe, it, beforeEach } from "vitest";
import {
  Notification,
  formatNotification,
  FormValidator,
  apiEndpoints,
  Cart,
  CartItem,
} from "../src/problem";

describe("TypeScript Advanced Features", () => {
  describe("1. 判別可能なユニオン型", () => {
    it("成功メッセージを正しくフォーマットできる", () => {
      const notification: Notification = {
        type: "success",
        message: "保存しました",
      };
      expect(formatNotification(notification)).toBe("✅ 保存しました");
    });

    it("エラーメッセージを正しくフォーマットできる", () => {
      const notification: Notification = {
        type: "error",
        message: "エラーが発生しました",
      };
      expect(formatNotification(notification)).toBe("❌ エラーが発生しました");
    });

    it("警告メッセージを正しくフォーマットできる", () => {
      const notification: Notification = {
        type: "warning",
        message: "注意してください",
      };
      expect(formatNotification(notification)).toBe("⚠️ 注意してください");
    });
  });

  describe("2. インデックス型", () => {
    let validator: FormValidator;

    beforeEach(() => {
      validator = new FormValidator();
    });

    it("フィールドにエラーを追加できる", () => {
      validator.addError("email", "メールアドレスの形式が不正です");
      expect(validator.getFieldErrors("email")).toEqual([
        "メールアドレスの形式が不正です",
      ]);
    });

    it("同じフィールドに複数のエラーを追加できる", () => {
      validator.addError("password", "パスワードは8文字以上必要です");
      validator.addError("password", "パスワードは数字を含む必要があります");
      expect(validator.getFieldErrors("password")).toEqual([
        "パスワードは8文字以上必要です",
        "パスワードは数字を含む必要があります",
      ]);
    });

    it("すべてのエラーを取得できる", () => {
      validator.addError("email", "メールアドレスは必須です");
      validator.addError("password", "パスワードは必須です");
      expect(validator.getAllErrors()).toEqual({
        email: ["メールアドレスは必須です"],
        password: ["パスワードは必須です"],
      });
    });
  });

  describe("3. const アサーション", () => {
    it("apiEndpointsは読み取り専用である", () => {
      // @ts-expect-error - 読み取り専用なので代入できない
      apiEndpoints.users = "/new/api/users";
    });

    it("apiEndpointsの値はリテラル型である", () => {
      // 型チェック
      type Expected = {
        readonly users: "/api/users";
        readonly posts: "/api/posts";
        readonly comments: "/api/comments";
      };
      type Actual = typeof apiEndpoints;
      type Assert = Actual extends Expected ? true : false;
      const assert: Assert = true;
      expect(assert).toBe(true);
    });
  });

  describe("4. クラスとインターフェース", () => {
    let cart: Cart;

    beforeEach(() => {
      cart = new Cart();
    });

    it("商品をカートに追加できる", () => {
      const item: CartItem = {
        id: 1,
        name: "商品A",
        price: 1000,
        quantity: 2,
      };
      cart.addItem(item);
      expect(cart.getTotal()).toBe(2000);
    });

    it("商品をカートから削除できる", () => {
      const item1: CartItem = {
        id: 1,
        name: "商品A",
        price: 1000,
        quantity: 2,
      };
      const item2: CartItem = {
        id: 2,
        name: "商品B",
        price: 500,
        quantity: 1,
      };
      cart.addItem(item1);
      cart.addItem(item2);
      cart.removeItem(1);
      expect(cart.getTotal()).toBe(500);
    });
  });
});
