// 2.5.1 条件分岐（1）if文の基本
export const sentence1 = () => {
  let userName = "";
  if (userName === "") userName = "名無し";
};

// 2.5.2 ブロック
export const sentence2 = () => {
  let userName = "";
  if (userName === "") {
    console.log("名前を入力してください");
    userName = "名無し";
  }
};

// 2.5.3 条件分岐(2) elseを使う
export const sentence3 = () => {
  let userName = "";
  if (userName !== "") {
    console.log("名前ちゃんとあってえらい！");
  } else {
    console.log("名前を入力してください");
    userName = "名無し";
  }
  const num: number = 123;
  if (num < 0) {
    console.log("numは負の数です");
  } else if (num === 0) {
    console.log("numは0です");
  } else {
    console.log("numは正の数です");
  }
};
export const sentence4 = () => {
  const num: number = 123;
  if (num < 0) {
    console.log("numは負の数です");
  } else {
    // else ifと同じ（ネストしちゃう）
    if (num === 0) {
      console.log("numは0です");
    } else {
      console.log("numは正の数です");
    }
  }
};

// 2.5.4 switch文
import { createInterface } from "readline";
export const sentence5 = () => {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question("コマンドを入力してください", (name) => {
    switch (name) {
      case "greet":
        console.log("こんにちは");
        break;
      case "cat":
        console.log("あなたは猫派ですか？");
        console.log("私は犬派です");
        break;
      default:
        console.log(`コマンド「${name}」を認識できませんでした`);
    }
    rl.close();
  });
};

// 2.5.5 while文によるループ
export const sentence6 = () => {
  let sum = 0;
  let i = 1;

  while (i <= 100) {
    sum += i;
    i++;
  }
  console.log(sum); //5050と表示される

  while (true) {
    //無限ループになる
    if (i > 100) {
      break;
    }
    sum += i;
    i++;
  }
};

export const sentence7 = () => {
  let i = 1;

  while (i <= 100) {
    i++;
    if (i % 2 === 1) {
      continue;
    }
    console.log(i);
  }
};

// 2.5.6 for文によるループ
export const sentence8 = () => {
  let sum = 0;
  for (let i: number = 1; i <= 1000; i++) {
    sum += i;
  }
  console.log(sum);
};
export const sentence9 = () => {
  for (let i = 1; i <= 1000; i++) {
    if (i % 2 === 1) {
      continue;
    }
    console.log(i); //2,4,6,....100
  }
};
