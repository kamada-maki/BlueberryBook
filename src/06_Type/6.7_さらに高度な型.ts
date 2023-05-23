// 6.7.1 object型・never型
export const sentence1 = () => {
  type HasToString = {
    toString: () => string;
  };
  function useToString1(value: HasToString) {
    console.log(`value is ${value.toString()}`);
  }

  //"value is foo!"
  useToString1({
    toString() {
      return "foo!";
    },
  });

  //"value is 3.14"
  useToString1(3.14);

  function useToString2(value: HasToString & object) {
    console.log(`value is ${value.toString()}`);
  }
  //"value is foo!"
  useToString2({
    toString() {
      return "foo";
    },
  });

  // useToString2(3.14);//エラー
};
export const sentence2 = () => {
  function useNever(value: never) {
    const num: number = value;
    const str: string = value;
    const obj: object = value;
    console.log(`value is ${value}`);
  }
  //useNever({}); エラー
  //useNever(3.14);エラー

  function thrower(): never {
    throw new Error("error");
  }
  //コンパイルエラーは起きない
  const result: never = thrower();

  const str: string = result;
  console.log(str);
};
export const sentence3 = () => {};
export const sentence4 = () => {};
export const sentence5 = () => {};
export const sentence6 = () => {};
