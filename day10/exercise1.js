
//create an empty set
const emptySet = new Set();

//Create a set containing 0 to 10 using loop
const numbers = new Set();
for (let i = 0; i <= 10; i++) {
  numbers.add(i);
}
console.log(numbers);

//Remove an element from a set
numbers.delete(10);
console.log(numbers);

//Clear a set
numbers.clear();
console.log(numbers);

//Create a set of 5 string elements from array
const cities = ["piliyandala", "maharagama", "kottawa", "nugegoda", "borella"];
const setOfCities = new Set(cities);
console.log(setOfCities);

//Create a map of countries and number of characters of a country
const countries = ["Finland", "Sweden", "Norway"];

const mapCountries = new Map();

countries.forEach((country) => {
  mapCountries.set(country, country.length);
});
console.log(mapCountries);
