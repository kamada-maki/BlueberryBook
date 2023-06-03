import { readFile } from "fs";
import { createInterface } from "readline";

//8.2.1 コールバック関数とは
export const sentence1 = () => {
  console.log("1.読み込みを開始します。");
  readFile("filename.txt", (data) => {
    console.log("3.読み込みました。");
  });
  console.log("2.読み込みを開始しました");

  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question("文字列を入力してください", (line) => {
    console.log(`${line}が入力されました`);
    rl.close();
  });
};
//8.2.2 タイマーの例
export const sentence2 = () => {
  setTimeout(() => {
    console.log("タイマーが呼び出されました");
  }, 3000);
  console.log("タイマーを設定しました");
};

// 8.2.3 fsモジュールによるファイル操作の例
export const sentence3 = () => {
  const startTime = performance.now();
  readFile("foo.txt", "utf8", (err, result) => {
    console.log(result);
    const endTime = performance.now();
    console.log(`${endTime - startTime}ミリ秒かかりました`);
  });
  console.log("読み込み開始");
};

// 8.2.4 同期処理と非同期処理の順序
export const sentence4 = () => {
  //同期中のプログラムに非同期処理が割り込むことはない
  setTimeout(() => {
    console.log("タイマーが呼び出されました");
  }, 100);

  const startTime = performance.now();
  let count = 0;
  while (performance.now() - startTime < 1000) {
    count++;
  }
  console.log(count);

  //同期中のプログラムに非同期処理が割り込むことはない
  readFile("foo.txt", "utf8", (err, result) => {
    console.log(result);
  });
  console.log("読み込み開始");
};
