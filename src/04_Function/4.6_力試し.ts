// 4.6.1 簡単な関数を書いてみよう 4.6.2解説
export const sentence1 = () => {
  const getFizzBuzzString = (i: number) => {
    if (i % 3 === 0 && i % 5 === 0) {
      return "FizzBuzz";
    } else if (i % 3 === 0) {
      return "Fizz";
    } else if (i % 5 === 0) {
      return "Buzz";
    } else {
      return i;
    }
  };
  for (let i = 1; i <= 100; i++) {
    const message = getFizzBuzzString(i);
    console.log(message);
  }
  const sequence = (start: number, end: number): number[] => {
    const result = [];
    for (let i = start; i <= end; i++) {
      result.push(i);
    }
    return result;
  };
  for (const i of sequence(1, 100)) {
    const message = getFizzBuzzString(i);
    console.log(message);
  }
};

// 4.6.3 コールバック関数の練習
export const sentence2 = () => {
  function map(array: number[], callback: (value: number) => number): number[] {
    const result: number[] = [];
    for (const elm of array) {
      result.push(callback(elm));
    }
    return result;
  }
  const data = [1, 1, 2, 3, 5, 8, 13];
  const result = map(data, (x) => x * 10);
  console.log(result); //[10,10,20,30,50,80,130]
};

export const sentence3 = () => {
  function map<T, U>(array: T[], callback: (value: T) => U): U[] {
    const result: U[] = [];
    for (const elm of array) {
      result.push(callback(elm));
    }
    return result;
  }
  const data = [1, -3, -2, 8, 0, -1];
  const result: boolean[] = map(data, (x) => x >= 0);
  console.log(result); //[true,false,false,true,true,false]
};
