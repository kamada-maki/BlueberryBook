export type Animal = {
  species: string;
  age: number;
};

//↓でも可能
type Animal2 = {
  species: string;
  age: number;
};
const tama2: Animal2 = {
  species: "Felis silverstis catus",
  age: 1,
};
export { Animal2, tama2 };

type Animal3 = {
  species: string;
  age: number;
};
const tama3: Animal2 = {
  species: "Felis silverstis catus",
  age: 1,
};
export type { Animal3, tama3 };
