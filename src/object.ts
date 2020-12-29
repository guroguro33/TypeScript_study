export{};

let profile1: object = { name: 'Ham' };
// 型があいまいだから下記もOK
profile1 = { birthYear: 1976 };


let profile2: {
  name: string
} = { name: 'Ham' }; 

profile2 = { name: 'Nimo' };
