import { countries_data } from "./countries_data.js";
//How many languages are there in the countries object file.
const languages = new Set();
countries_data.forEach((country) => {
  country.languages.forEach((language) => {
    languages.add(language);
  });
});
console.log(languages.size);

//Use the countries data to find the 10 most spoken languages:
function mostSpokenLanguages(arr, count) {
  const langCount = {};
  arr.forEach((country) => {
    country.languages.forEach((language) => {
      langCount[language] = (langCount[language] || 0) + 1;
    });
  });
  const sortedLanguage = Object.entries(langCount).sort((a, b) => b[1] - a[1]);
  const mostCommonlang = sortedLanguage
    .slice(0, count)
    .map(([language, count]) => {
      return { [language]: count };
    });
  return mostCommonlang;
}
console.log(mostSpokenLanguages(countries_data, 10));
