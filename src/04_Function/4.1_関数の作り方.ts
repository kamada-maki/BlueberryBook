// 4.1.1 関数宣言で関数を作る
export const sentence1 = () => {
  function range(min: number, max: number): number[] {
    const result = [];
    for (let i = min; i <= max; i++) {
      result.push(i);
    }
    //エラー
    //return i;
    return result;
  }
  console.log(range(5, 10)); //[5,6,7,8,9,10]
  //エラー
  //console.log(range("5","10"));
  //console.log(range(5));
};
export const sentence2 = () => {
  console.log(range(5, 10)); //関数の前でもOK（巻き上げという）
  function range(min: number, max: number): number[] {
    const result = [];
    for (let i = min; i <= max; i++) {
      result.push(i);
    }
    return result;
  }
};

//4.1.2 返り値がない関数を作る
export const sentence3 = () => {
  function helloWorldNTimes(n: number): void {
    for (let i = 0; i < n; i++) {
      console.log("Hello world");
    }
  }
  helloWorldNTimes(5);

  function helloWorldNTimes2(n: number): void {
    if (n >= 100) {
      console.log(`${n}回なんて無理です！！！`);
      return;
    }
    for (let i = n; i < n; i++) {
      console.log("Hello world");
    }
  }
  helloWorldNTimes2(5);
  helloWorldNTimes2(150);
};

export const sentence4 = () => {
  function toSeconds(hours: number, minutes: number, seconds: number): number {
    //セミコロンを省略しない場合
    return hours * 3600 + minutes * 60 + seconds;
    //セミコロン省略（整形ツールで追記されちゃう）
    // return hours * 3600 + minutes * 60 + seconds;
    //コンパイルエラー
    //return;//←ここでセミコロンが省略されたと扱われる
    //hours* 3600
    //+ minutes * 60
    //+ seconds
  }
};

// 4.1.3 関数式で関数を作る
export const sentence5 = () => {
  type Human = {
    height: number;
    weight: number;
  };
  const calcBMI = function (human: Human): number {
    return human.weight / human.height ** 2;
  };
  const uhyo: Human = { height: 1.84, weight: 72 };
  console.log(calcBMI(uhyo)); //21.266..
};

export const sentence6 = () => {
  type Human = {
    height: number;
    weight: number;
  };
  const calcBMI = function ({ height, weight }: Human): number {
    return weight / height ** 2;
  };
  const uhyo: Human = { height: 1.84, weight: 72 };
  console.log(calcBMI(uhyo));
};
export const sentence7 = () => {
  type Human = {
    height: number;
    weight: number;
  };
  const uhyo: Human = { height: 1.84, weight: 72 };
  //console.log(calcBMI(uhyo)); エラー※関数宣言と異なり巻き上げ機能は持たない
  const calcBMI = function ({ height, weight }: Human): number {
    return weight / height ** 2;
  };
};

// 4.1.4 アロー関数式で関数を作る
export const sentence8 = () => {
  type Human = {
    height: number;
    weight: number;
  };
  const calcBMI = ({ height, weight }: Human): number => {
    return weight / height ** 2;
  };
  const uhyo: Human = { height: 1.84, weight: 72 };
  console.log(calcBMI(uhyo));
};

// 4.1.5 アロー関数の省略形
export const sentence9 = () => {
  type Human = {
    height: number;
    weight: number;
  };
  // 普通の書き方
  const calcBMI = ({ height, weight }: Human): number => {
    return weight / height ** 2;
  };

  // 省略形
  const calcBMI2 = ({ height, weight }: Human): number => weight / height ** 2;
};

export const sentence10 = () => {
  type Human = {
    height: number;
    weight: number;
  };
  type ReturnObj = {
    bmi: number;
  };
  // 正しい書き方
  const calcBMIObject = ({ height, weight }: Human): ReturnObj => ({
    bmi: weight / height ** 2,
  });
  // コンパイルエラー
  // const calcBMIObject2 = ({ height, weight }: Human): ReturnObj => {
  // bmi: weight / height ** 2;
  // };
};

// 4.1.6 メソッド記法で関数を作る
export const sentence11 = () => {
  const obj = {
    // メソッド記法
    double(num: number): number {
      return num * 2;
    },
    // 通常の記法 + アロー関数
    double2: (num: number): number => num * 2,
  };
  console.log(obj.double(100)); //200
  console.log(obj.double2(-50)); //-100
};

// 4.1.7 可変長引数の宣言
export const sentence12 = () => {
  const sum = (...args: number[]): number => {
    let result = 0;
    for (const num of args) {
      result += num;
    }
    return result;
  };
  console.log(sum(1, 10, 100)); //111
  console.log(sum(123, 456)); //579
  console.log(sum()); //0

  // コンパイルエラー
  // const sum2 = (...args: number) => {};
};

export const sentence13 = () => {
  const sum = (base: number, ...args: number[]): number => {
    let result = base * 1000;
    for (const num of args) {
      result += num;
    }
    return result;
  };
  console.log(sum(1, 10, 100)); //1110
  console.log(sum(123, 456)); //123456
  // console.log(sum()); エラー
};

// 4.1.8 関数の呼び出しにおけるスプレッド構文
export const sentence14 = () => {
  const sum = (...args: number[]): number => {
    let result = 0;
    for (const num of args) {
      result += num;
    }
    return result;
  };
  const nums = [1, 2, 3, 4, 5];
  console.log(sum(...nums)); //15

  const sum3 = (a: number, b: number, c: number) => a + b + c;
  const nums3 = [1, 2, 3];
  //エラー
  // console.log(sum3(...nums));
};

export const sentence15 = () => {
  const sum3 = (a: number, b: number, c: number) => a + b + c;
  const num3: [number, number, number] = [1, 2, 3];
  console.log(sum3(...num3)); //6
};

// 4.1.9 オプショナル引数の宣言
export const sentence16 = () => {
  const toLowerOrUpper = (str: string, upper?: boolean): string => {
    if (upper) {
      return str.toUpperCase();
    } else {
      return str.toLowerCase();
    }
  };
  console.log(toLowerOrUpper("Hello")); //"hello"
  console.log(toLowerOrUpper("Hello", false)); //"hello"
  console.log(toLowerOrUpper("Hello", true)); //"HELLO"
  console.log(toLowerOrUpper("Hello", undefined)); //"hello"
};

export const sentence17 = () => {
  const toLowerOrUpper = (str: string, upper: boolean = false): string => {
    if (upper) {
      return str.toUpperCase();
    } else {
      return str.toLowerCase();
    }
  };
  console.log(toLowerOrUpper("Hello")); //"hello"
  console.log(toLowerOrUpper("Hello", false)); //"hello"
  console.log(toLowerOrUpper("Hello", true)); //"HELLO"

  //オプショナルな引数の後に普通の引数は渡せない
  //const toLowerOrUpper2 = (str?: string, upper: boolean) => {};
};

export const sentence18 = () => {
  function foo(): void {}
  const bar = (): void => {};
  console.log(foo.name); //"foo"
  console.log(bar.name); //"bar"

  type HasName = { name: string };
  const obj: HasName = foo;
};

// 4.1.10 コールバック関数を使ってみる
export const sentence19 = () => {
  type User = { name: string; age: number };
  const getName = (u: User): string => u.name;
  const users: User[] = [
    {
      name: "uhyo",
      age: 26,
    },
    {
      name: "John Smith",
      age: 15,
    },
  ];
  const names = users.map(getName);
  console.log(names); //["uhyo","JohnSmith"]
};
