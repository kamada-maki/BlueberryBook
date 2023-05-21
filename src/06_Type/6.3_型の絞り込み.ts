// 6.3.1 等価演算子を用いる絞り込み
export const sentence1 = () => {
  type SignType = "plus" | "minus";
  function signNumber(type: SignType) {
    return type === "plus" ? 1 : -1;
  }
  function numberWithSign(num: number, type: SignType | "none") {
    if (type === "none") {
      //ここではtypeは"none"型
      return 0;
    } else {
      //ここではtypeはSignType型
      return num * signNumber(type);
    }
  }
  console.log(numberWithSign(5, "plus")); //5
  console.log(numberWithSign(5, "minus")); //-5
  console.log(numberWithSign(5, "none")); //0

  function numberWithSign2(num: number, type: SignType | "none") {
    if (type === "none") {
      // ここではtype型はnone
      return 0;
    }
    return num * signNumber(type);
  }

  function numberWithSign3(num: number, type: SignType | "none") {
    return type === "none" ? 0 : num * signNumber(type);
  }
  console.log(numberWithSign2(5, "minus")); //5
  console.log(numberWithSign3(3, "plus")); //3
};

// 6.3.2 typeof演算子を用いる絞り込み
export const sentence2 = () => {
  console.log(typeof "uhyo"); //"string"と表示される
  console.log(typeof 26); //"number"と表示される
  console.log(typeof {}); //"object"と表示される
  console.log(typeof undefined); //"undifined"と表示される

  function formatNumberOrString(value: string | number) {
    if (typeof value === "number") {
      return value.toFixed(3);
    } else {
      return value;
    }
  }
  console.log(formatNumberOrString(3.14)); //3.140と表示される
  console.log(formatNumberOrString("uhyo")); //"uhyo"と表示される
};

// 6.3.3 代数的データ型をユニオン型で再現するテクニック
export const sentence3 = () => {
  type Animal = {
    tag: "animal";
    species: string;
  };
  type Human = {
    tag: "human";
    name: string;
  };
  type User = Animal | Human;

  const tama: User = {
    tag: "animal",
    species: "Felis silvertris catus",
  };
  const uhyo: User = {
    tag: "human",
    name: "uhyo",
  };

  //これは代入できない
  //   const alien: User = {
  //     tag: "alian",
  //     name: "gray",
  //   };

  function getUserName(user: User) {
    if (user.tag === "human") {
      //ここではuserはhuman型
      return user.name;
    } else {
      //ここではuserはanimal型
      return "名無し";
    }
  }
  console.log(getUserName(tama)); //"名無し"と表示される
  console.log(getUserName(uhyo)); //"uhyo"と表示される
};

// 6.3.4 switch文でも型を絞り込める
export const sentence4 = () => {
  type Animal = {
    tag: "animal";
    species: string;
  };
  type Human = {
    tag: "human";
    name: string;
  };
  type User = Animal | Human;

  function getUserName(user: User) {
    switch (user.tag) {
      case "human":
        return user.name;
      case "animal":
        return "名無し";
    }
  }
};
export const sentence5 = () => {
  type Animal = {
    tag: "animal";
    species: string;
  };
  type Human = {
    tag: "human";
    name: string;
  };

  type Robot = {
    tag: "robot";
    name: string;
  };
  type User = Animal | Human | Robot;

  function getUserName(user: User): string {
    if (user.tag === "human") {
      return user.name;
    } else {
      return "名無し";
    }
  }

  //エラー：関数に終了の return ステートメントがないため、戻り値の型には 'undefined' が含まれません。
  //   function getUserName2(user: User): string {
  //     switch (user.tag) {
  //       case "human":
  //         return user.name;
  //       case "animal":
  //         return "名無し";
  //     }
  //   }

  function getUserName2(user: User): string {
    switch (user.tag) {
      case "human":
        return user.name;
      case "animal":
        return "名無し";
      case "robot":
        return `CPU ${user.name}`;
    }
  }
};

