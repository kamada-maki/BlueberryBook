//1.1 JavaScriptに対する静的型付け
const str: string = "foobar";

// 1.1.3 静的型付けのメリット(1) 型安全性
function repeatHello(count: number): string {
  return "Hello".repeat(count);
}
//↓ここで型エラーが発生
console.log(repeatHello);
//↓型エラーが消える
console.log(10);
