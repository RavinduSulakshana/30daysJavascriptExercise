/* Level 1 */

// Sample data
const countriesArray = [
    { name: 'USA', population: 331002651, area: 9525067 },
    { name: 'China', population: 1439323776, area: 9596961 },
    { name: 'India', population: 1380004385, area: 3287263 },
    // Add more countries as needed
];

const countriesObject = {
    USA: { population: 331002651, area: 9525067 },
    China: { population: 1439323776, area: 9596961 },
    India: { population: 1380004385, area: 3287263 },
    // Add more countries as needed
};
// 1) Display the countries array as a table
// 2) Display the countries object as a table
// 3) Use console.group() to group logs

console.group("countries Data")
console.group("Countries Array");
console.table(countriesArray);
console.groupEnd();

console.group("countries Object");
console.table(countriesObject);
console.groupEnd();
console.groupEnd();




/* Level 2*/

// 1) 10 > 2 * 10 use console.assert()
console.assert(10>2*10,"20 is greater tha 10");


// 2) Write a warning message using console.warn()
console.warn("This is warning message");


// 3) Write an error message using console.error()
console.error("This is Error Message");


/* Level 3 */

// 1) Check the speed difference among the following loops: while, for, for of, forEach
console.time("While loop")
let number1 = 0;
let sum1=0;
while(number1<250){
    sum1 +=number1;
    number1++;
    
}

console.timeEnd("While loop")
console.log("--------------------")
console.time("for loop")
let sum2=0
for(let number2=0;number2<250;number2++){
    sum2 += number2;
}
console.timeEnd("for loop")
console.log("--------------------")


let sum3=0;
console.time("for of")
for(const country of countries_data){
    sum3++;
}
console.timeEnd("for of")
console.log("--------------------")

let sum4=0;
console.time("for Each")
countries_data.forEach(word => {
    sum4++;
});
console.timeEnd("for Each")

