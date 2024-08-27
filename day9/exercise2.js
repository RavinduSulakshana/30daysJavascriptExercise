const { countries } = require("../countries");
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

//Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
const totalProductsPrice = products
  .filter((product) => typeof product.price === "number" && product.price > 0)
  .map((product) => product.price)
  .reduce((acc, cur) => acc + cur, 0);
console.log(totalProductsPrice);

//Find the sum of price of products using only reduce reduce(callback))
const reduceProductCost = products.reduce((sum, product) => {
  const price = parseFloat(product.price) || 0;
  return (sum += price);
}, 0);
console.log(reduceProductCost);

//Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).
function categorizeCountries(pattern) {
  return countries.filter((country) =>
    country.toLowerCase().includes(pattern.toLowerCase())
  );
}
const landCountries = categorizeCountries("land");
const iaCountries = categorizeCountries("ia");
const islandCountries = categorizeCountries("island");
const stanCountries = categorizeCountries("stan");

console.log(landCountries); // ['Finland', 'Iceland']
console.log(iaCountries); // ['Estonia']
console.log(islandCountries); // ['Iceland']
console.log(stanCountries); // ['Pakistan', 'Afghanistan']

//Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.
function countStartLetter() {
  const letterCount = {};

  countries.forEach((country) => {
    const firstletter = country[0].toUpperCase();

    if (letterCount[firstletter]) {
      letterCount[firstletter]++;
    } else {
      letterCount[firstletter] = 1;
    }
  });

  return Object.keys(letterCount).map((letter) => ({
    letter: letter,
    count: letterCount[letter],
  }));
}
console.log(countStartLetter());

//Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array
function getFirstTenCountries() {
  return countries.filter((country, index) => index < 10);
}
console.log(getFirstTenCountries());

//Declare a getLastTenCountries function which which returns the last ten countries in the countries array.
function getLastTenCountries() {
  return countries.slice(-10);
}
console.log(getLastTenCountries());

//Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)
function mostCommonFirstLetter() {
  const letterCount = {};

  countries.forEach((country) => {
    const firstletter = country[0].toUpperCase();

    if (letterCount[firstletter]) {
      letterCount[firstletter]++;
    } else {
      letterCount[firstletter] = 1;
    }
  });

  let maxCount = 0;
  let mostCommonLetter = "";

  for (const letter in letterCount) {
    if (letterCount[letter] > maxCount) {
      maxCount = letterCount[letter];
      mostCommonLetter = letter;
    }
  }
  return { letter: mostCommonLetter, count: maxCount };
}
console.log(mostCommonFirstLetter());
