// 図形の種類を表す型
interface Square {
  type: "square"; // タグ
  size: number;
}

interface Circle {
  type: "circle"; // タグ
  radius: number;
}

type Shape = Square | Circle;

// 図形の面積を計算する関数
function calculateArea(shape: Shape): number {
  switch (shape.type) {
    case "square":
      return shape.size * shape.size;
    case "circle":
      return Math.PI * shape.radius * shape.radius;
  }
}

// 使用例
const mySquare: Shape = { type: "square", size: 5 };
console.log(calculateArea(mySquare)); // 25
