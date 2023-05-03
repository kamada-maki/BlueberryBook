// 1.2.1 TypeScriptコンパイラの役割(1)型チェック
function repeatHello(count: number): string {
  return "hello".repeat(count);
}
//↓ここでエラーが発生
console.log(repeatHello("WOW"));
//静的＝プログラムを実行しなくても行えるチェック

//うまくいかない例
function double(value: number) {
  console.log(value * 2);
}
function double(value: string) {
  console.log(value.repeat(2));
}
double(123); //1つ目のdoubleを呼び出すとは限らない
double("hello");

//数値でも文字列でも呼び出せるようにするには↓
function double(value: string | number) {
  if (typeof value === "number") {
    console.log(value * 2);
  } else {
    console.log(value.repeat(2));
  }
}
double(123); //1つ目のdoubleを呼び出すとは限らない
double("hello");

// 1.2.2 TypeScriptコンパイラの役割(2) トランスパイル
//トランスパイル＝TypeScriptのソースコードをJavaScriptに変換すること（コンパイルと同義）
//トランスパイル前
function repeatHello(count: number): string {
  return "hello".repeat(count);
}
//トランスパイル後 ※シンプルに型を取り除くだけ
function repeatHello(count) {
  return "hello".repeat(count);
}


// 新しい構文（ES2015のクラス構文）を古い構文（ES5）に変換する例
//変換前
class Human{
    greet(){
        console.log("hello")
    }
}
//変換後
var Human = /*: @class */ (function (){
    funcion Human (){

    }
    Human.prototype.greet = function(){
        console.log("Hello")
    };
    return Human;
}());