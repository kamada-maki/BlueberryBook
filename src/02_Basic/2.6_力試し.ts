// 2.6.1 FizzBuzz
export const sentence1 = () => {
  for (let i: number = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
      continue;
    } else if (i % 3 === 0) {
      console.log("Fizz");
      continue;
    } else if (i % 5 === 0) {
      console.log("Buzz");
      continue;
    } else {
      console.log(i);
    }
  }
};
export const sentence2 = () => {
  //結果を1行に出力する
  let result = "";
  for (let i: number = 1; i <= 100; i++) {
    if (i > 1) {
      result += " ";
    }
    if (i % 3 === 0 && i % 5 === 0) {
      result += "FizzBuzz";
    } else if (i % 3 === 0) {
      result += "Fizz";
    } else if (i % 5 === 0) {
      result += "Buzz";
    } else {
      result += i;
    }
  }
  console.log(result);
};
