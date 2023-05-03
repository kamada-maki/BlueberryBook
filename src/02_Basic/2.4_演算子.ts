// 2.4.1 算術演算子（1）二項演算子

export const sentence1 = () => {
  const addResult = 1024 + 314 + 500;
  console.log(addResult); //1388と表示される
  const discounted = addResult * 0.7;
  console.log(discounted); //1286.6と表示される

  const sqrt2 = 2 ** 0.5;
  console.log(sqrt2); //1.4142....
  console.log(sqrt2 - 1); //0.4142....

  console.log(18 / 12); //1.5
  console.log(18n / 12n); //1n
  console.log(18 % 12); //6
  console.log(18n % 12n); //6n

  //res1の型はnumber型
  const res1 = 5 - 1.86;
  //res2の型はBigInt型
  const res2 = 2n ** 5n;

  const str: string = "123";
  //   console.log(123 * str);//コンパイルエラー

  console.log(5 - 3 - 1); //2
  console.log(5 - 3 - 1); //2
  console.log(5 - (3 - 1)); //3
};

// 2.4.2 算術演算子（2）単項演算子
export const sentence2 = () => {
  const x = 123;
  const minusx = -x;
  console.log(minusx); // -123と表示される

  const str: string = "123";
  console.log(+str * 100); //12300と表示される（+をつけることでnumber型になっている）

  let foo = 10;
  foo++;
  console.log(foo); //11
  foo--;
  console.log(foo); //10
};
export const sentence3 = () => {
  let foo = 10;
  console.log(++foo); //変動後の値の11
  console.log(foo--); //変動前の値の11
};

// 2.4.3 文字列の結合を+演算子で行う
import { createInterface } from "readline";
export const sentence4 = () => {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question("名前を入力してください:", (name) => {
    console.log("こんにちは" + name + "さん");
    rl.close();
  });
  console.log("foo" + true); //footrueと表示される
  console.log(null + "bar"); //nullbarと表示される
};

// 2.4.4 比較演算子と等価演算子
export const sentence5 = () => {
  const left1 = -5,
    right1 = 0;
  console.log(left1 < right1); //true

  const left2 = 100n,
    right2 = 50n;
  console.log(left2 >= right2); //true

  const left3 = -10,
    right3 = 0;
  console.log(left3 > right3); //false

  const left4 = 12n,
    right4 = 8n;
  console.log(left4 <= right4);
  //trueが表示される（aはoよりもコードポイントが小さいため）
  console.log("apple" < "oragne"); //辞書順

  //一致判定
  const left: number = 1;
  const right: number = 2;
  console.log(left === right); //false
  console.log(left !== right); //true
};

export const sentence6 = () => {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("パスワードを入力してください", (password) => {
    if (password === "hogeohoge") {
      console.log("ようこそ");
    } else {
      console.log("誰？");
    }
    rl.close();
  });

  // == と ===の違い
  const str: any = "3";
  //trueが表示される（文字列が数値に変換されるので）
  console.log(str == 3);
  //falseが表示される（異なる型である文字列と数値を比較しているので）
  console.log(str === 3);
  // ==をつかうのは x ==null（nullまたはundefinedになる）とかぐらい
};

// 2.4.5 論理演算子（1）真偽値の演算
export const sentence7 = () => {
  const t = true,
    f = false;
  console.log(t && t); //true
  console.log(t && f); //false
  console.log(f && f); //false

  console.log(t || t); //true
  console.log(t || f); //true
  console.log(f || f); //false
};

export const sentence8 = () => {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question("数値を入力してください", (line) => {
    const num = Number(line);
    if (0 <= num && num < 100) {
      console.log(`${num}は0以上100未満です`);
    } else {
      console.log(`${num}は0以上100未満ではありません`);
    }
    if (!Number.isNaN(num)) {
      console.log(num, "はNaNではありません");
    }
    rl.close();
  });
};

// 2.4.6 論理演算子(2) 一般形と短絡評価
export const sentence9 = () => {
  const input1 = "123",
    input2 = "";

  const input1isNotEmpty = !!input1;
  console.log(input1isNotEmpty); //true;
  const input2isNotEmpty = !!input2;
  console.log(input2isNotEmpty); //false;

  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("名前を入力してください", (name) => {
    const displayName = name || "名無し";
    console.log(`こんにちは${name}さん`);
    rl.close();
  });

  //   const displayName = name || getDefaultName(); nameがfalseだった場合にのみgetDefaultNameが呼び出される

  //環境変数SECRETを取得。ただし存在しなければ"default"を用いる
  const secret = process.env.SECRET ?? "default";
  // ||は空文字や0、falseも「値なし」と扱うが、??は値がnullまたはundefinedのときのみ「値なし」
  console.log(`secretは${secret}です`);
};

// 2.4.7 条件演算子
// 条件式 ? 真のときの式:偽のときの式
export const sentence10 = () => {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question("数値を入力してください", (line) => {
    const num = Number(line);
    const message =
      0 <= num && num < 100
        ? `${num}は0以上100未満です`
        : `${num}は0以上100未満ではありません`;
    console.log(message);
    rl.close();
  });
};

// 2.4.8 代入演算子
export const sentence11 = () => {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question("名前を入力してください", (name) => {
    if (name === "") {
      name = "名無し";
    }
    console.log(`こんにちは${name}さん`);
    rl.close();
  });

  let foo: string = "文字列";
  //   foo = 123;//コンパイルエラー

  let num = 0;
  num += 100; //numは100
  num * 4; //numは400(100*4)
  num -= 200; //numは200(400-200)
  num /= 2; //numは100(200/2)
  num **= 0.5; //numは10(100**0.5);

  console.log(num); //10と表示される

  let userName = "uhyo";
  //   userName || =getDefalutName(); userNameがtrueなのでgetDefalutName()は呼び出されない
  console.log(userName);
};

// 2.4.9 その他の演算子
export const sentence12 = () => {
  //ビット演算
  console.log(0b0101 | 0b1100); //13(0b1101)が表示される
  console.log(0b0101 & 0b1100); //4(0b0100)が表示される
  console.log(~0b0101); //-6(-5-1)が表示される
};
