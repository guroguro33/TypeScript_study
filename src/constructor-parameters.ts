export{};

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age; 
  }
}

let taro = new Person('Taro', 30);
console.log(taro);

type PersonType = typeof Person;

type Profile = ConstructorParameters<PersonType>;

const profile: Profile = ['Ham', 43];
const ham = new Person(...profile);