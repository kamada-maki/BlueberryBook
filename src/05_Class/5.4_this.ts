// 5.4.1 関数の中のthisは呼び出し方によって決まる
export const sentence1 = () => {
  class User {
    name: string;
    #age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.#age = age;
    }

    public isAdult(): boolean {
      return this.#age >= 20;
    }
  }
  const uhyo = new User("uhyo", 26);
  const john = new User("John Smith", 15);

  console.log(uhyo.isAdult === john.isAdult); //trueが表示される
};
export const sentence2 = () => {
  class User {
    name: string;
    #age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.#age = age;
    }

    public isAdult(): boolean {
      return this.#age >= 20;
    }
  }

  const uhyo = new User("uhyo", 26);
  const isAdult = uhyo.isAdult;
  console.log(isAdult());
};
export const sentence3 = () => {
  const user = {
    name: "uhyo",
    age: 26,
    isAdult() {
      return this.age >= 20;
    },
  };
  console.log(user.isAdult()); //true
  user.age = 15;
  console.log(user.isAdult()); //false
};

// 5.4.2 アロー関数におけるthis
export const sentence4 = () => {
  class User {
    name: string;
    #age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.#age = age;
    }

    public isAdult(): boolean {
      return this.#age >= 20;
    }

    public filterOlder(users: readonly User[]): User[] {
      return users.filter((u) => u.#age > this.#age);

      //これだとエラー
      //return users.filter(function(u){return u.#age >this.#age})

      //return users.filter(function (this: User, u) {
      //return u.#age > this.#age;
      //});
    }
  }

  const uhyo = new User("uhyo", 25);
  const john = new User("John Smith", 15);
  const bob = new User("Bob", 40);

  const older = uhyo.filterOlder([john, bob]);
  console.log(older); //[User {name:"Bob"}]と表示される
};
export const sentence5 = () => {
  class User {
    name: string;
    #age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.#age = age;
    }

    public isAdult(): boolean {
      return this.#age >= 20;
    }

    public filterOlder(users: readonly User[]): User[] {
      const _this = this;
      return users.filter((u) => u.#age > _this.#age);
    }
  }
};

// 5.4.3 thisを操作するメソッド
export const sentence6 = () => {
  class User {
    name: string;
    #age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.#age = age;
    }

    public isAdult(): boolean {
      return this.#age >= 20;
    }
  }

  const uhyo = new User("uhyo", 25);
  const john = new User("John Smith", 15);

  console.log(uhyo.isAdult()); //true

  //uhyo,isAdultを、johnをthisとして呼び出す
  console.log(uhyo.isAdult.apply(john, [])); //false

  //thisがuhyoに固定されたisAdult
  const boundIsAdult = uhyo.isAdult.bind(uhyo);

  console.log(boundIsAdult()); //true
  console.log(boundIsAdult.call(john)); //true
};

// 5.4.4 関数の中以外のthis
export const sentence7 = () => {
  class A {
    foo = 123;
    bar = this.foo + 100;
  }
  const obj = new A();
  console.log(obj.bar); //223
};
export const sentence8 = () => {
  class A {
    foo = 123;
    bar = this.foo + 100;
    getfoo() {
      return this.foo;
    }
  }
  const obj = new A();
  console.log(obj.bar, obj.getfoo()); //223 123
};
export const sentence9 = () => {
  class A {
    static foo = 123;
    static bar = this.foo * 2;
    static {
      console.log("bar is ", this.bar); //"bar is" 246と表示される
    }
  }
};
export const sentence10 = () => {
  const map = new Map<string, number>();
  console.log(map instanceof Map); //true
};
export const sentence11 = () => {
  class RepeatArray<T> extends Array<T> {
    repeat(times: number): RepeatArray<T> {
      const result = new RepeatArray<T>();
      for (let i = 0; i < times; i++) {
        result.push(...this);
      }
      return result;
    }
  }

  //[1,2]に相当するRepeatArrayを作成
  const arr = new RepeatArray(1, 2);
  //pushで[1,2,3にする]
  arr.push(3);
  //arr.repeat(3)は[1,2,3,1,2,3,1,2,3]に相当するRepeatArray
  const repeated = arr.repeat(3);

  //RepearArray(9)[1,2,3,1,2,3,1,2,3]と表示される
  console.log(repeated);
};
