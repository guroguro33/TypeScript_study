export{};

let numbers: number[] = [1, 2, 3];

// 非推奨の書き方
let numbers2: Array<number> = [1, 2, 3];
let strings2: Array<string> = ['Tokyo', 'Osaka', 'Kyoto'];

let strings: string[] = ['TypeScript', 'Javascript', 'CoffeeScript'];

let nijigenHairetsu: number[][] = [
  [50, 100],
  [150, 300]
];

// 共用型
let hairetsu: (string | number | boolean)[] = [1, false, 'japan'];
