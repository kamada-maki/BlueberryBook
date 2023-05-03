// 2.3.1 プリミティブとは何か
// TypeScriptにおける値はプリミティブとオブジェクト（プリミティブを組み合わせてできたもの）に分かれる
// プリミティブ：文字列、数値、真偽値、BigInt、null、undifined、シンボル
// 2.3.2 TypeScriptにおける数値型の特徴
export const sentence1 = () => {
  const width1 = 5;
  const width2 = 8;
  const height: number = 3;
  const area = ((width1 + width2) * height) / 2;
  // 19.5が表示される
  console.log(area);
  // number型には整数と小数の区別はない
  console.log(3.5 * 2); // 7.0ではなく、7と表示される
};

// 2.3.3 数値リテラル
export const sentence2 = () => {
  const binary = 0b1010; // 2進数リテラル
  const octal = 0o755; // 8進数リテラル
  const hexadecimal = 0xff; // 16進数リテラル

  // 10 493 255 と表示される
  console.log(binary, octal, hexadecimal);

  const big = 1e8;
  const small = 4e-5;
  // 100000000 0.0004と表示される
  console.log(big, small);

  const million = 1_000_000;

  // 1000000と表示される
  console.log(million);
};

// 2.3.4 任意精度整数（BigInt）
// 任意精度=どれだけ大きな数でも誤差なく表すことができる※BigIntよりnumberの方が高速
export const sentence3 = () => {
  const bignum: bigint = (123n + 456n) * 2n;
  console.log(bignum); //1158n

  const result = 5n / 2n;
  console.log(result); //2n;

  //※普通の数値と混ぜて使うことはできない
  //   const wrong = 100n + 50;//コンパイルエラー
};

// 2.3.5 文字列型と3種類の文字列リテラル
export const sentence4 = () => {
  const str1: string = "Hello";
  const str2: string = "world";
  console.log(str1 + "," + str2); //Hello,world
};

export const sentence5 = () => {
  //テンプレートリテラルはリテラル内で改行が可能
  const message: string = `Hello
  world!`;
  console.log(message);

  // 式を文字列の中に埋め込むことができる
  const str1: string = "Hello";
  const str2: string = "world";
  console.log(`${str1},${str2}`); //Hello,world
  console.log(`123+456 = ${123 + 456}`); //"123 + 456 = 579"
};

// 2.3.6 文字列中のエスケープシーケンス
export const sentence6 = () => {
  console.log("Hello\\world/"); //Hello\world/
  console.log("Hello\u{796d} wolrd"); //Hello 祭 world
};

// 2.3.7 真偽値と真偽値リテラル
export const sentence7 = () => {
  const no: boolean = false;
  const yes: boolean = true;
  console.log(yes, no);
};

// 2.3.8 nullとundefined
export const sentence8 = () => {
  const val1 = null;
  const val2 = undefined;
  console.log(val1, val2); //null undefinedと表示される

  const n: null = null;
  const u: undefined = undefined;
};

// 2.3.9 プリミティブ型同士の変換（1）暗黙の変換を体験する
import { createInterface } from "readline";
export const sentence9 = () => {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  //   rl.question("文字列を入力してください", (line) => {
  //     //文字列が入力されるとここが実行される
  //     console.log(`${line}が入力されました`);
  //     rl.close();
  //   });
  rl.question("数値を入力してください", (line) => {
    //文字列が入力されるとここが実行される
    console.log(line + 10000); //入力した数値は文字列として換算される
    rl.close();
  });
};

// 2.3.10 プリミティブ型同士の変換（2）明示的な変換を行う
export const sentence10 = () => {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question("数値を入力してください", (line) => {
    // 数値として明示的な変換を行う
    const num = Number(line);
    console.log(num + 10000); //入力した数値は文字列として換算される
    rl.close();
  });
};

export const sentence11 = () => {
  const num1 = Number(true);
  console.log(num1); //1と表示される

  const num2 = Number(false);
  console.log(num2); //2と表示される

  const num3 = Number(null);
  console.log(num3); //0と表示される

  const num4 = Number(undefined);
  console.log(num4); //NaNと表示される

  const bigint1 = BigInt("1234");
  console.log(bigint1); //1234nと表示される

  const bigint2 = BigInt(500);
  console.log(bigint2); //500nと表示される

  const bigint3 = BigInt(true);
  console.log(bigint3); //1nと表示される

  const bigint = BigInt("fooooo");
  console.log("bigint is ", bigint);
};

export const sentence12 = () => {
  //数値から文字列へ
  const str1 = String(1234.5);
  console.log(str1); //"1234.5"と表示される

  //真偽値から文字列へ
  const str2 = String(true);
  console.log(str2); //"true"と表示される

  //nullやundefinedも文字列へ変換
  const str3 = String(null);
  const str4 = String(undefined);
  console.log(str3, str4); //null undefinedの文字列として表示される

  console.log(Boolean(123)); //trueと表示される
  console.log(Boolean(0)); //falseと表示される
  console.log(Boolean(1n)); //true
  console.log(Boolean(0n)); //false
  console.log(Boolean("")); //false
  console.log(Boolean("foobar")); //true
  console.log(Boolean(null)); //false
  console.log(Boolean(undefined)); //false
};
