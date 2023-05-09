import { get } from "http";

// 4.3.1 返り値の型による部分型関係
export const sentence1 = () => {
  type HasName = {
    name: string;
  };
  type HasNameAndAge = {
    name: string;
    age: number;
  };
  const fromAge = (age: number): HasNameAndAge => ({
    name: "John Smith",
    age,
  });
  const f: (age: number) => HasName = fromAge;
  const obj: HasName = f(100);

  const f2 = (name: string) => {
    {
      name;
    }
  };
  const g: (name: string) => void = f2;
};

// 4.3.2 引数の型による部分型関係
export const sentence2 = () => {
  type HasName = {
    name: string;
  };
  type HasNameAndAge = {
    name: string;
    age: number;
  };
  const showName = (obj: HasName) => {
    console.log(obj.name);
  };
  const g: (obj: HasNameAndAge) => void = showName;
  g({
    name: "uhyo",
    age: 26,
  });
};

// 4.3.3 引数の数による部分型関係
export const sentence3 = () => {
  type UnaryFunc = (arg: number) => number;
  type BinaryFunc = (left: number, right: number) => number;

  const double: UnaryFunc = (arg) => arg * 2;
  const add: BinaryFunc = (left, right) => left + right;

  //UnaryFuncをBinaryFuncとして扱うことができる
  const bin: BinaryFunc = double;
  console.log(bin(10, 100));
};
export const sentence4 = () => {
  type HasName = { name: string };
  type HasNameAndAge = { name: string; age: number };
  type Obj = {
    func: (arg: HasName) => string;
    method(arg: HasName): string;
  };
  const something: Obj = {
    func: (user) => user.name,
    method: (user) => user.name,
  };
  const getAge = (user: HasNameAndAge) => String(user.age);

  // something.func=getAge//エラー
  something.method = getAge;
};

export const sentence5 = () => {
  function sum(nums: readonly number[]): number {
    let result = 0;
    for (const num of nums) {
      result += num;
    }
    return result;
  }
  //sumsにはreadonly number[]型を与えることができる
  const nums1: readonly number[] = [1, 10, 100];
  console.log(sum(nums1)); //111

  //sumsにはnumber[]型も与えることができる
  const nums2: number[] = [1, 1, 2, 3, 5, 8];
  console.log(sum(nums2)); //20
};
export const sentence6 = () => {
  function fillZero(nums: number[]): void {
    for (let i = 0; i < nums.length; i++) {
      nums[i] = 0;
    }
  }

  //fillZeroにはnumber[]型を与えることができる
  const nums1: number[] = [1, 10, 100];
  fillZero(nums1);
  console.log(nums1);

  //fillZeroにはreadonly number[]型を与えるとエラー
  const nums2: readonly number[] = [1, 10, 100];
  // fillZero(nums2);//エラー
};
export const sentence7 = () => {
  type User = { name: string };
  type ReadOnlyUser = { readonly name: string };

  const uhyoify = (user: User) => {
    user.name = "uhyo";
  };
  const john: ReadOnlyUser = {
    name: "John Smith",
  };
  // john.name = "Nanashi";//readonlyのためエラー

  uhyoify(john); //readonlyなのにこれはエラーにならない
  console.log(john.name);//"uhyoと表示される"
};
