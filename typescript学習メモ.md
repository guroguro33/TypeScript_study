# TypeScript 学習メモ

## インストール

```
git checkout -b install-typescript //ブランチきる
npm info typescript // バージョン確認
npm install --save-dev typescript@3.7.5 // インストール
```

```
mkdir src
touch src/install-typescript.ts
```

## コンパイル

```
tsc src/install-typescript.ts // コマンド不明になる
npx tsc src/install-typescript.ts // npxコマンドを使用する
```

## 動作確認

```
node src/install-typescript.js
```

## ts-node インストール

```
npm install --save-dev ts-node@9.1.1
```

### ts-node 実行

- コンパイルから実行まで一気に
- js ファイルは生成されない

```
npx ts-node src/install-typescript.ts
```

## ts-node-dev インストール

```
npm install --save-dev ts-node-dev@1.1.1
```

### ts-node-dev 実行

```
npx ts-node-dev --respawn src/install-typescript.ts
```

### package.json の script に登録

```
"dev" : "ts-node-dev --respawn",
```

### 実行方法

```
npm run dev src/install-typescript.ts

```

## Visual Studio Code について

- 設定 →telemetory の２つをオフにする
- コマンドパレット →code path で登録すると、code で呼べる
- 設定 →tab size→2 に変更
- 拡張機能 prettier インストール
- 設定 →settings json→json 設定へ 1.追加
  "editor.formatOnSave": true,
  "prettier.semi": true,
  "prettier.singleQuote" : true,

## tsconfig.json の生成

```
npx tsc --init
```

## 型

```typescript
// boolean
let isFinished: boolean = true;

// number
let year: number = 1976;

// string
let name: string = 'Ham';

// array
let numbers: number[] = [1, 2, 3];
// 非推奨のarray
let strings2: Array<string> = ['Tokyo', 'Osaka', 'Kyoto'];
// 共用型array
let hairetsu: (string | number | boolean)[] = [1, false, 'japan'];
// tuple 順番まで指定
let profile: [string, number] = ['Ham', 43];

// any(axiosのresponseなど型が不明な場合)
let data: any = response.data;

// void（呼び元には帰ってくる）
function returnNothing(): void {
  console.log("I don't return nothing!");
}

// null and undefined
let absence: null = null;
let data: undefined = undefined;

// never（例外を起こすもの、呼び元に帰ってこない）
function error(message: string): never {
  throw new Error(message);
}

// object（あいまいobjectなら何でもOK）
let profile1: object = { name: 'Ham' };
// object（型指定が厳しく、こっちの方が良い）
let profiles2: { name: string } = { name: 'Ham' };
```

## 型エイリアス

```typescript
// 型にエイリアスをつける。最初は大文字
type Mojiretsu = string;
const fooString: Mojiretsu = 'Hello';

type Profile1 = {
  name: string;
  age: number;
};

// 今あるものから型を取り出す「typeエイリアス」
const example = {
  name: 'Ham',
  age: 43,
};

type Profile2 = typeof example;
```

## インターフェース

```typescript
interface ObjectInterface {
  name: string;
  age: number;
}

// typeエイリアスと同じように使用可能
let object: ObjectInterface {
  name: 'Ham-san',
  age: 43,
};
```

## 型ガード（Type Guard）

```typescript
const kansu = (): number => 43;

// 暫定的に型を指定したいとき、unknownを使う
let numberUnknown: unknown = kansu();

// 型ガードでnumber型のときのみ、if文の処理をする
if (typeof numberUnknown === 'number') {
  let sumUnknown = numberUnknown + 10;
}
```

## intersection 型（既存の型を組み合わせる）

```typescript
type Pitcher1 = {
  throwingSpeed: number;
};

type Batter1 = {
  battingAverage: number;
};

// 既存の型からintersection型を作る
type twoWayPlayer = Pitcher1 & Batter1;

const OtaniShohei: twoWayPlayer = {
  throwingSpeed: 165,
  battingAverage: 0.286,
};
```

## union（型の複数設定）

```typescript
let value: number | string = 2021;
value = 'apple';
```

## literal（具体的なものの複数設定）

```typescript
// 文字のリテラル型
let dayOfTheWeek: '日' | '月' | '火' | '水' | '水' | '木' | '金' | '土' = '日';
dayOfTheWeek = '月';

// 数値のリテラル型
let month: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 = 1;
month = 12;

// booleanのリテラル型
let TRUE: true = true;
```

## 関数

### 通常の関数

- 引数と返り値にアノテーションをつける

```typescript
function bmi(
  height: number, // 引数１
  weight: number // 引数2
): number {
  // 返り値
  return weight / (height * height);
}
```

### 無名関数

- 通常＋必要に応じて変数名にアノテーションをつける

```typescript
let bmi: (height: number, weight: number) => number = function (
  // 変数名につける
  height: number, // 引数1
  weight: number // 引数2
): number {
  // 返り値
  return weight / (height * height);
};
```

### アロー関数

```typescript
let bmi: (height: number, weight: number) => number = (
  height: number,
  weight: number
): number => weight / (height * height);
```

### optional 引数

- 引数名の最後に?をつけることで optional 引数になる

```typescript
let bmi: (height: number, weight: number, printable?: boolean) => number = (
  height: number,
  weight: number,
  printable?: boolean
): number => {
  const bmi: number = weight / (height * height);

  if (printable) {
    console.log({ bmi });
  }
  return bmi;
};
```

### default 引数

- js と同様にイコールをつけるとデフォルト引数になる

### 残余引数(Rest パラメータ）

- 可変長引数をとるときは...arg と記載する

```typescript
// 総和用のreducer関数を用意
const reducer = (accumulator: number, currentValue: number) => {
  return accumulator + currentValue;
};

const sum = (...values: number[]): number => {
  return values.reduce(reducer);
};
```

### オーバーロード

- 事前に型付きで抽象関数を宣言しておき、その後、typeof で型チェックしながら定義する

```typescript
function double(value: number): number;
function double(value: string): string;

function double(value: any): any {
  if (typeof value === 'number') {
    return value * 2;
  } else {
    return value + value;
  }
}
```

## クラス

### 基本

- プロパティに型指定をする
- コンストラクタの引数にも型指定するが、戻り値型には不要
- メソッドには戻り値型を指定

```typescript
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
}
let taro = new Person('Taro', 30);
console.log(taro.profile());
```

### アクセス修飾子

- public (Java と違って宣言なしも public であり、通常記載しない)
- protected 継承先でも使える
- private class 内のみで使える

```typescript
class Person {
  public name: string;
  protected age: number;
  protected nationality: string;
  // constructorに戻り値型は記載していけない
  constructor(name: string, age: number, nationality: string) {
    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}`;
  }
}

// 継承クラス
class Android extends Person {
  constructor(name: string, age: number, nationality: string) {
    // superが使える
    super(name, age, nationality);
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}, nationality: ${this.nationality}`;
  }
}
```
