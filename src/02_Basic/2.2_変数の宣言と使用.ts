//2.2.1 変数宣言の構文

import exp from "constants";

// const 変数名 = 式;
export const sentence1 = () => {
  const greeting = "Hello, ";
  const target = "world!";
  console.log(greeting + target);
};
export const sentence2 = () => {
  // + でつなげてもOK
  const greeting = "Hello, ";
  const target = "world!";
  const text = greeting + target;
  console.log(text);
};
// ,でつなげてもOK（近年は人気なし）
export const sentence3 = () => {
  const greeting = "Hello,",
    target = "world!",
    text = greeting + target;
  console.log(text);
};

//2.2.2 識別子
export const sentence6 = () => {
  const あいう = 123;
  const 技術評論社 = あいう + 876;
  console.log(技術評論社); //999と表示される
};
export const sentence7 = () => {
  // 構文エラー（↑は識別子に利用できない文字）
  // const ↑ = 0;
  // 構文エラー（空白は識別子に利用でいない）
  // const foo bar = 123;
};

//2.2.3 変数に型注釈を与える
// const 変数: 型 = 式;
export const sentence8 = () => {
  const greeting: string = "Hello,";
  const target: string = "world";
  console.log(greeting + target);
};

export const sentence9 = () => {
  const greeting: string = "Hello,";
  //   const target: string = 123; //コンパイルエラーになる
  //   console.log(greeting + target);
};

//2.2.4 letによる変数宣言と変数への再代入
export const sentence10 = () => {
  let greeting = "Hello,";
  let target = "world";
  console.log(greeting + target);
};

//letは再代入が可能
export const sentence11 = () => {
  let greeting = "Hello,";
  greeting = greeting + "world";
  //Hello, worldが表示される
  console.log(greeting);
};

//constは再代入不可
export const sentence12 = () => {
  const greeting = "Hello,";
  // greeting = greeting + "world";//エラーになる
  //Hello, worldが表示される
  console.log(greeting);
};

// letは宣言時に値を代入しなくてもよい
export const sentence13 = () => {
  let greeting, target;
  greeting = "Hello,";
  target = "world";
  console.log(greeting + target);
};

//letも型注釈は可能
export const sentence14 = () => {
  let greeting: string, target: string;
  greeting = "Hello,";
  target = "world";
  console.log(greeting + target);
};
//値の代入前に宣言するとエラーになる
export const sentence15 = () => {
    let greeting: string, target: string;
    greeting = "Hello,";
    // console.log(greeting + target); //コンパイルエラー
  };