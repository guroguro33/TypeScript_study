export{};

let fooCompatible: any;
let barCompatible: string = 'Typescript';

console.log(typeof fooCompatible);

fooCompatible = barCompatible;

console.log(typeof fooCompatible);

let fooIncompatible: string;
let barIncompatible: number = 1;

// fooIncompatible = barIncompatible;

let fooString: string;
let barString: string = 'string';

fooString = barString;

// リテラル型
let fooStringLiteral: 'fooStringLiteral' = 'fooStringLiteral';
fooString = fooStringLiteral; // 文字列リテラル型は文字列型の一部

let fooNumber: number;
let varNumberLiteral: 1976 = 1976;
fooNumber = varNumberLiteral; // 数値リテラル型は数字型の一部

// 構造的部分型
interface Animal {
  age: number;
  name: string;
}

class Person {
  constructor(public age: number, public name: string){}
}

// メンバが一致していれば互換性はある
let me: Animal;
me = new Person(43, 'はむさん');