export{};

function double(value: number): number;
function double(value: string): string;  

function double(value: any): any {
  console.log(typeof value);
  return value * 2;
}

// function double(value: string): string{
  // return value + value;
// }

console.log(double(100));
console.log(double('Go '));