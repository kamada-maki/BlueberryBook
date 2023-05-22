// 6.5.1 型アサーションを用いて式の型をごまかす
// ※基本は避けるべき
export const sentence1 = () => {
  function getFirstFiveLetters(strOrNum: string | number) {
    const str = strOrNum as string;
    return str.slice(0, 5);
  }
  //"uhyoh"と表示される
  console.log(getFirstFiveLetters("uhyohyohyo"));
  //ランタイムエラーになる！！
  console.log(getFirstFiveLetters(123));
};
export const sentence2 = () => {
  type Animal = {
    tag: "animal";
    species: string;
  };
  type Human = {
    tag: "human";
    name: string;
  };
  type User = Animal | Human;

  function getNameIfAllHuman(users: readonly User[]): string[] | undefined {
    if (users.every((user) => user.tag === "human")) {
      //return users.map((user) => user.name); //エラー
      return (users as Human[]).map((user) => user.name); //エラー
    }
    return undefined;
  }

  //古い記法
  function getNameIfAllHuman2(users: readonly User[]): string[] | undefined {
    if (users.every((user) => user.tag === "human")) {
      return (<Human[]>users).map((user) => user.name);
    }
    return undefined;
  }
};
export const sentence3 = () => {
  type Human = {
    name: string;
    age: number;
  };
  function getOneUserName(user1?: Human, user2?: Human): string | undefined {
    if (user1 === undefined && user2 === undefined) {
      return undefined;
    }
    if (user1 !== undefined) {
      return user1.name;
    }
    // return user2.name;//エラー
  }
  function showOneUserName(user1?: Human, user2?: Human): string | undefined {
    if (user1 === undefined && user2 === undefined) {
      return undefined;
    }
    if (user1 !== undefined) {
      return user1.name;
    }
    return user2!.name;
    //return (user2 as Human).name;//こちらでもOK
  }
  function showOneUserName2(user1?: Human, user2?: Human): string | undefined {
    return user1?.name ?? user2?.name;
  }
};

// 6.5.2 as const の用法
export const sentence4 = () => {
  //string[]型
  const name1 = ["uhyo", "John", "Taro"];
  // readonly["uhyo","John","Taro"]型
  const names = ["uhyo", "John", "Taro"] as const;

  type Name = (typeof names)[number];
};
export const sentence5 = () => {
  type Name = "uhyo" | "John" | "Taro";
  const names: Name[] = ["uhyo", "John", "Taro"];
};
