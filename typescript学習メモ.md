# TypeScript学習メモ

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

## ts-nodeインストール
```
npm install --save-dev ts-node@9.1.1
```

### ts-node実行
- コンパイルから実行まで一気に
- jsファイルは生成されない
```
npx ts-node src/install-typescript.ts
```

## ts-node-devインストール
```
npm install --save-dev ts-node-dev@1.1.1
```
### ts-node-dev実行
```
npx ts-node-dev --respawn src/install-typescript.ts
```

### package.jsonのscriptに登録
```
"dev" : "ts-node-dev --respawn",
```
### 実行方法
```
npm run dev src/install-typescript.ts
```