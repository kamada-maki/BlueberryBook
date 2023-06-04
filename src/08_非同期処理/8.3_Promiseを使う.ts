import { rejects } from "assert";
import { error } from "console";
import { readFile } from "fs/promises";
import { resolve } from "path";

// 8.3.1 Promise版のfsを使ってみる
export const sentence1 = () => {
  const p = readFile("foo.txt", "utf8");

  p.then((data) => {
    console.log(data);
  });
};
// 8.3.2 コールバック関数の登録とエラー処理
export const sentence2 = () => {
  const p = readFile("foo.txt", "utf8");

  p.then((result) => {
    console.log("1");
  });
  p.then((result) => {
    console.log("2");
  });
  p.then((result) => {
    console.log("3");
  });
};
export const sentence3 = () => {
  const p = readFile("foo.txt", "utf8");

  p.then((result) => {
    console.log("成功", result);
  });
  p.catch((error) => {
    console.log("失敗", error);
  });
};
export const sentence4 = () => {
  const p = readFile("foo.txt", "utf8");
  p.then(
    (result) => {
      console.log("成功", result);
    },
    (error) => {
      console.log("失敗", error); //any型になってしまう
    }
  );
};
export const sentence5 = () => {
  const p = readFile("foo.txt", "utf8");

  p.then(
    (result) => {
      console.log("成功", result);
    },
    (error: unknown) => {
      console.log("失敗", error);
    }
  );
};

// 8.3.3 コールバック関数とエラー処理（2）
export const sentence6 = () => {
  const p = readFile("foo.txt", "utf8");
  p.then((result) => {
    console.log("成功", result);
  });
  p.catch((error) => {
    console.log("失敗", error);
  });
  p.finally(() => {
    console.log("終わりました");
  });
};

// 8.3.4 自分でプロミスオブジェクトを作る
export const sentence7 = () => {
  const p = new Promise<number>((resolve) => {
    setTimeout(() => {
      resolve(100);
    }, 3000);
  });
  p.then((num) => {
    console.log(`結果は${num}`);
  });

  const sleep = (duration: number) => {
    return new Promise<void>((resolve) => {
      setTimeout(resolve, duration);
    });
  };
  sleep(3000).then(() => {
    console.log("3秒経ちました");
  });

  const sleepReject = (duraion: number) => {
    return new Promise<never>((resolve, reject) => {
      setTimeout(reject, duraion);
    });
  };
  sleepReject(3000).catch(() => {
    console.log("失敗！！");
  });
};

// 8.3.5 Promiseの静的メソッド（1）
// 静的メソッド：Promise.allのようにPromiseというクラスに対して直接プロパティアクセスできる状態
export const sentence8 = () => {
  const p = Promise.resolve(100);

  //Promise.resolve(100);と↓同じ
  new Promise((resolve) => {
    resolve(100);
  });

  p.then((result) => {
    console.log(`result is ${result}`);
  });

  //Promise.reject("foo")と同じ
  new Promise((resolve, reject) => {
    reject("foo");
  });
};
export const sentence9 = () => {
  const p = Promise.resolve();

  p.then(() => {
    console.log("2");
  });
  console.log("1");
};

// 8.3.6 Promiseの静的メソッド（2）
export const sentence10 = () => {
  const pFoo = readFile("foo.txt", "utf8");
  const pBar = readFile("bar.txt", "utf8");
  const pBaz = readFile("baz.txt", "utf8");

  const p = Promise.all([pFoo, pBar, pBaz]);
  p.then((results) => {
    console.log("foo.txt:", results[0]);
    console.log("bar.txt:", results[1]);
    console.log("baz.txt:", results[2]);
  });
};
export const sentence11 = () => {
  const p = Promise.all([
    readFile("foo.txt", "utf8"),
    readFile("bar.txt", "utf8"),
    readFile("baz.txt", "utf8"),
  ]);

  p.then((results) => {
    const [foo, bar, baz] = results;
    console.log("foo.txt:", foo);
    console.log("bar.txt:", bar);
    console.log("baz.txt:", baz);
  });
};
export const sentence12 = () => {
  const p = Promise.race([
    readFile("foo.txt", "utf8"),
    readFile("bar.txt", "utf8"),
    readFile("baz.txt", "utf8"),
  ]);
  p.then((result) => {
    console.log(result);
  });
};
export const sentence13 = () => {
  const sleepReject = (duration: number) => {
    return new Promise<never>((resolve, reject) => {
      setTimeout(reject, duration);
    });
  };
  const p = Promise.race([readFile("foo.txt", "utf8"), sleepReject(5000)]);
  p.then(
    (result) => {
      console.log("成功", "utf8");
    },
    (error: unknown) => {
      console.log("失敗", error);
    }
  );
};

