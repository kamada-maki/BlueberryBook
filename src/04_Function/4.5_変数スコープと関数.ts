// 4.5.1 変数のスコープとは
export const sentence1 = () => {
  const repeat = function <T>(element: T, length: number): T[] {
    //この変数resultはrepeatの変数スコープに属する
    const result: T[] = [];
    for (let i = 0; i < length; i++) {
      result.push(element);
    }
    // const result = [];//エラー
    return result;
  };
  //関数の外にresultは存在しない
  // console.log(result); //エラー
};
export const sentence2 = () => {
  const repeatLength = 5;
  const repeat = function <T>(element: T): T[] {
    const result: T[] = [];
    for (let i = 0; i < repeatLength; i++) {
      result.push(element);
    }
    return result;
  };
  console.log(repeat("a")); //["a","a","a","a","a"]
};

export const sentence3 = () => {
  const repeatLength = 5;
  const repeat = function <T>(element: T): T[] {
    const repeatLength = 3;
    const result: T[] = [];
    for (let i = 0; i < repeatLength; i++) {
      result.push(element);
    }
    return result;
  };
  console.log(repeat("a")); //["a","a","a"]
  console.log(repeatLength); //5
};

// 4.5.2 ブロックスコープと関数スコープ
export const sentence4 = () => {
  function sabayomi(age: number) {
    if (age >= 20) {
      const lie = age - 5;
      return lie;
    }
    //console.log(lie); //エラー
    return age;
  }
};
export const sentence5 = () => {
  function sabayomi(age: number) {
    if (age >= 30) {
      const lie = age - 10;
      return lie;
    }
    if (age >= 20) {
      const lie = age - 5;
      return lie;
    }
    return age;
  }
};
export const sentence6 = () => {
  function sum(arr: number[]) {
    let result = 0;
    //この変数iはfor文の中のみのスコープに存在
    for (let i = 0; i < arr.length; i++) {
      result += arr[i];
    }
    //console.log(i);//ここでエラー
    return result;
  }
};
export const sentence7 = () => {
  function sabayomi(age: number) {
    var lie = age;
    if (age >= 20) {
      var lie = age - 5;
    }
    return lie;
  }
};
