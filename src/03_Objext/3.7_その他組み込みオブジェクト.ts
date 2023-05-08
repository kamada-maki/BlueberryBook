// 3.7.1 Dateオブジェクト
export const sentence1 = () => {
  const d = new Date();
  console.log(d);
};
export const sentence2 = () => {
  const d = new Date("2020-02-03T15:00:00+09:00");
  console.log(d);

  const date = new Date("2020-02-03T15:00:00+09:00");
  const timeNum = date.getTime();
  console.log(timeNum); //158070960000

  const date2 = new Date(timeNum);
  console.log(date2); // Mon Feb 03 2020 15:00:00 GMT+0900(日本標準時)

  console.log(Date.now()); //現在時刻を表す数値が表示される
};

// 3.7.2 正規表現オブジェクト(1) 正規表現の基本
export const sentence3 = () => {
  const r = /ab+c/;

  console.log(r.test("abbbbc")); //true
  console.log(r.test("Hello abc world")); //true
  console.log(r.test("ABC")); //false
  console.log(r.test("こんにちは")); //false
};
export const sentence4 = () => {
  const r = /^abc/;
  console.log(r.test("abcfefg")); //true
  console.log(r.test("Hello abcdefg")); //false
};

// 3.7.3 正規表現オブジェクト(2) 正規表現を使う方法
export const sentence5 = () => {
  //"Hello, foorbar world! abbc" と表示される
  console.log("Hello, abbbbbbbc world! abbc".replace(/ab+c/, "foobar"));
  //"Hello, foorbar world! foobar" と表示される
  console.log("Hello, abbbbbbbc world! abbc".replace(/ab+c/g, "foobar"));

  const result = "Hello abbbbbbbc world! abc".match(/a(b+)c/);
  if (result !== null) {
    console.log(result[0]); //"abbbbbbbc"
    console.log(result[1]); //"bbbbbbb"
  }
};

export const sentence6 = () => {
  const result = "Hello, abbbbbbbc world!".match(/a?<worldName>b+c/);
  if (result !== null) {
    console.log(result.groups); //{"worldName":"bbbbbbb"};
  }
};
export const sentence7 = () => {
  const result = "Hello, abbbbbbbc world!".match(/a(b+)c/g);
  console.log(result); //["abbbbbbbc","abc"]
};

// 3.7.4 Mapオブジェクト・Setオブジェクト
export const sentence8 = () => {
  const map: Map<string, number> = new Map();
  map.set("foo", 1234);

  console.log(map.get("foo")); //1234
  console.log(map.get("bar")); //undifined
};

// 3.7.5 プリミティブなのにプロパティがある？
export const sentence9 = () => {
  const str = "Hello, world!";
  console.log(str.length); //13

  type HasLength = { length: number };
  const obj: HasLength = "foobar";
  console.log(obj);

  // これらはOK
  let val: {} = 123;
  val = "foobar";
  val = { num: 1234 };

  //これはエラー
  // val = null;
  // val = undefined;
};