// 8.3.7 Promiseの静的メソッド（3）
export const sentence14 = () => {
  const sleepReject = (duration: number) => {
    return new Promise<never>((resolve, reject) => {
      setTimeout(reject, duration);
    });
  };
  const p = Promise.allSettled([
    readFile("foo.txt", "utf8"),
    sleepReject(5000),
  ]);
  p.then((result) => {
    console.log(result);
  });
};
export const sentence15 = () => {
  const sleepReject = (duration: number) => {
    return new Promise<never>((resolve, reject) => {
      setTimeout(reject, duration);
    });
  };
  //   const p = Promise.any[readFile("foo.txt", "utf8"), sleepReject(5000)]);
  const p = Promise.all([readFile("foo.txt", "utf8"), sleepReject(5000)]);
  p.then((result) => {
    console.log(result);
  });
};

// 8.3.8 Promiseチェーン(1)チェーンを作る
export const sentence16 = () => {
  const p = readFile("foo.txt", "utf8");
  const p2 = p.then((result) => result + result);
  const p3 = p.catch(() => "");
  p2.then((result) => {
    console.log(result);
  });
};
export const sentence17 = () => {
  readFile("foo.txt", "utf8")
    .catch(() => "")
    .then((result) => {
      console.log(result);
    });

  readFile("foo.txt", "utf8")
    .finally(() => {
      console.log("foo.txt is loaded?");
    })
    .catch(() => "")
    .then((result) => {
      console.log(result);
    });
};

// 8.3.9 Promiseチェーンを(2) 非同期処理の連鎖
export const sentence18 = () => {
  const repeat10 = (str: string) =>
    new Promise<string>((resolve) => {
      setTimeout(() => resolve(str.repeat(10)), 1000);
    });

  readFile("foo,txt", "utf8")
    .then((result) => repeat10(result))
    .then((result) => {
      console.log(result);
    });
  const p1 = readFile("foo.txt", "utf8");
  const p3 = p1.then((result) => {
    const p2 = repeat10(result);
    return p2;
  });
  p3.then((result) => {
    console.log(result);
  });
};

// 8.3.10 Promisetチェーン(3) エラーの扱い
export const sentence19 = () => {
  const p1 = readFile("foo.txt", "utf8");
  const p2 = p1.then((result) => {
    throw new Error("Error!!!!!");
  });
  p2.then((result) => {
    console.log(result);
  });
};
export const sentence20 = () => {
  const sleepReject = (duration: number) => {
    return new Promise<never>((resolve, reject) => {
      setTimeout(reject, duration);
    });
  };
  const p = readFile("foo.txt", "utf8")
    .then(() => sleepReject(1000))
    .then(
      (result) => {
        console.log(result);
      },
      () => {
        console.log("失敗しました");
      }
    );

  //Promiseのエラーハンドリングがされていないエラーになる
  const p2 = readFile("foo.txt", "utf8")
    .then(() => sleepReject(1000))
    .then((result) => {
      console.log(result);
    });
  //↑はthen2つ目のコールバック関数を利用するかキャッチさせる
  const p3 = readFile("foo.txt", "utf8")
    .then(() => sleepReject(1000))
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log("エラーが発生しました！！", err);
    });
};
export const sentence21 = () => {
  const p = readFile("foo.txt", "utf8");
  const p2 = p.then((result) => {
    console.log("成功", result);
  });
  const p3 = p2.catch((error) => {
    console.log("失敗", error);
  });
};
// 8.3.11 dynamic import 構文
export const sentence22 = () => {
  import("fs/promises")
    .then(({ readFile }) => readFile("foo.txt", "utf8"))
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log("エラーが発生しました!!", error);
    });
};
