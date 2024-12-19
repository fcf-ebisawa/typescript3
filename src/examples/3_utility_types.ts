interface User {
  id: number;
  name: string;
  email: string;
}

// 1. Partial - すべてのプロパティを省略可能にする
type PartialUser = Partial<User>;
// { id?: number; name?: string; email?: string; }

// 2. Readonly - すべてのプロパティを読み取り専用にする
type ReadonlyUser = Readonly<User>;
// { readonly id: number; readonly name: string; readonly email: string; }

// 3. Pick - 必要なプロパティだけを選ぶ
type UserBasicInfo = Pick<User, "name" | "email">;
// { name: string; email: string; }

// 実践的な例：ユーザー更新の関数
function updateUser(userId: number, updates: Partial<User>) {
  // 一部のプロパティだけを更新できる
  console.log(`Updating user ${userId} with:`, updates);
}

// 使用例
updateUser(1, { name: "新しい名前" }); // OK
updateUser(1, { name: "新しい名前", email: "new@example.com" }); // OK
