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

// 今あるものから型を取り出す
const example = {
  name: 'Ham',
  age: 43,
};

type Profile2 = typeof example;
```
