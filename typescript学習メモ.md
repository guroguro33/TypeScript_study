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
npx ts-node src/install-typescript
```