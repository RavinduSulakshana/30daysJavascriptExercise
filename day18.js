




const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

    //Exercises: Level 1
/* Read the countries API using fetch and print the name of country, capital, languages, population and area.*/
/* fetch(countriesAPI)
    .then((response)=>response.json())
    .then((data)=>{
        data.forEach((country) => {
            console.log("Country:", country.name);
            console.log("Capital:", country.capital);
            console.log("Languages:",country.languages.map((lang) => lang.name).join(", "));
            console.log("Population:", country.population);
            console.log("Area:", country.area);
            console.log("------------------");
        });
    })
 */


    //Exercises: Level 2
/*Print out all the cat names in to catNames variable.*/
/* fetch(catsAPI)
    .then((response)=>response.json())
    .then((data)=>{
        const catNames=data.map((cat)=>cat.name);
        console.log('Cat Names : ',catNames);
    })
    .catch((error)=>console.error('Error : ',error));

 */

    //Exercises: Level 3
/*Read the cats api and find the average weight of cat in metric unit.
  Read the countries api and find out the 10 largest countries
  Read the countries api and count total number of languages in the world used as officials.*/
/* 
fetch(catsAPI)
    .then((response)=>response.json())
    .then((data)=>{
        const weights=data.map((cat)=>cat.weight.metric.split('-').map(Number))
        const totalWeight = weights.reduce((acc, curr) => [acc[0] + curr[0], acc[1] + curr[1]]);
        const averageWeight = (totalWeight[0] + totalWeight[1]) / (2 * weights.length);
        console.log('Average Cat Weight (in metric units):', averageWeight.toFixed(2), 'kg');
  })
  .catch((error) => console.error('Error:', error));
 */




/* fetch(countriesAPI)
  .then((response)=>response.json())
  .then((data)=>{
    data.sort((a,b)=> b.area - a.area);
    const largestCountries=data.slice(0,10);
    largestCountries.forEach((country) => {
      console.log(country.name, "-", country.area, "square kilometers");
    });
  })
*/