// 1) Find the person who has many skills in the users object.

let mostSkilledPerson=null;
let maxcount=0;

for(const userName in users){
    const user = users[userName];

    if(user.skills.length>maxcount){
        maxcount = user.skills.length;
        mostSkilledPerson=userName
    }
}

console.log(`Most Skilled person is ${mostSkilledPerson}`);


//2) Count logged in users, count users having greater than equal to 50 points from the following object.


const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
}

function loggedInUserCountAndHighPointUsers(users){
    let loggedInUserCount = 0;
    let highPointsCount=0;

    for(let userName in users){
        const user = users[userName];
        if(user.isLoggedIn){
            loggedInUserCount++;
        }
        if(user.points>=50){
            highPointsCount++;
        }
    }
    
    return {loggedInUserCount,highPointsCount};
}

const counts = loggedInUserCountAndHighPointUsers(users)
console.log(counts.loggedInUserCount);
console.log(counts.highPointsCount);


//3) Find people who are MERN stack developer from the users object

function findMernStackDeveloper(users){
    const mernStackDevelopers = []
    for(let userName in users){
        const user =users[userName];
        if(
            user.skills.includes("MongoDB") &&
            user.skills.includes("Express") &&
            user.skills.includes("React") &&
            user.skills.includes("Node")
        ){
            mernStackDevelopers.push(userName);
        }
    }
    return mernStackDevelopers;
}
const developers = findMernStackDeveloper(users);
console.log(developers);



// 4) Set your name in the users object without modifying the original users object

const modifiedUser = {...users,Ravindu:{skills:['JavaScript','MongoDB','Express','React'],age:22,isLoggedIn:true,points:50}};
console.log(modifiedUser);


// 5) Get all keys or properties of users object

const keys = Object.keys(users);  
console.log(keys)


// 6) Get all the values of users object

const values = Object.values(users);
console.log(values)


// 7) Use the countries object to print a country name, capital, populations and languages.
const countries = {
    USA: { capital: 'Washington D.C.', population: 331000000, languages: ['English'] },
    France: { capital: 'Paris', population: 67000000, languages: ['French'] },
    Spain: { capital: 'Madrid', population: 47000000, languages: ['Spanish'] },
    // Add more countries here
};

for(let countryName in countries){
    const country = countries[countryName]
    console.log("---------------------------------------------");
    console.log(`Country : ${countryName}`);
    console.log(`Capital : ${country.capital}`);
    console.log(`Population : ${country.population}`);
    console.log(`Population : ${country.languages}`);
    console.log("---------------------------------------------");
    console.log(" ");
}







