import uhyoAge from "./uhyoAge.js";
//defaultインポートの構文を使う書き方
//import increment, { value } from "./counter.js";
//defaultインポートの構文を使わない書き方
import { default as increment, value } from "./counter.js";

console.log(`uhyoの年齢は${uhyoAge}です`); //uhyoの年齢は26ですと表示される

console.log(`カウンタの値は${increment()}です`);
console.log(`カウンタの値は${increment()}です`);
console.log(`カウンタの値は${increment()}です`);
console.log(`カウンタの値は${increment()}です`);
