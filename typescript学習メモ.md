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
