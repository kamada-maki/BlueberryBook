// 5.3.1 継承（1）子は親の機能を受け継ぐ
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

  class PremiumUser extends User {
    rank: number = 1;
  }

  const uhyo = new PremiumUser("uhyo", 26);
  console.log(uhyo.rank); //1
  console.log(uhyo.name); //uhyo
  console.log(uhyo.isAdult()); //true

  function getMessage(u: User) {
    return `こんにちは、${u.name}さん`;
  }
  const john = new User("John Smith", 15);
  const uhyo2 = new PremiumUser("uhyo", 26);

  console.log(getMessage(john)); //"こんにちは、John Smithさん "
  console.log(getMessage(uhyo2)); //"こんにちは、uhyoさん"
};

// 5.3.2 継承（2）親の機能を上書きする
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

  class PremiumUser extends User {
    rank: number;

    //コンストラクタの継承はsuperを使う必要がある
    constructor(name: string, age: number, rank: number) {
      super(name, age);
      this.rank = rank;
    }
    //ここでisAdultを再宣言
    public isAdult(): boolean {
      return true;
    }

    //コンパイルエラー
    // public isAdult(): string {
    //   return "大人です";
    // }
  }

  const john = new User("John Smith", 15);
  const taro = new PremiumUser("Taro Yamada", 15, 1);

  console.log(john.isAdult()); //false
  console.log(taro.isAdult()); //true

  const uhyo = new PremiumUser("uhyo", 26, 3);
  console.log(uhyo.name); //"uhyo"
  console.log(uhyo.rank); //3
};
export const sentence3 = () => {
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
  class PremiumUser extends User {
    rank: number;

    //ageを100で固定にすることも可能
    constructor(name: string, rank: number) {
      super(name, 100); //コンストラクタ内でthisでアクセスする前にないとエラーになる
      this.rank = rank;
    }
  }
};

// 5.3.3 override修飾子とその威力
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
  }

  class PremiumUser extends User {
    rank: number = 1;

    //overrideでないものにつけるとコンパイルエラーになる
    //override rank: number = 1;

    //noImplicitOverrideが有効だとoverrideを明記しないとエラーになる
    public override isAdult(): boolean {
      return true;
    }
  }
};
export const sentence5 = () => {
  class User {
    name: string;
    #age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.#age = age;
    }

    public isChild(): boolean {
      return this.#age < 20;
    }
  }

  class PremiumUser extends User {
    rank: number = 1;

    //オーバーライドのつもりだったが、オーバーライドでなくなってしまった
    // public isAdult(): boolean {
    //   return true;
    // }

    //↓↓
    //overrideを明記しておく（あるいはnoImplicitOverrideを有効にしておく）ことでコンパイルエラーに気づくことができる
    // public override isAdult(): boolean {
    //   return true;
    // }
  }
};

// 5.3.4 privateとprotectedの動作の使いどころ
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

  class PremiumUser extends User {
    // public isAdult(): boolean {
    //   return this.#age >= 10; //ageがUserに属するプライベートメソッドのためエラーになる
    // }
  }
};
export const sentence7 = () => {
  class User {
    name: string;
    protected age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }

    public isAdult(): boolean {
      return this.age >= 20;
    }
  }

  class PremiumUser extends User {
    public isAdult(): boolean {
      return this.age >= 10;
    }
  }

  const miniUhyo = new PremiumUser("uhyo", 15);
  const john = new User("John Smith", 15);

  console.log(miniUhyo.isAdult()); //true
  console.log(john.isAdult()); //false

  //これはageはprotectedのためエラー
  //console.log(miniUhyo.age);
};
export const sentence8 = () => {
  class User {
    name: string;
    private age: number;
    private _isAdult: boolean;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
      this._isAdult = age >= 20;
    }
    public isAdult(): boolean {
      return this._isAdult;
    }
  }
};
export const sentence9 = () => {
  class User {
    name: string;
    protected age: number;
    private _isAdult: boolean;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
      this._isAdult = age >= 20;
    }

    public isAdult(): boolean {
      return this._isAdult;
    }
  }

  class PremiumUser extends User {
    //プレミアムユーザーは自分の年齢を編集できる
    public setAge(newAge: number) {
      this.age = newAge;
    }
  }

  const uhyo = new PremiumUser("uhoyo", 26);
  console.log(uhyo.isAdult); //true

  uhyo.setAge(15);
  console.log(uhyo.isAdult()); //true
};

export const sentence10 = () => {
  //privateと#の差異
  class User1 {
    private age = 0;
  }
  class SuperUser1 extends User1 {
    //private age = 1;//privateだと同じプライベートプロパティはエラーになる
  }

  class User2 {
    #age = 0;
  }
  class SuperUser2 extends User2 {
    #age = 1; //これはOK
  }
};

// 5.3.5 implementsキーワードによるクラスの型チェック
export const sentence11 = () => {
  type HasName = {
    name: string;
  };

  //Userクラスのインスタンス型がHasNameの部分型
  class User implements HasName {
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
};
export const sentence12 = () => {
  type HasName = {
    name: string;
  };

  //HasName型のnameがないためエラーとなる
  //   class User implements HasName {
  //     #age: number;

  //     constructor(age: number) {
  //       this.#age = age;
  //     }

  //     public isAdult(): boolean {
  //       return this.#age >= 20;
  //     }
  //   }
};
