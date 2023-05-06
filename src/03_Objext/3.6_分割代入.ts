// 3.6.1 オブジェクトの分割代入(1) 基本的なパターン
export const sentence1 = () => {
  const obj = {
    foo: 1,
    bar: 2,
  };
  //const { foo, bar } = obj;
  // 分割代入しないなら↓
  const foo = obj.foo;
  const bar = obj.bar;
};
export const sentence2 = () => {
  const obj = {
    foo: 1,
    bar: 2,
    "foo bar": 111,
  };
  const { foo, bar: barVar, "foo bar": fooBar } = obj;
};
export const sentence3 = () => {
  const obj = {
    str: "hello,world",
    num: 1234,
  };
  // const { foo } = obj;// エラー
};

// 3.6.2 オブジェクトの分割代入(2) ネストしたパターン
export const sentence4 = () => {
  const nested = {
    num: 123,
    obj: {
      foo: "Hello",
      bar: "World",
    },
  };
  const {
    num,
    obj: { foo },
  } = nested;
  console.log(num); //123
  console.log(foo); //Hello
};
// 3.6.3 配列の分割代入
export const sentence5 = () => {
  const obj = {
    bar: 2,
    arr: [1],
  };
  const arr = [1, 2, 4, 8, 16, 32, "こんにちは"];

  //const [first, second, third] = arr;
  //↓分割代入しないなら
  const first = arr[0];
  const second = arr[1];
  const third = arr[2];
  console.log(first);
  console.log(second);
  console.log(third);

  const {
    arr: [foo],
  } = obj;
  //const [{ name }] = arr;
};

export const sentence6 = () => {
  const arr = [1, 2, 4, 8, 16, 32];
  const [, foo, , bar, , baz] = arr;
  console.log(foo); //2
  console.log(bar); //8
  console.log(baz); //32

  const tuple: [string, number] = ["uhyo", 26];
  const [myName, age] = tuple;
  console.log(myName); //"uhyo"
  console.log(age); //26
};

// 3.6.4 分割代入のデフォルト値 ※undifinedにのみ適用される
export const sentence7 = () => {
  type Obj = { foo?: number };
  const obj1: Obj = {};
  const obj2: Obj = { foo: 1234 };

  //変数fooには500が代入される
  const { foo = 500 } = obj1;
  console.log(foo);
  //const foo = obj.foo !== undefined ? obj1.foo : 500; 分割代入しない場合

  //変数fooには-1234が代入される
  const { foo: bar = 500 } = obj2;
  console.log(bar);
};

export const sentence8 = () => {
  const obj = { foo: null };
  const { foo = 123 } = obj;
  console.log(foo); //nullが表示される
};
export const sentence9 = () => {
  type Obj = { foo?: number };
  const obj1: Obj = {};
  const { foo = 500 } = obj1;

  type NestedObj = {
    obj?: {
      foo: number;
    };
  };

  const nested1: NestedObj = {
    obj: { foo: 123 },
  };
  const nested2: NestedObj = {};

  //変数foo1には123が代入される
  const { obj: { foo: fooo1 } = { foo: 500 } } = nested1;
  //変数foo2には500が代入される
  const { obj: { foo: foo2 } = { foo: 500 } } = nested2;
};

// 3.6.5 restパターンでオブジェクトの残りを取得する
export const sentence10 = () => {
  const obj = {
    foo: 123,
    bar: "string",
    baz: false,
  };
  const { foo, ...restObj } = obj;
  console.log(foo); //123
  console.log(restObj); //{bar:"string",baz:false}

  const arr = [1, 1, 2, 3, 5, 8, 13];
  const [first, second, third, ...rest] = arr;
  console.log(first); //1
  console.log(second); //1
  console.log(third); //2
  console.log(rest); //[3, 5, 8, 13];
};
