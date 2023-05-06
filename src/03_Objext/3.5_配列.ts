// 3.5.1 配列リテラルで配列を作成する
export const sentence1 = () => {
  const arr = [0, 123, -456 * 1000];
  console.log(arr);
  //複数の型も可能
  const arr2 = [100, "文字列", false];
};
export const sentence2 = () => {
  const arr1 = [4, 5, 6];
  const arr2 = [1, 2, 3, ...arr1];
  console.log(arr2); //[1,2,3,4,5,6]
};

// 3.5.2 配列の要素にアクセスする
export const sentence3 = () => {
  const arr = [0, 123, -456 * 100];
  console.log(arr[0]); //0
  console.log(arr[1]); //123
  console.log(arr); //[0,123,-45600]

  arr[1] = 5400;
  console.log(arr); //[0,5400,-45600]
  // これはエラー
  //arr = [1,2,345,67]
};

// 3.5.3 配列型の記法
export const sentence4 = () => {
  //これはOK
  const arr: number[] = [1, 10, 100];
  //これはエラー
  //const arr2: string[] = [123, -456];
};
export const sentence5 = () => {
  // 簡単な型の配列
  const arr1: boolean[] = [false, true];
  // 複雑な型の配列
  const arr2: Array<{ name: string }> = [
    { name: "山田さん" },
    { name: "田中さん" },
    { name: "鈴木さん" },
  ];
  const arr = [1, 10, 100];
  const arr3 = [100, "文字列", false];
};

// 3.5.4 readonly配列型
export const sentence6 = () => {
  const arr: readonly number[] = [1, 10, 100];
  //readonlyのためエラー
  // arr[1] = -500;
};

// 3.5.5 配列の機能を使う
export const sentence7 = () => {
  const arr = [1, 10, 100];
  arr.push(1000);
  console.log(arr); //[1,10,100,1000]

  // これはコンパイルエラー
  // arr.push("foobar");
};
export const sentence8 = () => {
  const arr: readonly number[] = [1, 10, 100];
  // readonlyのためエラー
  // arr.push(1000);
};
export const sentence9 = () => {
  const arr = [1, 10, 100];
  console.log(arr.includes(100)); //true
  console.log(arr.includes(1000)); //false

  //コンパイルエラー
  //console.log(arr.includes("foobar"));
};
export const sentence10 = () => {
  const arr = [1, 10, 100];
  console.log(arr.length); //3
  arr.push(1000);
  console.log(arr.length); //4
};

// 3.5.6 for-of文によるループ
export const sentence11 = () => {
  const arr = [1, 10, 100];
  for (const elm of arr) {
    console.log(elm);
  }
  for (let elm of arr) {
    elm *= 10;
    console.log(elm);
  }
};

// 3.5.7 タプル型
// タプル型：要素数が固定された配列型
export const sentence12 = () => {
  let tuple: [string, number] = ["foo", 0];
  tuple = ["aiueo", -555];
  const str = tuple[0]; //strはstring型
  const num = tuple[1]; //numはnumber型
  //const nothing = tuple[2];//エラー

  // ラベル付きタプル型
  type User = [name: string, age: number];
  const uhyo: User = ["uhyo", 26];
  console.log(uhyo[1]);
};
export const sentence13 = () => {
  const arr = [1, 10, 100];
  const num:number = arr[100];//100番目は存在しない
  console.log(num);//undifinedと表示される
};
