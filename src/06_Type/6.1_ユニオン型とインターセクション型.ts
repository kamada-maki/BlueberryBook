// 6.1.1 ユニオン型の基本
export const sentence1 = () => {
  type Animal = {
    species: string;
  };
  type Human = {
    name: string;
  };
  type User = Animal | Human;

  //このオブジェクトはAnimal型なのでUser型に代入可能
  const tama: User = {
    species: "Felis silvestris catus",
  };
  //このオブジェクトはHuman型なのでUser型に代入可能
  const uhyo: User = {
    name: "uhyo",
  };
  //これはコンパイルエラー
  //   const book: User = {
  //     title: "Software Design",
  //   };

  //   function getName(user: User): string {
  //     return user.name;//コンパイルエラー
  //   }
};

const sentence2 = () => {
  type Human = {
    name: string;
    age?: number;
  };
  const uhyo: Human = {
    name: "uhyo",
    age: 26,
  };
  const john: Human = {
    name: "John Smith",
  };
};
//2種類のない：「型にない」「実際にない」を理解すること
const sentence3 = () => {
  type Animal = {
    species: string;
  };
  const cat = {
    species: "Felis silvestirs catus",
    age: "永遠の17歳",
  };
  const animal: Animal = cat;
};

// 6.1.2 伝播するユニオン型
const sentence4 = () => {
  type Animal = {
    species: string;
    age: string;
  };
  type Human = {
    name: string;
    age: number;
  };
  type User = Animal | Human;

  const tama: User = {
    species: "Felis silvestirs catus",
    age: "永遠の17歳",
  };
  const uhyo: User = {
    name: "uhyo",
    age: 26,
  };

  function showAge(user: User) {
    //コンパイルエラーが発生しない
    const age = user.age;
    console.log(age);
  }

  type MysteryFunc = ((str: string) => string) | ((str: string) => number);
  function useFunc(func: MysteryFunc) {
    const result = func("uhyo");
    console.log(result);
  }

  type MaybeFunc = ((str: string) => string) | string;
  //↓コンパイルエラー
  //   function useFunc2(func: MaybeFunc) {
  //     const result = func("uhyo");
  //   }
};

// 6.1.3 インターセクション型とは
const sentence5 = () => {
  type Animal = {
    species: string;
    age: number;
  };
  type Human = Animal & {
    name: string;
  };
  //↓とほぼ同じ意味
  //   type Human = {
  //     species: string;
  //     age: number;
  //     name: string;
  //   };
  const tama: Animal = {
    species: "Felis silvestris catus",
    age: 3,
  };
  const uhyo: Human = {
    species: "Homo sapiens sapiens",
    age: 26,
    name: "uhyo",
  };

  type stringAndNumber = string & number;
  //   const cat1: Animal & string = "cat"; //エラー
  //   const cat2: Animal & string = {
  //     species: "Felis silvestris catus",
  //     age: 3,
  //   };
};

// 6.1.4 ユニオン型とインターセクション型の表裏一体な関係
const sentence6 = () => {
  type Human = { name: string };
  type Animal = { species: string };
  function getName(human: Human) {
    return human.name;
  }
  function getSpecies(animal: Animal) {
    return animal.species;
  }

  //const mysteruFunc: ((human: Human) => string) | ((animal: Animal) => string)
  const mysteruFunc = Math.random() < 0.5 ? getName : getSpecies;
  const uhyo: Human = {
    name: "uhyo",
  };
  //mysteruFunc(uhyo); //エラー
  const cat: Animal = {
    species: "cat",
  };
  //mysteruFunc(cat); //エラー

  const uhyo2: Human & Animal = {
    name: "uhyo",
    species: "Homo sapiens sapiens",
  };

  //エラーなく呼び出せる
  const value = mysteruFunc(uhyo2);
  console.log(value);
};

// 6.1.5 オプショナルプロパティ再訪
const sentence7 = () => {
  type Human = {
    name: string;
    age?: number;
  };

  const uhyo: Human = {
    name: "uhyo",
    age: 25,
  };
  const john: Human = {
    name: "John Smith",
    age: undefined, //明示的にundifinedを入れることも可能
  };
};
const sentence8 = () => {
  type Human = {
    name: string;
    age: number | undefined;
  };
  const uhyo: Human = {
    name: "uhyo",
    age: 25,
  };
  const john: Human = {
    name: "John Smith",
    age: undefined,
  };

  //ageが必須なのでエラー
  //   const taro: Human = {
  //     name: "Taro Yamada",
  //   };
};
const sentence9 = () => {
  type Human = {
    name: string;
    age?: number;
  };
  const john: Human = {
    name: "John Smith",
    age: undefined, //exactOptionalPropertyTyesが有効ならエラーになる
  };
};

// 6.1.6 オプショナルチェイニングによるプロパティアクセス
const sentence10 = () => {
  type Human = {
    name: string;
    age: number;
  };
  function useMaybeHuman(human: Human | undefined) {
    //Humanだったらプロパティにアクセスするがundifinedならアクセスしない
    const age = human?.age;
    console.log(age);
  }

  type GetTimeFunc = () => Date;
  function useTime(getTimeFunc: GetTimeFunc | undefined) {
    const timeOrUndifined = getTimeFunc?.();
    const timeOrUndifinedToString = getTimeFunc?.().toString(); //undifinedの場合getTImeFuncの後すべて飛ばす
  }

  type User = {
    isAdult(): boolean;
  };
  const showSpecialContents = (x: User) => {
    console.log(x);
  };
  function checkForAdultUser(user: User | null) {
    if (user?.isAdult()) {
      showSpecialContents(user);
    }
  }
};
