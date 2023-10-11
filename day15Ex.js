/* Level 1 */


// 1) Create an Animal class. The class will have name, age, color, legs properties and create different methods
class Animal{
    constructor(name,age,color,legs){
        this.name=name;
        this.age=age;
        this.color=color;
        this.legs=legs;
    }

    set setName(name){
        this.name=name;
    }

    set setAge(age){
        this.age=age;
    }
    set setColor(color){
        this.color=color;
    }
    
    set setLegs(legs){
        this.legs=legs;
    }

    get getName(){
        return this.name;
    }

    get getAge(){
        return this.age;
    }
    get getColor(){
        return this.colorlor;
    }
    
    get getLegs(){
        return this.legs;
    }

    makeSound(){

    }
} 

// 2) Create a Dog and Cat child class from the Animal Class.
/* Level 2 */

// 1) Override the method you create in Animal class

class Dog extends Animal{
    makeSound(){
        return "woof woof"
    }
}
class Cat extends Animal{
    makeSound(){
        return "meow";
    }
}



/* Level 3 */

 // 1) Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create a class called Statistics and create all the functions which do statistical calculations as method for the Statistics class. Check the output below.

ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
class Statistics{
    constructor(data){
        this.data = data;
    }

    count(){
        return this.data.length;
    }

    sum(){
        return this.data.reduce((acc,val)=>acc+val,0);
    }

    min(){
        return Math.min(...this.data);
    }

    max(){
        return Math.max(...this.data);
    }

    range(){
        return this.max-this.min;
    }

    mean(){
        return this.sum/this.count;
    }

    median(){
        const sortedData = this.data.slice().sort((a,b)=>a-b);
        const middle = Math.floor(sortedData.length/2); 
        if(sortedData.length%2===0){
            const middle1 = sortedData[middle-1];
            const middle2 =  sortedData[middle];

            return (middle1+middle2)/2;
        }else{
            return sortedData[middle];
        }
    }

    mode(){
        const counts = {};
        this.data.forEach((element)=>{
            counts[element]=(counts[element] | + 1);
        })

        let mode=[];
        let maxCount=0;

        for(const num in counts){
            if(counts[num]>maxCount){
                mode = [num];
                maxCount = counts[num];
            }else if (counts[num]===maxCount){
                mode.push(num)
            }
        }

        return {mode: mode,count: maxCount};
    }

    var(){
        const mean = this.mean();
        const squaredDifference = this.data.map((x)=>Math.pow(x-mean),2);
        const variance = squaredDifference.reduce((acc,val)=>acc+val,0)/(this.count-1);
        return variance;
    }

    std(){
        return Math.sqrt(this.var());
    }
    describe() {
        return `Count: ${this.count()}
    Sum: ${this.sum()}
    Min: ${this.min()}
    Max: ${this.max()}
    Range: ${this.range()}
    Mean: ${this.mean()}
    Median: ${this.median()}
    Mode: (${this.mode().mode.join(', ')}, ${this.mode().count})
    Variance: ${this.var().toFixed(1)}
    Standard Deviation: ${this.std().toFixed(1)}`;
    }
    

}
const s1=new Statistics(ages);
console.log(s1.describe()); 


// 2) Create a class called PersonAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

class PersonAccount{
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
        this.incomes=[];
        this.expenses=[];
    }

    addIncome(amount,description){
        this.incomes.push({amount,description});
    }

    addExpense(amount,description){
        this.expenses.push({amount,description});
    }
    totalIncome(){
        return this.incomes.reduce((total,income)=>total+income.amount,0);
    }

    totalExpense(){
        return this.expenses.reduce((total,expense)=>total+expense.amount,0);
    }

    accountBalance(){
        return this.totalIncome()-this.totalExpense();
    }

    accountInfo() {
        return `Account Information for ${this.firstName} ${this.lastName}:
    Total Income: ${this.totalIncome()}
    Total Expense: ${this.totalExpense()}
    Account Balance: ${this.accountBalance()}`;
    }
}

const person = new PersonAccount("John", "Doe");
person.addIncome(1000, "Salary");
person.addIncome(200, "Freelance Work");
person.addExpense(500, "Rent");
person.addExpense(100, "Groceries");

console.log(person.accountInfo())
