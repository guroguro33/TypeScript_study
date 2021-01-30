export{};

function add(a: number, b: number) {
  return a + b;
}
console.log(add(1, 2));

// 返り値の型を取得する
type ReturnTypeFromAdd = ReturnType<typeof add>;