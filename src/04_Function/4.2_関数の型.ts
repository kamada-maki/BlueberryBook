// 4.2.1 関数型の記法
export const sentence1 = () => {
  const xRepeat = (num: number): string => "x".repeat(num);
};

export const sentence2 = () => {
  type F = (repeatNum: number) => string;
  //引数名は型チェックには影響はしない
  const xRepeat: F = (num: number): string => "x".repeat(num);

  type F2 = (arg: string, arg2: string) => boolean;
  //const fun: F2 = (num: number): void => console.log(num); コンパイルエラー
};

// 4.2.2 返り値の型注釈は省略可能
export const sentence3 = () => {
  const xRepeat = (num: number) => "x".repeat(num);

  const g = (num: number) => {
    for (let i = 0; i < num; i++) {
      console.log("Hello World");
    }
  };
};

// 4.2.3 返り値の型注釈は省略すべきか
export const sentence4 = () => {
  function range(min: number, max: number): number[] {
    const result = [];
    for (let i = min; i <= max; i++) {
      result.push(i);
    }
    return result; //returnがないとnumber[]でコンパイルエラーになる
  }
  const arr = range(5, 18);
  for (const value of arr) console.log(value);
};

export const sentence5 = () => {
  function range(min: number, max: number) {
    const result = [];
    for (let i = min; i <= max; i++) {
      result.push(i);
    }
    //return result;
  }
  const arr = range(5, 10);
  // for (const value of arr) console.log(value);//エラー
};

// 4.2.4 引数の型注釈が省略可能な場合
export const sentence6 = () => {
  const xRepeat = (arg: number): string => "x".repeat(arg);
};

export const sentence7 = () => {
  type F = (arg: number) => string;
  //引数の型を書かなくてもOK 逆方向の推論
  const xRepeat: F = (num) => "x".repeat(num);

  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const arr2 = nums.filter((x) => x % 3 === 0);
  console.log(arr2); //[3.6.9]

  type Geetable = {
    greet: (str: string) => string;
  };
  const obj: Geetable = {
    greet: (str) => `Hello,${str}`,
  };
  // const f = (num) => num * 2;//エラー

  //アロー関数式の引数が1つで、引数に型注釈がない場合は引数を囲む()は省略できる
  const arr3 = nums.filter((x) => x % 3 === 0);
};

// 4.2.5 コールシグネチャによる関数型の表現
export const sentence8 = () => {
  type MyFunc = {
    isUsed?: boolean;
    (arg: number): void;
  };
  const double: MyFunc = (arg: number) => {
    console.log(arg * 2);
  };

  //doubleはisUserdプロパティを使う
  double.isUsed = true;
  console.log(double.isUsed);
  //doubleは関数として呼び出せる
  double(1000);

  type F = (arg: string) => number;
  type G = { (arg: string): number };

  type SwapFunc = {
    (arg: string): number;
    (arg: number): boolean;
  };
};
