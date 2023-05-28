import { Animal2, tama2, Animal3, tama3 } from "./animal.js";
import { type Animal } from "./animal.js";
const dog: Animal = {
  species: "Canis lupus familiaris",
  age: 2,
};
console.log(dog, tama2);
const myCat01: Animal = { ...tama2 };

//エラーになる
//const myCat: Animal3 = tama2;//型のエクスポートなので値として使えない

const myCat: typeof tama3 = {
  species: "Felis silvestirs catus",
  age: 0,
};
