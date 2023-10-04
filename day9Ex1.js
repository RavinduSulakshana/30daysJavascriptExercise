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

// 3) Use forEach to console.log each country in the countries array.
const countriesName = countries.forEach(country => {
    console.log(country);
});

// 4) Use forEach to console.log each name in the names array.
const nameEach = names.forEach(element =>{console.log(element);})


// 5) Use forEach to console.log each number in the numbers array.
const number = numbers.forEach(number =>console.log(number));

// 6) Use map to create a new array by changing each country to uppercase in the countries array.
const uppercaseCountries = countries.map((country) => country.toUpperCase())
console.log(uppercaseCountries);


// 7) Use map to create an array of countries length from countries array.
const countriesLength= countries.map((country)=>country.length);
console.log(countriesLength);


// 8)Use map to create a new array by changing each number to square in the numbers array
const numbersSquare = numbers.map((number)=>number**2);
console.log(numbersSquare);


// 9)Use map to change to each name to uppercase in the names array
const uppercaseName = names.map((element)=>element.toLocaleUpperCase());
console.log(uppercaseName);


// 10)Use map to map the products array to its corresponding prices.
const correspondingPrices = products.map((product)=>product.price);
console.log(correspondingPrices);


// 11)Use filter to filter out countries containing land.
const countriesWithland = countries.filter((country)=> country.includes('land'));
console.log(countriesWithland);


//  12) Use filter to filter out countries having six character.
const sixCharacter = countries.filter((country)=>country.length===7);
console.log(sixCharacter);
