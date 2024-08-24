const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
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

//Use forEach to console.log each country in the countries array.
console.log(countries.forEach((country) => console.log(country)));

//Use forEach to console.log each name in the names array.
console.log(names.forEach((name) => console.log(name)));

//Use forEach to console.log each name in the names array.
console.log(numbers.forEach((number) => console.log(number)));

//Use map to create a new array by changing each country to uppercase in the countries array.
const uppercaseCountries = countries.map((country) => country.toUpperCase());
console.log(uppercaseCountries);

//Use map to create an array of countries length from countries array.
const countriesLength = countries.map((country) => country.length);
console.log(countriesLength);

//Use map to create a new array by changing each number to square in the numbers array
const squareNumber = numbers.map((number) => number ** 2);
console.log(squareNumber);

//Use map to change to each name to uppercase in the names array
const uppercaseName = names.map((name) => name.toUpperCase);
console.log(uppercaseCountries);

//Use map to map the products array to its corresponding prices.
const correspondingPrice = products.map((product) => product.price);
console.log(correspondingPrice);

//Use filter to filter out countries containing land.
const countriesInLand = countries.filter((country) => country.includes("land"));
console.log(countriesInLand);

//Use filter to filter out countries having six character.
const countriesInSixChar = countries.filter((country) => country.length == 6);
console.log(countriesInSixChar);

//Use filter to filter out countries containing six letters and more in the country array.
const countriesInSixOrMore = countries.filter((country) => country.length >= 6);
console.log(countriesInSixOrMore);

//Use filter to filter out country start with 'E';
const countryE = countries.filter((country) => country[0] == "E");
console.log(countryE);

//Use filter to filter out only prices with values.
const validPrices = products.filter(
  (product) =>
    typeof product.price == "number" &&
    !isNaN(product.price) &&
    product.price != null
);
console.log(validPrices);

//Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
function getStringLists(arr) {
  return arr.filter((item) => typeof item === "string");
}

console.log(getStringLists(countries));
console.log(getStringLists(names));
console.log(getStringLists(numbers));
console.log(getStringLists(products.map((product) => product.price)));

//Use reduce to sum all the nmbers in the numbers array.
const sum = numbers.reduce((acc, cur) => acc + cur, 0);
console.log(sum);

//Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
const firstSentence = countries.reduce((acc, country, index) => {
  if (index === 0) {
    return country;
  } else if (index === countries.length - 1) {
    return acc + ", and " + country;
  } else {
    return acc + ", " + country;
  }
}, " Estonia");
const finalSentence = firstSentence + "are north European countries ";
console.log(finalSentence);


//Use some to check if some names' length greater than seven in names array
const someGreaterThanSevenChar = names.some((name)=> name.length>7)
console.log(someGreaterThanSevenChar);

//Use every to check if all the countries contain the word land
const allHaveLnad = countries.every(country =>country.includes('land'))
console.log(allHaveLnad);

//Use find to find the first country containing only six letters in the countries array
const sixCharCountry = countries.find((country)=>country.length===6)
console.log(sixCharCountry);

//Use findIndex to find the position of the first country containing only six letters in the countries array
const sixCharCountryIndex = countries.findIndex(country=>country.length===6)
console.log(sixCharCountryIndex);

//Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
const norwayPosition = countries.findIndex((country) => country === "Norway");
console.log(norwayPosition);

//Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
const russiaPosition = countries.findIndex((country) => country === "Russia");
console.log(russiaPosition);
