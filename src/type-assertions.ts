export{};

let name: any = 'Ham';

let length = (name as string).length;
// jsxで使われるものに似ているため非推奨
let length2 = (<string>name).length; 

// length = 'foo';

console.log({ length });
