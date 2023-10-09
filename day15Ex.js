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
}

// 2) Create a Dog and Cat child class from the Animal Class.
class Dog extends Animal{

}
class Cat extends Animal{

}

/* Level 2 */

// 1) Override the method you create in Animal class

