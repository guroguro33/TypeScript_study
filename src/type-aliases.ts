export{};

// 型にエイリアスをつける 最初大文字
type Mojiretsu = string;

const fooString: string = 'Hello';
const fooMojiretsu: Mojiretsu = 'Hello';

// objectのエイリアス
type Profile = {
  name: string;
  age: number;
}

const example1 = {
  name: 'Ham',
  age: 43
}

const example2: Profile = {
  name: 'Ham',
  age: 43
};

// 今あるオブジェクトから型を取り出す
type Profile2 = typeof example1;