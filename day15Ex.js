/* Level 1 */
/* 

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
} */

// 2) Create a Dog and Cat child class from the Animal Class.
/* Level 2 */

// 1) Override the method you create in Animal class

/* class Dog extends Animal{
    makeSound(){
        return "woof woof"
    }
}
class Cat extends Animal{
    makeSound(){
        return "meow";
    }
}
 */


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
            
        }
    }

}