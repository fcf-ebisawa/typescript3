class Animal {
  // publicは、どこからでもアクセスできる（publicは省略可能）
  public name: string;
  // privateは、クラスの外からアクセスできない
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  // メソッドの定義（デフォルトでpublic）
  introduce(): string {
    return `私は${this.name}です。${this.age}歳です。`;
  }
}

const dog = new Animal("ポチ", 3);
console.log(dog.name); // OK: "ポチ"
console.log(dog.age); // エラー: privateプロパティにアクセスできない
