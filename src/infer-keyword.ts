export{};

function add(a: number, b: number) {
  return a + b;
}
console.log(add(1, 2));

// 返り値の型を取得する
type ReturnTypeFromAdd = ReturnType<typeof add>;

// extendsの隣は関数縛り
// (...args: any) => anyは関数のこと
// inferは推論する
type MyReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;
