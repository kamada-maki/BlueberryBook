import exp from "constants";

// 5.1.1 クラスの宣言とnew構文
export const sentence1 = () => {
  class User {
    name: string = "";
    age: number = 0;
  }
  const uhyo = new User();
  console.log(uhyo.name); //""が表示される
  console.log(uhyo.age); //0が表示される

  uhyo.age = 26;
  console.log(uhyo.age); //26が表示される
};

export const sentence2 = () => {
  class User {
    name: string = "";
    age: number = 0;
  }
  const obj = {
    cl: User,
  };
  // new obj.clでUserのインスタンスが作成できる
  const uhyo = new obj.cl();
  console.log(uhyo.age); //0が表示される
};

// 5.1.2 プロパティを宣言する
export const sentence3 = () => {
  class User {
    name: string = "";
    // age: number;//エラー
    age: number = 0;
  }
  const uhyo = new User();
  console.log(uhyo.name); //""が表示される
  console.log(uhyo.age); //0が表示される
};

export const sentence4 = () => {
  class User {
    name?: string;
    age: number = 0;
  }
  const uhyo = new User();
  console.log(uhyo.name); //undefinedが表示される
  uhyo.name = "うひょ";
  console.log(uhyo.name); //"うひょ"が表示される
};
export const sentence5 = () => {
  class User {
    readonly name: string = "";
    age: number = 0;
  }
  const uhyo = new User();
  //uhyo.name ="うひょ";//nameは読み取り専用のためエラーになる
};

// 5.1.3 メソッドを宣言する
export const sentence6 = () => {
  class User {
    name: string = "";
    age: number = 0;

    isAdult(): boolean {
      return this.age >= 20;
    }

    setAge(newAge: number) {
      this.age = newAge;
    }
  }
  const uhyo = new User();
  console.log(uhyo.isAdult()); //false

  uhyo.setAge(26);
  console.log(uhyo.isAdult); //true

  //Userのクラスを2つ作成
  const uhyo2 = new User();
  const baby = new User();

  uhyo.age = 26;
  console.log(uhyo.isAdult()); //true
  console.log(baby.isAdult());
};

// 5.1.4 コンストラクタ
//コンストラクタとはnewによりインスタンスが生成される際に作成される関数
export const sentence7 = () => {
  class User {
    name: string;
    age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }

    isAdult(): boolean {
      return this.age >= 20;
    }
  }
  const uhyo = new User("uhyo", 26);
  console.log(uhyo.name); //"uhyo"が表示される
  console.log(uhyo.isAdult); //"true"が表示される
};

export const sentence8 = () => {
  class User {
    name: string;
    // age: number; コンストラクタ内に存在しないためエラーになる

    constructor(name: string, age: number) {
      this.name = name;
    }
  }
};

export const sentence9 = () => {
  class User {
    name: string;
    age: number;

    constructor(name: string, age: number) {
      // console.log(this.age);//初期化より前だとエラー
      this.name = name;
      this.age = age;

      console.log(this.age); //これはthis.ageに代入済なのでOK
    }
  }
};
export const sentence10 = () => {
  class User {
    name: string;
    readonly age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age; //コンストラクタ内は読み取り専用にも代入できる
    }

    setAge(newAge: number) {
      //   this.age = newAge; //エラー
    }
  }
  const uhyo = new User("uhyo", 26);
  // uhyo.age = 26; //読み取り専用のため代入しようとするとエラーになる
};

// 5.1.5 静的プロパティ・静的メソッド
export const sentence11 = () => {
  class User {
    static adminName: string = "uhyo";
    static getAdminUser() {
      return new User(User.adminName, 26);
    }

    name: string;
    age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }

    isAdult(): boolean {
      return this.age >= 20;
    }
  }

  console.log(User.adminName); //"uhyo"が表示される
  const admin = User.getAdminUser();
  console.log(admin.age); //26が表示される
  console.log(admin.isAdult); //true

  const uhyo = new User("uhyo", 26);
  //console.log(uhyo.adminName);//エラー
};

// 5.1.6 3種類のアクセシビリティ修飾子
export const sentence12 = () => {
  class User {
    name: string;
    private age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
    public isAdult(): boolean {
      return this.age >= 20;
    }
  }

  const uhyo = new User("uhyo", 26);
  console.log(uhyo.name);
  console.log(uhyo.isAdult());

  //console.log(uhyo.age);//エラー
};

// 5.1.7 コンストラクタ引数でのプロパティ宣言
export const sentence13 = () => {
  class User {
    name: string;
    private age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  }

  //↓↓以下のように省略可能
  class User2 {
    //修飾子は必須
    constructor(public name: string, private age: number) {}
  }
};

// 5.1.8 クラス式でクラスを作成する
export const sentence14 = () => {
  const User = class {
    name: string;
    age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }

    public isAdult(): boolean {
      return this.age >= 20;
    }
  };

  //Userは今までと同様に使用可能
  const uhyo = new User("uhyo", 26);
  console.log(uhyo.name); //"uhyo"
  console.log(uhyo.isAdult()); //true
};

// 5.1.9 もう1つのプライベートプロパティ
export const sentence15 = () => {
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
  console.log(uhyo.name); //"uhyo"が表示される
  console.log(uhyo.isAdult()); //trueが表示される

  //↓プロパティ '#age' には private 識別子が指定されているため、クラス 'User' の外部ではアクセスできません。のエラー
  //console.log(uhyo.#age)
};

// 5.1.10 クラスの静的初期化ブロック
export const sentence16 = () => {
  console.log("Hello");

  class C {
    static {
      console.log("uhyo");
    }
  }
  console.log("world");

  class User {
    #age: number = 0;
    getAge() {
      return this.#age;
    }
    setAge(age: number) {
      if (age < 0 || age > 150) {
        return;
      }
      this.#age = age;
    }
  }
};

export const sentence17 = () => {
  class User {
    static adminUser: User;
    static {
      this.adminUser = new User();
      this.adminUser.#age = 9999;
    }

    #age: number = 0;
    getAge() {
      return this.#age;
    }

    setAge(age: number) {
      if (age < 0 || age > 150) {
        return;
      }
      this.#age = age;
    }
  }
  console.log(User.adminUser.getAge());
};

// 5.1.11 型引数を持つクラス
export const sentence18 = () => {
  class User<T> {
    name: string;
    #age: number;
    readonly data: T;

    constructor(name: string, age: number, data: T) {
      this.name = name;
      this.#age = age;
      this.data = data;
    }
    public isAdult(): boolean {
      return this.#age >= 20;
    }
  }

  //uhyoはUser<string>型
  const uhyo = new User<string>("uhyo", 26, "追加データ");
  //dataはstring型
  const data = uhyo.data;

  //johnはUser<{num:number;}>型
  const john = new User("John Smith", 15, { num: 123 });
  //data2は{num:number;}型
  const data2 = john.data;
};
