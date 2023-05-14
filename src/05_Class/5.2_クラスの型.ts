// 5.2.1 クラス宣言はインスタンスの型をつくる
export const sentence1 = () => {
  class User {
    name: string = "";
    age: number = 0;

    isAdult(): boolean {
      return this.age >= 20;
    }
  }

  //これはもちろんOK
  const uhyo = new User();

  //これもOK
  const john: User = {
    name: "john shmith",
    age: 15,
    isAdult: () => true,
  };
};

export const sentence2 = () => {
  const User = class {
    name: string = "";
    age: number = 0;
    isAdult(): boolean {
      return this.age >= 20;
    }
  };
  //これはOK
  const uhyo = new User();
  //クラス式だとエラーになる
  //const john: User = new User();
};
export const sentence3 = () => {
  class User<T> {
    name: string;
    #age: number;
    readonly data: T;

    constructor(name: string, age: number, data: T) {
      this.name = name;
      this.#age = age;
      this.data = data;
    }
  }
  const uhyo: User<string> = new User("uhyo", 26, "追加データ");
};
export const sentence4 = () => {
  type Item = {
    name: string;
    price: number;
  };

  const apple: Item = {
    name: "りんご",
    price: 200,
  };
  const orange: Item = {
    name: "みかん",
    price: 150,
  };

  //エラー
  //   const orange: apple = {
  //     name: "みかん",
  //     price: 150,
  //   };

  console.log(apple, orange);

  //エラー
  //console.log(Item);
};

export const sentence5 = () => {
  //型名の名前空間にItemを作成
  type Item = {
    name: string;
    price: number;
  };
  //変数名の名前空間にItemを作成
  const Item: Item = {
    name: "りんご",
    price: 200,
  };
  //このItemは型名のItem
  const orange: Item = {
    name: "みかん",
    price: 150,
  };
  //このItemは変数名のItem
  console.log(Item);

  class User {
    name: string = "";
    age: number = 0;
  }
  //変数名と型名の両方の空化にに同時に作成をしていた
  const uhyo: User = new User();
};

// 5.2.2 newシグネチャによりインスタンス化可能性の表現
export const sentence6 = () => {
  class User {
    name: string = "";
    age: number = 0;
  }

  type MyUserConstructor = new () => User;
  //↓の書き方もできる
  type MyUserConstructor2 = {
    new (): User;
  };
  //UserはMyUserConstructor型を持つ
  const MyUser: MyUserConstructor = User;

  //MyUserはnewで使用可能
  const u = new MyUser();

  //uはUser型を持つ
  console.log(u.name, u.age);
};

// 5.2.3 instanceof演算子と型の絞り込み
export const sentence7 = () => {
  class User {
    name: string = "";
    age: number = 0;
  }

  const uhyo = new User();

  //uhyoはUserのインスタンスなのでtrue
  console.log(uhyo instanceof User);

  //{}はUserのインスタンスではないのでfalse
  console.log({} instanceof User);

  const john: User = {
    name: "John Smith",
    age: 15,
  };
  //johnはUserのインスタンスではないのでfalseになる
  console.log(john instanceof User);
};

export const sentence8 = () => {
  type HasAge = {
    age: number;
  };
  class User {
    name: string;
    age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  }

  function getPrice(customer: HasAge) {
    // if (customer instanceof User) {
    //   if (customer.name === "uhyo") {
    //     return 0;
    //   }
    // }
    if (customer instanceof User && customer.name === "uhyo") {
      return 0;
    }
    return customer.age < 18 ? 1000 : 1800;
  }

  const customer1: HasAge = { age: 15 };
  const customer2: HasAge = { age: 40 };
  const uhyo = new User("uhyo", 26);

  console.log(getPrice(customer1)); //1000
  console.log(getPrice(customer2)); //1800
  console.log(getPrice(uhyo)); //0
};
