// インターフェースの定義
interface Pet {
  name: string;
  age: number;
  makeSound(): string;
  introduce(): string;
}

// インターフェースの実装
class Dog implements Pet {
  // コンストラクタの引数で直接プロパティを宣言と初期化
  constructor(public name: string, public age: number, private breed: string) {}

  makeSound(): string {
    return "ワンワン！";
  }

  introduce(): string {
    return `私は${this.breed}の${this.name}です。${this.age}歳です。`;
  }
}

// 通常の書き方との比較
class Cat implements Pet {
  // プロパティを明示的に宣言
  public name: string;
  public age: number;

  constructor(name: string, age: number) {
    // コンストラクタで初期化
    this.name = name;
    this.age = age;
  }

  makeSound(): string {
    return "にゃー！";
  }

  introduce(): string {
    return `私は${this.name}です。${this.age}歳です。`;
  }
}

// 使用例
const pets: Pet[] = [new Dog("ポチ", 3, "柴犬"), new Cat("タマ", 2)];

pets.forEach((pet) => {
  console.log(pet.introduce());
  console.log(pet.makeSound());
});
