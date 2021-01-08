export{};

class Person {
  name: string;
  age: number;

  // constructorに戻り値型は記載していけない
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}`;
  }
};
let taro = new Person('Taro', 30);
console.log(taro.profile());