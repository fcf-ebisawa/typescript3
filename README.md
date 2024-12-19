# TypeScript Advanced Types Practice

TypeScript の高度な型システムを学ぶための練習問題集です。

## 学習目的

このプロジェクトでは、以下の TypeScript の高度な型機能について学びます：

1. 判別可能なユニオン型（Discriminated Unions）

   - 共通のプロパティを持つ複数の型を安全に扱う方法
   - switch 文による型の絞り込み
   - 型安全な条件分岐

2. インデックス型（Index Types）

   - オブジェクトのプロパティを動的に扱う方法
   - 辞書のような型の定義
   - 型安全なプロパティアクセス

3. const アサーション

   - 読み取り専用の配列やオブジェクトの作成
   - リテラル型の生成
   - 型の推論の制御

4. クラスとインターフェース
   - インターフェースの定義と実装
   - クラスでのインターフェース実装
   - アクセス修飾子の使用

## 問題の構成

1. 判別可能なユニオン型

   - 通知メッセージの種類に応じたフォーマット
   - success、error、warning の 3 種類の通知に対応
   - 型安全な条件分岐の実践

2. インデックス型

   - フォームのバリデーションエラー管理
   - 動的なフィールド名でのエラー管理
   - エラーメッセージの追加と取得

3. const アサーション

   - API エンドポイントの定義
   - 読み取り専用オブジェクトの作成
   - リテラル型の活用

4. クラスとインターフェース
   - ショッピングカートの実装
   - 商品の追加と削除
   - 合計金額の計算

## 使い方

1. まず、`src/problem.ts`の TODO コメントに従って実装を行ってください
2. テストを実行して、実装が正しいか確認します：
   ```bash
   npm test
   ```
3. すべてのテストが通れば完了です
4. 解答例は`src/answer.ts`を参照してください

## テストの実行

```bash
# テストの実行
npm test

# テストをウォッチモードで実行
npm run test:watch

# テストUIを使用して実行
npm run test:ui
```

## ヒント

- 判別可能なユニオン型では、`type`プロパティを使って型を絞り込みます
- インデックス型では、`[key: string]`のような記法を使用します
- const アサーションは`as const`を使用します
- インターフェースの実装では、すべてのメソッドを正しく実装する必要があります

## 参考資料

- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [TypeScript Deep Dive - 判別可能なユニオン型](https://basarat.gitbook.io/typescript/type-system/discriminated-unions)
- [TypeScript Deep Dive - インデックス型](https://basarat.gitbook.io/typescript/type-system/index-signatures)
- [TypeScript Deep Dive - const アサーション](https://basarat.gitbook.io/typescript/type-system/literal-types#const-assertions)
