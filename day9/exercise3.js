// app.js
import { countries_data } from "../countries_data";

// Use the countries information, in the data folder. Sort countries by name, by capital, by population
const sortByName = countries_data.slice().sort((a, b) => {
  return a.name.localeCompare(b.name);
});
console.log(sortByName);

const sortByCapital = countries_data.slice().sort((a, b) => {
  return (a.capital || "").localeCompare(b.capital || "");
});
console.log(sortByCapital);
const sortByPopulation = countries_data.slice().sort((a, b) => {
  return a.population - b.population;
});
console.log(sortByPopulation);

// Find the 10 most spoken languages:
const languageCount = {};
countries_data.forEach((country) => {
  country.languages.forEach((language) => {
    languageCount[language] = (languageCount[language] || 0) + 1;
  });
});
const sortedLanguage = Object.entries(languageCount)
  .sort((a, b) => b[1] - a[1])
  .slice(0, 10);

const topTenLanguages = sortedLanguage.map(([language, count]) => ({
  language,
  count,
}));
console.log(topTenLanguages);

//Use countries_data.js file create a function which create the ten most populated countries
const countries = countries_data;
function tenMostPopulatedCountry(countries, count) {
  const sortedCountry = countries.sort((a, b) => b.population - a.population);
  return sortedCountry.slice(0, count);
}

console.log(tenMostPopulatedCountry(countries, 10));
