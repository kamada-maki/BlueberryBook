//2.1.1 文と式の関係
export const sentence1 = () => {
  const greeting = "Hello,"; //文
  const target = "world!"; //文
  console.log(greeting + target);
};
export const sentence2 = () => {
  const greeting = "Hello";
  const target = greeting;
  // Hello Hello と表示される
  console.log(greeting + target);
};
export const sentence3 = () => {
  const greeting = "Hello";
  const text = greeting + "world!";
  // Hello worldと表示される
  console.log(text);
};

//2.1.2 文と式は"結果"の有無で区別する
// 式には結果があるが、文には結果がない
export const sentence4 = () => {
//   if (i < 10) {
//     console.log("iは10未満です");
//   }
};
// 2.1.3 式文
// 式文=式の後にセミコロンを書く文
export const sentence5 = () => {
  //console.log(greeting + target);
};
