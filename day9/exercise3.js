// app.js
import { countries_data } from "./countries_data.js";

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

/* Try to develop a program which calculate measure of central tendency of a sample(mean, median, mode)
and measure of variability(range, variance, standard deviation). In addition to those measures find the
 min, max, count, percentile, and frequency distribution of the sample. You can create an object called 
 statistics and create all the functions which do statistical calculations as method for the statistics
object. Check the output below. */

const ages = [
  31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37,
  31, 34, 24, 33, 29, 26,
];

const statistics = {
  mean: function (arr) {
    return arr.reduce((acc, cur) => acc + cur, 0) / arr.length;
  },
  median: function (arr) {
    const sorted = arr.slice().sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    return sorted.length % 2 !== 0 ? sorted[mid] : sorted[mid - 1];
  },
  mode: function (arr) {
    const count = {};
    let maxfreq = 0;
    let mode = [];
    arr.forEach((number) => {
      count[number] = (count[number] || 0) + 1;
      if (count[number] > maxfreq) {
        maxfreq = count[number];
        mode = [number];
      } else if (count[number] === maxfreq) {
        mode.push(number);
      }
    });

    return mode.length === arr.length ? [] : mode;
  },
  range: function (arr) {
    return Math.max(...arr) - Math.min(...arr);
  },
  variance: function (arr) {
    const mean = this.mean(arr);
    return arr.reduce((acc, val) => acc + (val - mean) ** 2, 0);
  },
  standardDeviation: function (arr) {
    return Math.sqrt(this.variance(arr));
  },
  min: function (arr) {
    return Math.min(...arr);
  },
  max: function (arr) {
    return Math.max(...arr);
  },
  count: function (arr) {
    return arr.length;
  },
  percentile: function (arr, p) {
    const sorted = [...arr].sort((a, b) => a - b);
    const index = Math.ceil((p / 100) * sorted.length) - 1;
    return sorted[index];
  },
  frequencyDistribution: function (arr) {
    const frequency = {};
    arr.forEach((number) => {
      frequency[number] = (frequency[number] || 0) + 1;
    });
    return Object.keys(frequency).map((key) => ({
      value: Number(key),
      count: frequency[key],
      percentage: (frequency[key] / arr.length) * 100,
    }));
  },
};

console.log("Mean:", statistics.mean(ages));
console.log("Median:", statistics.median(ages));
console.log("Mode:", statistics.mode(ages));
console.log("Range:", statistics.range(ages));
console.log("Variance:", statistics.variance(ages));
console.log("Standard Deviation:", statistics.standardDeviation(ages));
console.log("Min:", statistics.min(ages));
console.log("Max:", statistics.max(ages));
console.log("Count:", statistics.count(ages));
console.log("25th Percentile:", statistics.percentile(ages, 25));
console.log("Frequency Distribution:", statistics.frequencyDistribution(ages));
