//8.4.1 async関数を作ってみる
export const sentence1 = () => {
  async function get3(): Promise<number> {
    return 3;
  }
  const p = get3();
  p.then((num) => {
    console.log(`num is ${num}`);
  });
};
export const sentence2 = () => {
  async function get3(): Promise<number> {
    console.log("get3が呼び出されました");
    return 3;
  }
  console.log("get3を呼び出します");
  const p = get3();
  p.then((num) => {
    console.log(`num is ${num}`);
  });
  console.log("get3を呼び出しました");

  async function fail() {
    throw new Error("Oh my god!!");
  }
  const p2 = fail();
  p.catch((err) => {
    console.log(err);
  });

  //コンパイルエラー
  // async function get3(): number {
  //   console.log("get3が呼び出されました");
  //   return 3;
  // }
};
export const sentence4 = () => {};
export const sentence5 = () => {};
export const sentence6 = () => {};
export const sentence7 = () => {};
