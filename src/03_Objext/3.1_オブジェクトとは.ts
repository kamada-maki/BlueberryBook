import { createInterface } from "readline";

// 3.1.1 オブジェクトは連想配列である
export const sentence1 = () => {
  const obj = {
    foo: 123,
    bar: "Hello,world",
  };
  console.log(obj.foo);
  console.log(obj.bar);
};

// 3.1.2 オブジェクトリテラル（1）基本的な構文
export const sentence2 = () => {
  const obj = {
    foo: 555,
    bar: "文字列",
  };
  const input = "";
  const user = {
    name: input ? input : "名無し",
    age: 20,
  };
};
export const sentence3 = () => {
  const input = "";
  const name = input ? input : "名無し";
  const user = {
    name: name,
    age: 20,
  };
};
export const sentence4 = () => {
  const input = "";
  const name = input ? input : "名無し";
  const user = {
    name,
    age: 20,
  };
};

// 3.1.3 オブジェクトリテラル（2）プロパティ名の種々の指定方法
export const sentence5 = () => {
  const obj = {
    foo: 123,
    "foo bar": -500,
  };
  console.log(obj.foo); //123
  console.log(obj["foo bar"]); //-500
};
export const sentence6 = () => {
  const obj = {
    1: "one",
    2.05: "two point o five",
  };
  console.log(obj["1"]); //one
  console.log(obj["2.05"]); //two point o five
};
export const sentence7 = () => {
  const propName = "foo";
  const obj = {
    [propName]: 123,
  };
  console.log(obj.foo); //123と表示される
};

// 3.1.4 プロパティアクセス:値の代入と取得
export const sentence8 = () => {
  const user = {
    name: "uhyo",
    age: 25,
  };
  user.age = 26;
  console.log(user.age);
};
export const sentence9 = () => {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  const message = {
    good: "0以上の数値が入力されました",
    bad: "負の数値を入力しないでください",
  };
  rl.question("数値を入力してください", (line) => {
    const num = Number(line);
    console.log(message[num >= 0 ? "good" : "bad"]);
    rl.close();
  });

  const user = {
    name: "uhyo",
    age: 25,
  };
  //コンパイルエラー
  // user ={
  //     name:"John Smith",
  //     age:15
  // }
};

// 3.1.5 オブジェクトリテラル(3) スプレッド構文
export const sentence10 = () => {
  const obj1 = {
    bar: 456,
    baz: 789,
  };
  const obj2 = {
    foo: 123,
    ...obj1,
  };
  //obj2は{foo:123,bar:456,baz:789}
  console.log(obj2);
};
export const sentence11 = () => {
  const obj1 = {
    foo: 123,
    bar: 456,
    baz: 789,
  };
  const obj2 = {
    ...obj1,
    foo: -9999,
  };
  //obj2は{foo:-9999,bar:456,baz:789}
  console.log(obj2);
};
export const sentence12 = () => {
  const obj1 = {
    foo: 123,
    bar: 456,
    baz: 789,
  };
  const obj2 = {
    // foo:-9999, //コンパイルエラー※...obj1で上書きされるのに書いても意味ない
    ...obj1,
  };
};
export const sentence13 = () => {
  const obj1 = {
    foo: 123,
    bar: 456,
  };
  const obj2 = {
    bar: -999,
    baz: -9999,
  };
  const obj3 = {
    ...obj1,
    ...obj2,
  };
  //obj3は{foo:123mbar:-999,baz:-9999}
  console.log(obj3);
};
// 3.1.6 オブジェクトはいつ同じなのか
export const sentence14 = () => {
  const foo = { num: 1234 };
  const bar = foo;
  console.log(bar.num); //1234
  bar.num = 0;
  console.log(foo.num); //0
};
export const sentence15 = () => {
  const foo = { num: 1234 };
  const bar = { ...foo }; //{num:1234}
  console.log(bar.num); //1234
  bar.num = 0;
  console.log(foo.num); //1234
};
export const sentence16 = () => {
  const foo = { num: 1234 };
  const bar = { num: 1234 };
};
export const sentence17 = () => {
  const foo = { obj: { num: 1234 } };
  const bar = { ...foo };
  bar.obj.num = 0;
  console.log(foo.obj.num); //0と表示される
};
export const sentence18 = () => {
  const foo = { num: 1234 };
  const bar = foo;
  const baz = { num: 1234 };

  console.log(foo === bar); //true
  console.log(foo === baz); //false
//   ※オブジェクトの中身自体の一致は確認できない
};
