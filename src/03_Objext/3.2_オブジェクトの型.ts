// 3.2.1 オブジェクト型の記法
export const sentence1 = () => {
  const obj = {
    foo: 123,
    bar: "Hello World",
  };
};
export const sentence2 = () => {
  const obj: {
    foo: number;
    bar: string;
  } = {
    foo: 123,
    bar: "Hello World",
  };
};
export const sentence3 = () => {
  const obj: {
    "foor bar": number;
  } = {
    "foor bar": 123,
  };
};

// 3.2.2 オブジェクト型の型チェックと安全性
export const sentence4 = () => {
  const obj: {
    foo: number;
    bar: string;
  } = {
    foo: 123,
    bar: "bar",
    // bar:true,//コンパイルエラー
  };
};
export const sentence5 = () => {
  const obj: {
    foo: number;
    bar: string;
  } = {
    foo: 123,
    bar: "Hello World", //ないとコンパイルエラーになる
  };
};
export const sentence6 = () => {
  const obj = {
    foo: 123,
    bar: "Hello World",
  };
  //   obj.foo = null;//コンパイルエラー
};
export const sentence7 = () => {
  const obj = {
    foo: 123,
    bar: "Hello World",
  };
  //   console.log(obj.hoge)//コンパイルエラー
};

// 3.2.3 type文で型に別名をつける
export const sentence8 = () => {
  type FooBarObj = {
    foo: number;
    bar: string;
  };
  const obj: FooBarObj = {
    foo: 123,
    bar: "Hello World",
  };
};
export const sentence9 = () => {
  //FooBarObjの宣言前でもOK
  const obj: FooBarObj = {
    foo: 123,
    bar: "Hello World",
  };
  type FooBarObj = {
    foo: number;
    bar: string;
  };
  type UserId = string;
  const id: UserId = "uhyo";

  type FooObj = { foo: number };
  type MyObj = FooObj;
  const obj1: MyObj = { foo: 0 };
};

// 3.2.4 interface宣言でオブジェクト型を宣言する
export const sentence10 = () => {
  interface FooBarObj {
    foo: number;
    bar: string;
  }
  const obj: FooBarObj = {
    foo: 0,
    bar: "string",
  };
};

// 3.2.5 任意のプロパティ名を許容する型（インデックスシグネチャ）
export const sentence11 = () => {
  //プロパティ名が動的に決まる場合に使えそう
  type PriceData = {
    [key: string]: number;
  };
  const data: PriceData = {
    apple: 220,
    coffe: 120,
    bento: 500,
  };
  //これはOK
  data.chicken = 250;
  //これはコンパイルエラー
  //   data.弁当 = "foo";//fooが文字列のため
};
export const sentence12 = () => {
  //型安全性を破壊してしまう
  type MyObj = { [key: string]: number };
  const obj: MyObj = { foo: 123 };

  const num: number = obj.bar;
  //undefinedと表示される
  console.log(num);
};

export const sentence13 = () => {
  const propName: string = "foo";
  const obj = {
    [propName]: 123,
  };
  console.log(obj.foo); //123と表示される
};

// 3.2.6 オプショナルなプロパティの宣言
export const sentence14 = () => {
  type MyObj = {
    foo: boolean;
    bar: boolean;
    baz?: number;
  };
  const obj: MyObj = { foo: false, bar: true };
  const obj2: MyObj = { foo: true, bar: false, baz: 1234 };

  console.log(obj.baz); //undifined
  console.log(obj2.baz); //1234

  //console.log(obj2.baz * 1000);//コンパイルエラー
  if (obj2.baz !== undefined) {
    console.log(obj2.baz * 1000); //これはOK
  }
};

// 3.2.7 読み取り専用プロパティの宣言
export const sentence15 = () => {
  type MyObj = {
    readonly foo: number;
  };
  const obj: MyObj = { foo: 123 };

  //obj.foo = 0; 再代入できないのでエラー
};

// 3.2.8 typeofキーワードで変数の型を得る
export const sentence16 = () => {
  const num: number = 0;
  //型Tはnumber型
  type T = typeof num;
  //fooはnumber型の変数になる
  const foo: T = 123;
};

export const sentence17 = () => {
  const obj = {
    foo: 123,
    bar: "hi",
  };
  type T = typeof obj;
  const obj2: T = {
    foo: -50,
    bar: "",
  };
  //typeof演算子
  //const res:typeof foo = typeof bar;
};

export const sentence18 = () => {
  type User = { name: string; age: number };
  const commandList = ["attack", "defend", "run"] as const;
  type Command = typeof commandList;
};
export const sentence19 = () => {
  type Command = "attack" | "defend" | "run";
  const commandList: Command[] = ["attack", "defend", "run"];
};
