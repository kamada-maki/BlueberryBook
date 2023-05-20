// 5.6.1 クラスに置き換えてみる
export const sentence1 = () => {
  type User = {
    name: string;
    age: number;
  };
  function createUser(name: string, age: number): User {
    if (name === "") {
      throw new Error("名前は空にはできません");
    }
    return {
      name,
      age,
    };
  }
  function getMessage(user: User, message: string): string {
    return `${user.name}(${user.age}) 「${message}`;
  }
  const uhyo = createUser("uhyo", 26);
  console.log(getMessage(uhyo, "こんにちは"));
};
export const sentence2 = () => {
  class User {
    name: string;
    age: number;

    constructor(name: string, age: number) {
      if (name === "") {
        throw new Error("名前は空にはできません");
      }
      this.name = name;
      this.age = age;
    }
    getMessage(message: string): string {
      return `${this.name}(${this.age}) 「${message}`;
    }
  }
  const uhyo = new User("uhyo", 26);
  console.log(uhyo.getMessage("こんにちは"));
};
export const sentence3 = () => {
  class User {
    readonly #name: string;
    readonly #age: number;

    constructor(name: string, age: number) {
      if (name === "") {
        throw new Error("名前は空にはできません");
      }
      this.#name = name;
      this.#age = age;
    }
    getMessage(message: string): string {
      return `${this.#name}(${this.#age}) 「${message}`;
    }
  }
};

// 5.6.3 クラスを関数に置き換えてみる
export const sentence4 = () => {
  function createUser(name: string, age: number) {
    return (message: string) => {
      return `${name}(${age}) 「${message}」`;
    };
  }
  const getMessage = createUser("uhyo", 26);
  console.log(getMessage("こんにちは"));
};
