/* //------------------------------------------------------------------------------------
const callback = (n) => {
  return n ** 2;
};

function cube(callback, n) {
  return callback(n) * n;
}
// console.log(cube(callback,10));
//------------------------------------------------------------------------------------
const numbers = [1, 2, 3, 4, 5];
const sumArray = (arr) => {
  sum = 0;
  arr.forEach((element) => {
    sum += element;
  });
  return sum;
};
//console.log(sumArray(numbers));
//------------------------------------------------------------------------------------


 */


/* 
// Filter
const countries=[
  "ALBANIA",
  "BOLIVIA",
  "CANADA",
  "DENMARK",
  "ETHIOPIA",
  "FINLAND",
  "GERMANY",
  "HUNGARY",
  "IRELAND",
  "JAPAN",
  "KENYA",
];
const countriesContainingLand = countries.filter((country) =>
    country.includes('LAND')
)


console.log(countriesContainingLand);

const scores = [
  { name: "Asabeneh", score: 95 },
  { name: "Lidiya", score: 98 },
  { name: "Mathias", score: 80 },
  { name: "Elias", score: 50 },
  { name: "Martha", score: 85 },
  { name: "John", score: 100 },
];
const scoresGreaterEighty = scores.filter((score)=>score.score>80)
console.log(scoresGreaterEighty);
 */



/* 
//Map

const numbers = [1,2,3,4,5]
const numbersSquare = numbers.map(num=>num**2)
console.log(numbersSquare);
 */

