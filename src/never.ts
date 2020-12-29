export { };
  
// 呼び元に戻ってこない（例外を投げるから）
function error(message: string): never {
  throw new Error(message);
}

try {
  let result = error('test');
  console.log({ result });
} catch (error) {
  console.log({ error });
}

let foo: void = undefined;
// never型の関数は代入できる
let bar: never = error('only me');