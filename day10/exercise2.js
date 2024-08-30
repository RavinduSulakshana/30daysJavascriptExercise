const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
const A = new Set(a);
const B = new Set(b);

//Find a union b
const c = [...a, ...b];
const AunionB = new Set(c);
console.log(AunionB);

//Find a intersection b
const A_intersection_B = a.filter((num) => B.has(num));
console.log(A_intersection_B);

//Find a with b
const A_with_B = a.filter((num) => !B.has(num));
console.log(A_with_B);
