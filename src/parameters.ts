export{};

const debugProfile = ( name: string, age: number ) => {
  console.log({ name, age });
}

debugProfile('Ham', 43);

// Parameters<typeof F>で関数Fの引数の型を取得する
// 他の人が作った関数など容易に変更できないものから取得することが多い
type Profile = Parameters<typeof debugProfile>;
// 定数profileに設定
const profile: Profile = ['Gloria', 76];
// 関数debugProfileの引数に入れることができる
debugProfile(...profile);

type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;
