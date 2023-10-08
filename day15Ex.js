class Person {

    constructor(firstName,lastName){
        console.log(this);
        this.firstName=firstName;
        this.lastName= lastName;
    }
}

const person = new Person('ravindu','sulakshana');
const person2 =new Person("Thiwanya","dewmini");
console.log(person)
console.log(person2)