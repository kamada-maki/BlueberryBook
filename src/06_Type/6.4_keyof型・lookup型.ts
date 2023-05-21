// 6.4.1 lookup型とは
export const sentence1 = () => {
  type Human = {
    type: "human";
    name: string;
    age: number;
  };

  function setAge(human: Human, age: Human["age"]) {
    return {
      ...human,
      age,
    };
  }
  const uhyo: Human = {
    type: "human",
    name: "uhyo",
    age: 26,
  };
  const uhyo2 = setAge(uhyo, 27);
  console.log(uhyo2); //{ type: 'human', name: 'uhyo', age: 27 }
};
export const sentence2 = () => {
  type Human = {
    type: "human";
    name: string;
    age: bigint;
  };
  function setAge(human: Human, age: Human["age"]) {
    return {
      ...human,
      age,
    };
  }
  const uhyo: Human = {
    type: "human",
    name: "uhyo",
    age: 26n,
  };
  const uhyo2 = setAge(uhyo, 27n);
  console.log(uhyo2);
};

// 6.4.2 keyof型とは
export const sentence3 = () => {
  type Human = {
    name: string;
    age: number;
  };
  type HumanKeys = keyof Human;

  let key: HumanKeys = "name";
  key = "age";
  //   key = "hoge";//エラー

  const mmConversionTable = {
    mm: 1,
    cm: 10, //追加
    m: 1e3,
    km: 1e6,
  };

  function convertUnits(value: number, unit: keyof typeof mmConversionTable) {
    const mmValue = value * mmConversionTable[unit];
    return {
      mm: mmValue,
      m: mmValue / 1e3,
      km: mmValue / 1e6,
    };
  }
  console.log(convertUnits(5600, "m")); //{"mm":5600000,"m":5400,"km":5.6}

  console.log(convertUnits(3000000, "cm")); //{"mm":3000000,"m":3000,"km":3}

  //エラー:型 '"kg"' の引数を型 '"mm" | "m" | "km"' のパラメーターに割り当てることはできません。
  //console.log(convertUnits(5600,"kg"));
};
export const sentence4 = () => {};
export const sentence5 = () => {};
export const sentence6 = () => {};
export const sentence7 = () => {};
