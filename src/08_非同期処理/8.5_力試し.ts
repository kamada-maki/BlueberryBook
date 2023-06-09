// 8.5.1 fs/promiseを使ってみる
import { readFile } from "fs/promises";
import path, { resolve } from "path";
import { fileURLToPath } from "url";

const filePath = fileURLToPath(import.meta.url);
const fileDir = path.dirname(filePath);
const dataFile = path.join(fileDir, ".../uhyo.txt");

const sleep = (duration: number) => {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, duration);
  });
};
sleep(1).then(() => {
  process.exit;
});

const data = await readFile("uhyo.txt", { encoding: "utf-8" });
let count = 0;
let currentIndex = 0;
while (true) {
  const nextIndex = data.indexOf("uhyo", currentIndex);
  if (nextIndex >= 0) {
    count++;
    currentIndex = nextIndex + 1;
  } else {
    break;
  }
}
console.log(count);
