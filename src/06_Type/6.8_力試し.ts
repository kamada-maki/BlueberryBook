// 6.8 力試し

export const sentence1 = () => {
  type Option<T> =
    | {
        tag: "some";
        value: T;
      }
    | {
        tag: "none";
      };

  function showNumberIfExists(obj: Option<number>): void {
    if (obj.tag === "some") {
      console.log(obj.value);
    }
  }

  const four: Option<number> = {
    tag: "some",
    value: 4,
  };

  const nothing: Option<number> = {
    tag: "none",
  };

  showNumberIfExists(four); //4
  showNumberIfExists(nothing); //何も表示されない

  function showNumberIfExists2(obj: Option<number>) {
    if (isSome(obj)) {
      console.log(obj.value);
    }
  }

  function isSome<T>(obj: Option<T>): obj is { tag: "some"; value: T } {
    return obj.tag === "some";
  }

  function mapOption<T, U>(
    obj: Option<T>,
    callback: (value: T) => U
  ): Option<U> {
    switch (obj.tag) {
      case "some":
        return {
          tag: "some",
          value: callback(obj.value),
        };
      case "none":
        return {
          tag: "none",
        };
    }
  }
};
