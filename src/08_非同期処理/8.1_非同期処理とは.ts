// 8.1.1 時間のかかる処理としての非同期処理
// 8.1.2 シングルスレッドモデル・ノンブロッキング
export const sentence1 = () => {
  console.log("読み込みを開始します");
  const readFile = (x: string) => {
    console.log(x);
  };
  const data = readFile("filename.txt");
  console.log("読み込みました");
};
