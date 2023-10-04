// 1) create an empty set
emptySet = new Set();


// 2) Create a set containing 0 to 10 using loop

for(let i=0;i<=10;i++){
    emptySet.add(i);
}
console.log(emptySet);


// 3)Remove an element from a set

emptySet.delete(7);
console.log(emptySet);


// 4) Clear a set
emptySet.clear();
console.log(emptySet);


// 5) Create a set of 5 string elements from array
const arr = ['piliyandala','maharagama','pitakotuwa','borella','kottawa'];
newSet = new Set();
arr.forEach((element)=>{
    newSet.add(element);
})

console.log(newSet);


// 6) Create a map of countries and number of characters of a country
const countries = ['Finland', 'Sweden', 'Norway']
const countryMap = new Map();
for(const countryName of countries){
    const country =countryName;
    countryMap.set(country,country.length);
}
console.log(countryMap);