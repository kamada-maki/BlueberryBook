// 5.5.1 throw文とErrorオブジェクト
export const sentence1 = () => {
  console.log("エラーを発生させます");
  throwError();
  console.log("エラーを発生させました");

  function throwError() {
    const error = new Error("エラーが発生しました！！");
    throw error;
  }
};
export const sentence2 = () => {
  //   function getAverage(nums: number[]) {
  //     if (nums.length === 0) {
  //       throw new Error("配列が空です");
  //     }
  //     return sum(nums) / nums.length;
  //   }
};

// 5.5.2 例外をキャッチするtry-catch文
export const sentence3 = () => {
  try {
    console.log("エラーを発生させます");
    throwError();
    console.log("エラーを発生させました");
  } catch (err) {
    console.log("エラーをキャッチしました");
    console.log(err);
  }
  console.log("おわり");
  function throwError() {
    const error = new Error("エラーが発生しました！！！！！！");
    throw error;
  }
};

// 5.5.3 例外処理と大域脱出
export const sentence4 = () => {
  function somefunc() {}
  try {
    somefunc();
  } catch (err) {
    //何も無ければエラーが発生しても無視と同じ
  }

  try {
    somefunc();
  } catch {
    //何もなし
  }
  function sum(nums: number[]): number {
    return nums.reduce((total, num) => total + num, 0);
  }
  function getAverage(nums: number[]) {
    if (nums.length === 0) {
      return undefined;
    }
    return sum(nums) / nums.length;
  }
};
export const sentence5 = () => {
  try {
    throwError();
    //tryブロックから脱出するのでここは実行されない
    console.log("これは表示されない");
  } catch (err) {
    console.log(err);
  }
  function throwError() {
    const error = new Error("エラーが発生しました！");
    throw error;
    //関数から脱出するのでここは表示されない
    console.log("ここは表示されない");
  }

  try {
    const bigInt = BigInt("foobar"); //ここでエラー発生
    //↓は実行されない
    console.log("BigInt");
  } catch (error) {
    //SyntaxError: Cannot convert foobar to a BigIntのエラー
    console.log(error);
  }
};

// 5.5.4 finallyで脱出に割り込む
export const sentence6 = () => {
  //try-catch-finallyの例
  try {
    console.log("tryブロック");
  } catch (err) {
    console.log("catchブロック");
  } finally {
    console.log("finallyブロック");
  }

  try {
    console.log("tryブロック");
  } finally {
    console.log("finallyブロック");
  }

  function throwError() {
    const error = new Error("エラーが発生しました！");
    throw error;
    //関数から脱出するのでここは表示されない
    console.log("ここは表示されない");
  }

  try {
    console.log("tryブロック");
    throwError();
  } catch (err) {
    console.log("catchブロック");
  } finally {
    console.log("finallyブロック");
  }
};
export const sentence7 = () => {
  try {
    console.log("エラーを発生させます");
    throwError();
    console.log("エラーを発生させました");
  } finally {
    console.log("finallyブロック");
  }
  console.log("try文の後ろ");

  function throwError() {
    throw new Error("エラーが発生しました！");
  }
};
export const sentence8 = () => {
  console.log(sum(100));

  function sum(max: number): number {
    try {
      let result = 0;
      for (let i = 1; i <= max; i++) {
        result += i;
      }
      return result;
    } finally {
      console.log("sumから脱出します");
    }
  }
};
export const sentence9 = () => {
  try {
    throwNull();
  } catch (err) {
    console.log(err, "がなけられんました");
  }
  function throwNull() {
    throw null;
  }
};
export const sentence10 = () => {
  class EmptyArrayError extends Error {}

  try {
getAverage([1, 2, 3]);
    getAverage([]);
  } catch (err) {
    if (err instanceof EmptyArrayError) {
      console.log("EmptyArrayErrorをキャッチしました");
    } else {
      throw err;
    }
  }

  function getAverage(nums: number[]) {
    if (nums.length === 0) {
      throw new EmptyArrayError("配列が空です");
    }
    return sum(nums) / nums.length;
  }
  function sum(nums: number[]): number {
    let result = 0;
    for (const num of nums) result += num;
    return result;
  }
};
export const sentence11 = () => {};
export const sentence12 = () => {};
export const sentence13 = () => {};
