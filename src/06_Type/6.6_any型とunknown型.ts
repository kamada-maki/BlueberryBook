// 6.6.1 any型という最終兵器
// TypeScriptにおいて最凶の危険性を誇る機能
export const sentence1 = () => {
  function doWhatever(obj: any) {
    //好きなプロパティにアクセスできる
    console.log(obj.users.name);

    //関数呼び出しもできる
    obj();

    //計算もできる
    const result = obj * 10;
    return result;
  }

  //全てコンパイルエラーは発生しないがランタイムエラーになる
  doWhatever(3);
  doWhatever({
    user: {
      name: "uhyo",
    },
  });
  doWhatever(() => {
    console.log("hi");
  });

  function useNumber(num: number) {
    console.log(num);
  }
  function doWhatever2(obj: any) {
    //string型の変数に入れられる
    const str: string = obj;
    //number型を要求する関数に渡せる
    useNumber(obj);
  }
};

// 6.6.2 any型の存在理由
// 明確な理由がない限り基本は避けるべき。TypeScriptを使う意味がない

// 6.6.3 anyに近いが安全なunknown型
export const sentence2 = () => {
  function doNothing(val: unknown) {
    console.log(val);
    // const name = val.name;//エラー
  }

  doNothing(3);
  doNothing({
    user: {
      name: "uhyo",
    },
  });
  doNothing(() => {
    console.log("hi");
  });
};
export const sentence3 = () => {
  function useUnknown(val: unknown) {
    if (typeof val === "string") {
      console.log("valは文字列です");
      console.log(val.slice(0, 5));
    } else {
      console.log("valは文字列以外の何かです");
      console.log(val);
    }
  }
};
