import { readFile, writeFile } from "fs/promises";

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

//8.4.2 await式も使ってみる
export const sentence4 = () => {
  const sleep = (duration: number) => {
    return new Promise<void>((resolve) => {
      setTimeout(resolve, duration);
    });
  };
  async function get3() {
    await sleep(1000);
    return 3;
  }
  const p = get3();
  p.then((num) => {
    console.log(`num is ${num}`);
  });
};
export const sentence5 = () => {
  const sleep = (duration: number) => {
    return new Promise<void>((resolve) => {
      setTimeout(resolve, duration);
    });
  };
  async function get3() {
    console.log("get3が呼び出されました");
    await sleep(1000);
    console.log("awaitの次に進みました");
    return 3;
  }
  console.log("get3を呼び出します");
  const p = get3();
  p.then((num) => {
    console.log(`num is ${num}`);
  });
  console.log("get3を呼び出しました");
};

// 8.4.3 awaitの返り値
export const sentence6 = () => {
  const sleep = (duration: number) => {
    return new Promise<void>((resolve) => {
      setTimeout(resolve, duration);
    });
  };

  async function get3() {
    await sleep(1000);
    return 3;
  }
  async function main() {
    const num1 = await get3();
    const num2 = await get3();
    const num3 = await get3();
    return num1 + num2 + num3;
  }
  main().then((result) => {
    console.log(`result is ${result}`);
  });
};
export const sentence7 = () => {
  async function main() {
    const { readFile, writeFile } = await import("fs/promises");
    const fooContent = await readFile("foo.txt", "utf8");

    //2倍にしてbar.txtに書き込む
    await writeFile("bar.txt", fooContent + fooContent);
    console.log("書き込み完了しました");
  }
  main().then(() => {
    console.log("main()が完了しました");
  });
};

//8.4.4 awaitとエラー処理
export const sentence8 = () => {
  async function main() {
    const { readFile, writeFile } = await import("fs/promises");

    try {
      const fooContent = await readFile("foo.txt", "utf8");
      //2倍にしてbar.txtに書き込む
      await writeFile("bar.txt", fooContent + fooContent);
      console.log("書き込み完了しました");
    } catch {
      console.log("失敗しました");
    }
  }

  main().then(() => {
    console.log("main()が成功しました");
  });
};

// 8.4.5 async関数のいろいろな宣言方法
export const sentence9 = () => {
  const main = async function () {
    const fooContent = await readFile("foo.txt", "utf8");

    // 2倍にしてbar.txtに書き込む
    await writeFile("bar.txt", fooContent + fooContent);
    console.log("書き込みが完了しました");
  };

  const main2 = async () => {
    const fooContent = await readFile("foo.txt", "utf8");
    //2倍にしてbar.txtに書き込む
    await writeFile("bar.txt", fooContent + fooContent);
    console.log("書き込み完了しました");
  };
};
