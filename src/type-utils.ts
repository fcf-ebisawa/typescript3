/**
 * 型テスト用のユーティリティ型
 */

// 型が等しいかどうかをチェックする
export type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <
  T
>() => T extends Y ? 1 : 2
  ? true
  : false;

// 型テストのためのユーティリティ型
export type Expect<T extends true> = T;
