import { getUhyoName } from "./uhyo.js";
import { increment, value } from "./counter.js";
import "./foo.js";
import "./bar.js";

console.log(`uhyoの名前は${getUhyoName()}です`);

console.log(`カウンタの値は${increment()}です`);
console.log(`カウンタの値は${value}です`); //カウンタの値は1です
console.log(`カウンタの値は${increment()}です`);
console.log(`カウンタの値は${value}です`); //カウンタの値は2です
console.log(`カウンタの値は${increment()}です`);
console.log(`カウンタの値は${value}です`); //カウンタの値は3です

//value = 100;//コンパイルエラーmoduleの宣言内でしか使えない
