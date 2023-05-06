// 3.4.1 型引数を持つ型を宣言する
export const sentence1 = () => {
  type User<T> = {
    name: string;
    child: T;
  };
  type Family<Parent, Child> = {
    mother: Parent;
    father: Parent;
    child: Child;
  };
  const obj: Family<number, string> = {
    mother: 0,
    father: 100,
    child: "1000",
  };
  //型指定がないとエラーになる
  //   const obj:Family = {
  //     mother:0,
  //     father:100,
  //     child:"1000"
  //   }
};

// 3.4.3 部分的型関係による型引数の制約
export const sentence2 = () => {
  type HasName = {
    name: string;
  };
  type Family<Parent extends HasName, Child extends HasName> = {
    mother: Parent;
    father: Parent;
    child: Child;
  };
  //エラーになる
  //type T = Family<number,string>

  type Animal = {
    name: string;
  };
  type Human = {
    name: string;
    age: number;
  };
  type T = Family<Animal, Human>;
};
export const sentence3 = () => {
  type HasName = {
    name: string;
  };
  type Family<Parent extends HasName, Child extends Parent> = {
    mother: Parent;
    father: Parent;
    child: Child;
  };
  type Animal = {
    name: string;
  };
  type Human = {
    name: string;
    age: number;
  };
  //これはOK
  type S = Family<Animal, Human>;
  //エラー
  //type T = Family<Human, Animal>;
};

// 3.4.4 オプショナルな型引数
export const sentence4 = () => {
  type Animal = {
    name: string;
  };
  type Family<Parent = Animal, Child = Animal> = {
    mother: Parent;
    father: Parent;
    child: Child;
  };
  // 通常通りの使い方
  type S = Family<string, string>;
  // TはFamily<Animal,Animal>と同じ
  type T = Family;
  // UはFamily<string,Animal>と同じ
  type U = Family<string>;
};
export const sentence5 = () => {
  type Animal = {
    name: string;
  };
  type HasName = {
    name: string;
  };
  type Family<Parent, Child = Animal> = {
    mother: Parent;
    father: Parent;
    child: Child;
  };
  type FamilyEx<Parent extends HasName, Child extends HasName = Animal> = {
    mother: Parent;
    father: Parent;
    child: Child;
  };
};
