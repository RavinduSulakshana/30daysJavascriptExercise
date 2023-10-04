const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']


// 1) Find a union b

let c=[...a,...b]
let C=new Set(c)
console.log(C);


// 2) Find a intersection b
const D=new Set(a);
const E= new Set(b);
const f=a.filter((num)=>E.has(num));
const F = new Set(f)
console.log(F);


// 3) find a with b
const g=a.filter((num)=>!E.has(num));
const G=new Set(g);
console.log(G);