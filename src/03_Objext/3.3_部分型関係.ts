import { type } from "os";

// 3.3.1 部分型とは
export const sentence1 = () => {
  type FooBar = {
    foo: string;
    bar: number;
  };
  type FooBarBaz = {
    foo: string;
    bar: number;
    baz: boolean;
  };
  const obj: FooBarBaz = {
    foo: "hi",
    bar: 1,
    baz: false,
  };
  const obj2: FooBar = obj;
};

// 3.3.2 プロパティの包含関係による部分的型関係の発生
// 型Sと型Tがオブジェクト型であった場合
// ①Tが持つプロパティは全てSにも存在する
// ②条件①のプロパティについて、Sにおけるプロパティの型はTにおけるプロパティの型の部分型（または同じ型）である
export const sentence2 = () => {
  //HumanはAnimalの部分型
  type Animal = {
    age: number;
  };
  type Human = {
    age: number;
    name: string;
  };

  type AnimalFamily = {
    familyName: string;
    mother: Animal;
    father: Animal;
    child: Animal;
  };
  type HumanFamily = {
    familyName: string;
    mother: Human;
    father: Human;
    child: Human;
  };
};

// 3.3.3 余剰プロパティに対する型エラーについて
export const sentence3 = () => {
  type User = { name: string; age: number };
  const u: User = {
    name: "uhyo",
    age: 26,
    // telNumber:"09012345678" エラー
  };
};
export const sentence4 = () => {
  type User = { name: string; age: number };
  const obj = {
    name: "uhyo",
    age: 26,
    telNumber: "09012345678",
  };
  const u: User = obj;
};
