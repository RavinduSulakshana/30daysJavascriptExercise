/* 1) Create an object literal called personAccount.
It has firstName, lastName, incomes, expenses properties and
it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods.
Incomes is a set of incomes and its description and expenses is a set of incomes and its description. */

const personAccount =  {
    firstname : 'Ravindu',
    lastName : 'Sulakshana',
    incomes :[],
    expenses : [],

    addIncome :function(description,amount){
        this.incomes.push({description,amount});
    },

    addExpense : function(description, amount){
        this.expenses.push({description,amount});
    },

    totalIncomes : function (){
        return this.incomes.reduce((total,income)=>total+income.amount,0);
    },

    totalExpenses : function(){
        return this.expenses.reduce((total,expense)=>total+expense.amount,0);
    },

    accountBalance : function(){
        return this.totalIncomes()-this.totalExpenses();
    },

    accountInfo : function(){
        return `Account Holder      : ${this.firstname} ${this.lastName}\nTotal Income     : ${this.totalIncomes()}\nTotal Expences    : ${this.totalExpenses()}\nAccount Balanace     : ${this.accountBalance()}`;
    }

}

personAccount.addIncome('Salary', 3000);
personAccount.addIncome('Freelance Work', 1000);
personAccount.addExpense('Rent', 1200);
personAccount.addExpense('Utilities', 300);

console.log(personAccount.accountInfo());


// 2) a.  Create a function called signUp which allows user to add to the collection.
//        If user exists, inform the user that he has already an account.

const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

    const products = [
    {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
        { userId: 'fg12cy', rate: 5 },
        { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
    },
    {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
    },
    {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
    }
    ]



function signUp(newUser){
    const existingUser = users.find(user => user.email===newUser.email);

    if(existingUser){
        return "User already has on account";
    }
    users.push(newUser);
    return "user registered successfully";

    
}
const newUser= {
    _id: 'eefamr',
    username: 'Martha',
    email: 'martha@martha.com',
    password: '123222',
    createdAt:'08/01/2020 9:50 AM',
    isLoggedIn: false
}
console.log(signUp(newUser));
console.log(users);

//b. Create a function called signIn which allows user to sign in to the application

function signIn(username,password){
    const user = users.find(user => username === user.email && password === user.password );

    if(user){
        user.isLoggedIn =true;
        return "Logging Successfully";
    }else{
        return "Invalid username or password";
    }

}
console.log(signIn('thomas@thomas.com','123333'));


//3) The products array has three elements and each of them has six properties. 
//   a. Create a function called rateProduct which rates the product

function rateProduct(productId,userId,rating){
    // find the product by its ID
    const product=products.find(product=>product._id===productId);

    if(!product){
        return "product not found";
    }
    // check if user has already rated the product
    const existingRating = product.ratings.find(r => r._id===userId);
    if(existingRating){
        existingRating.rate=rating;
        return "rating updating successfull";

    }else{
        product.ratings=rating;
        return "rating added successfull"
    }

}
console.log(rateProduct('eedfcf', 'ghderc', 4));
console.log(products);


//b. Create a function called averageRating which calculate the average rating of a product
function averageRating(productId){
    const product=products.find(product=>product._id===productId);

    if(!product || product.ratings.length === 0){
        return "No ratings available for this product"
    }

    const totalRating = product.ratings.reduce((sum,rating)=>{return sum+rating.rate},0);
    const average = totalRating/product.ratings.length;
    return average.toFixed(2);

} 

console.log(averageRating('hedfcg'));


//4) Create a function called likeProduct.
//   This function will helps to like to the product if it is not liked and remove like if it was liked.

function likeProduct(productId,userId){
    const product = products.find(product=>product._id===productId);
    if(!product){
        return "This product is not available";
    }

    const userLiked = product.likes.includes(userId);
    
    if(userLiked){
        product.likes = product.likes.filter(id=>id != userId);
        return "product unliked";
    }else{
        return product.likes.push(userId);
        return "product liked";
    }

}
likeProduct('hedfcg', 'asab@asab.com');
console.log(products);