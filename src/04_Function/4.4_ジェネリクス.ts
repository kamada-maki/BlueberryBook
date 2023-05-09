// 4.4.1 関数の型引数とは
export const sentence1 = () => {
  type User<N> = { name: N };

  function repeat<T>(element: T, length: number): T[] {
    const result: T[] = [];
    for (let i = 0; i < length; i++) {
      result.push(element);
    }
    return result;
  }
  console.log(repeat<string>("a", 5)); //["a","a","a","a","a"]
  //関数を使う側が都度、型を決められる
  //↓のrepeatの中身：function repeat<number>(element: number, length: number): number
  console.log(repeat<number>(123, 3)); //[123,123,123]

  //repeat<string>(0, 10);//エラー
};

// 4.4.2 関数の型引数を宣言する方法
export const sentence2 = () => {
  const repeat = function <T>(element: T, length: number): T[] {
    const result: T[] = [];
    for (let i = 0; i < length; i++) {
      result.push(element);
    }
    return result;
  };
};

export const sentence3 = () => {
  const repeat = <T>(element: T, length: number): T[] => {
    const result: T[] = [];
    for (let i = 0; i < length; i++) {
      result.push(element);
    }
    return result;
  };
  const utils = {
    repeat<T>(element: T, length: number): T[] {
      const result: T[] = [];
      for (let i = 0; i < length; i++) {
        result.push(element);
      }
      return result;
    },
  };
  //型引数リストが複数ある場合
  const pair = <Left, Right>(left: Left, right: Right): [Left, Right] => [
    left,
    right,
  ];
  const p = pair<string, number>("uhyo", 26);
};

export const sentence4 = () => {
  const repeat = <T extends { name: string }>(
    element: T,
    length: number
  ): T[] => {
    const result: T[] = [];
    for (let i = 0; i < length; i++) {
      result.push(element);
    }
    return result;
  };

  type HasNameAndAge = {
    name: string;
    age: number;
  };

  //これはOK
  console.log(repeat<HasNameAndAge>({ name: "uhyo", age: 26 }, 3));
  //出力結果
  //   [
  //     { name: "uhyo", age: 26 },
  //     { name: "uhyo", age: 26 },
  //     { name: "uhyo", age: 26 },
  //   ];

  //これはエラー
  //console.log(repeat<string>("a", 5));
};

// 4.4.3 関数の型引数は省略できる
export const sentence5 = () => {
  function repeat<T>(element: T, length: number): T[] {
    const result: T[] = [];
    for (let i = 0; i < length; i++) {
      result.push(element);
    }
    return result;
  }
  //result はstring[]型となる
  const result = repeat("a", 5);
};

// 4.4.4 型引数を持つ関数型
export const sentence6 = () => {
  type Func = <T>(arg: T, num: number) => T[];
  const repeat: Func = (element, length) => {
    const result = [];
    for (let i = 0; i < length; i++) {
      result.push(element);
    }
    return result;
  };

  function makeTriple<T>(x: T, y: T, z: T) {
    return [x, y, z];
  }
  const stringTriple = makeTriple("foo", "bar", "baz");
  //const mixed = makeTriple("foo", 123, false);//型推論でコンパイルエラー

  function double<T>(func: (arg: T) => T): (arg: T) => T {
    return (arg) => func(func(arg));
  }
  type NumberToNumber = (arg: number) => number;
  const plus2: NumberToNumber = double((x) => x + 1);
  console.log(plus2(10)); //12表示される

  // const plus3 = double((x) => x + 1);//コンパイルエラー
};
