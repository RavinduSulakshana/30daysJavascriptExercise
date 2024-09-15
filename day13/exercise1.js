import { countries } from "./countries.js";
/* 
    Display the countries array as a table
    Display the countries object as a table
    Use console.group() to group logs
 */

//Display the countries array as a table
console.group("countries array as a table");
console.table(countries);
console.groupEnd();

//Display the countries object as a table
const countriesObj = {};
countries.forEach((country, index) => {
  countriesObj[index + 1] = country;
});
console.group("countries Object as a table");
console.table(countriesObj);
console.groupEnd();
