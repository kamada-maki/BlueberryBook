import * as uhyo from "./uhyo.js";
//再エクスポート
import { name } from "./uhyo.js";
export { name };
console.log(uhyo.name); //"uhyo"と表示される
console.log(uhyo.age); //"26"と表示される

import type { Human } from "./human.js";
export const uhyo2: Human = {
  name: "uhyo",
  age: 26,
};
