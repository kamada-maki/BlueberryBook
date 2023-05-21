// 6.2.1 4種類のリテラル型
export const sentence1 = () => {
  //これは"foo"という文字列のみが属するリテラル型
  type FooString = "foo";

  //これはOK
  const foo: FooString = "foo";
  //エラー
  //   const bar: FooString = "bar";
};
export const sentence2 = () => {
  //文字列のリテラル型
  const foo: "foo" = "foo";
  //数値のリテラル型
  const one: 1 = 1;
  //真偽値のリテラル型
  const t: true = true;
  const three: 3n = 3n;
};

// 6.1.2 テンプレートリテラル型
export const sentence3 = () => {
  function getHelloStr(): `Hello ${string}` {
    const rand = Math.random();
    if (rand < 0.3) {
      return "Hello world";
    } else if (rand < 0.6) {
      return "Hello My world";
    } else if (rand < 0.9) {
      // return "Hello, world" エラー
      return "Hello !";
    } else {
      //   return "Hell,world";エラー
      return "Hello !!";
    }
  }
  function makeKey<T extends string>(userName: T) {
    return `user:${userName}` as const;
  }
  const uhyoKey: "user:uhyo" = makeKey("uhyo");

  function fromKey<T extends string>(key: `user${T}`): T {
    return key.slice(5) as T;
  }
  //userは"uhyo"型
  const user = fromKey("user:uhyo");
};

// 6.2.3 ユニオン型とリテラル型を組み合わせて使うケース
export const sentence4 = () => {
  function signNumber(type: "plus" | "minus") {
    return type === "plus" ? 1 : -1;
  }
  console.log(signNumber("plus")); //1
  console.log(signNumber("minus")); //-1
  //   console.log(signNumber("uhyo"));//エラー
};

// 6.2.4 リテラル型のwidenig
export const sentence5 = () => {
  //変数uhyo1は"uhyo"型
  const uhyo1 = "uhyo";
  //変数uhyo2はstring型 letの場合はリテラル型に推論されそうな場合はプリミティブ方に変換される
  let uhyo2 = "uhyo";
  //文字列だけでなく数値型にすることもできるという意図があるなら string | number
  let uhyo: string | number = "uhyo";
  uhyo = "john";
  uhyo = 3.14;

  let uhyo3: "uhyo" | "john" = "uhyo";
};
export const sentence6 = () => {
  const uhyo = {
    name: "uhyo",
    age: 26,
  };
  uhyo.name = "john";

  type Human = {
    readonly name: string;
    readonly age: number;
  };
  const uhyo2: Human = {
    name: "uhyo",
    age: 26,
  };
};
export const sentence7 = () => {
  type Uhyo = {
    name: "uhyo";
    age: number;
  };
  const uhyo: Uhyo = {
    name: "uhyo",
    age: 26,
  };

  function signNumber(type: "plus" | "minus") {
    return type === "plus" ? 1 : -1;
  }
  function useNumber(num: number) {
    return num > 0 ? "plus" : num < 0 ? "minus" : "zero";
  }
  //   signNumber("uhyo"); //エラー
  //   useNumber("uhyo");//エラー
};
// 6.2.5 wideningされるリテラル型・wideningされないリテラル型
export const sentence8 = () => {
  //これはwideningされる"uhyo"型
  const uhyo1 = "uhyo";
  //これはwindeningされない"uhyo型
  const uhyo2: "uhyo" = "uhyo";

  //これはstring型
  let uhyo3 = uhyo1;
  //これは"uhyo"型
  let uhyo4 = uhyo2;
};
