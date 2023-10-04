const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]


// 1) Find the total price of products by chaining two or more array iterators(
const totalPrice = products
    .map((product) => product.price)
    .filter((price) => typeof price === 'number')
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    console.log(totalPrice);


// 2) Find the sum of price of products using only reduce reduce(callback))
const totalPrice2 = products.reduce((acc,product)=>{
    if(typeof product.price==='number'){
        return acc+product.price;
    }
    return acc;
},0);
console.log(totalPrice2);


// 3) Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js
function categorizeCountries(pattern){
    return countries.filter((country)=>country.toLowerCase().includes(pattern));
}

const patternCountry = categorizeCountries('en');
console.log(patternCountry);


// 4) Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.
function countStartingLetters(countries) {
    const letterCount = {};

    countries.forEach((country) => {
    const firstLetter = country.charAt(0).toLowerCase();
    letterCount[firstLetter] = (letterCount[firstLetter] || 0) + 1;
    });

    return Object.entries(letterCount).map(([letter, count]) => ({ letter, count }));
}

const startingLetterCounts = countStartingLetters(countries);
console.log(startingLetterCounts);


// 5) Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array
function getFirstTenCountries(){
    return countries.slice(0,10)
}

const firstTenCountries = getFirstTenCountries();
console.log(firstTenCountries);


// 6) Declare a getLastTenCountries function which which returns the last ten countries in the countries array.

function getLastTenCountries(){
    return countries.slice(-10);
}


// 7) Find out which letter is used many times as initial for a country name from the countries array 

function findMostFrequentStartingLetter(countries) {
    const letterCount = {};

    countries.forEach((country) => {
    const firstLetter = country.charAt(0).toLowerCase();
    letterCount[firstLetter] = (letterCount[firstLetter] || 0) + 1;
    });

    let mostFrequentLetter = '';
    let maxCount = 0;

    for (const letter in letterCount) {
    if (letterCount[letter] > maxCount) {
        mostFrequentLetter = letter;
        maxCount = letterCount[letter];
    }
    }

    return mostFrequentLetter;
}

const mostFrequentStartingLetter = findMostFrequentStartingLetter(countries);
console.log(mostFrequentStartingLetter);  