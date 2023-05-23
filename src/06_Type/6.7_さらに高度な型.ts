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

// 6.7.2 型述語（ユーザー定義型ガード）
export const sentence3 = () => {
  function isStringOrNumber(value: unknown): value is string | number {
    return typeof value === "string" || typeof value === "number";
    // return typeof value === "string" || typeof value === "boolean"; //実装を間違えてもエラーにならない
  }
  const something: unknown = 123;

  if (isStringOrNumber(something)) {
    console.log(something.toString());
  }

  type Human = {
    type: "Human";
    name: string;
    age: number;
  };

  function isHuman(value: any): value is Human {
    //プロパティアクセスできない可能性を排除
    if (value == null) return false;

    return (
      value.type === "Human" &&
      typeof value.name === "string" &&
      typeof value.age === "number"
    );
  }

  function assertHuman(value: any): asserts value is Human {
    if (value === null) {
      throw new Error("Given value is null or undifined");
    }
    // 3つのプロパティの型を判定
    if (
      value.type !== "Human" ||
      typeof value.name !== "string" ||
      typeof value.age !== "number"
    ) {
      throw new Error("Given value is not a Human");
    }
  }

  function checkAndUseHuman(value: unknown) {
    assertHuman(value);
    //ここから下ではvalueがHuman型になる
    const name = value.name;
  }
};
export const sentence4 = () => {};
export const sentence5 = () => {};
export const sentence6 = () => {};
