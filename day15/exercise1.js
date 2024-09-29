//Create an Animal class. The class will have name, age, color, legs properties and create different method
class Animal {
  constructor(name, age, color, legs) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
  }
}

//Create a Dog and Cat child class from the Animal Class.
class Dog extends Animal {
  constructor(name, age, color, legs, breed) {
    super(name, age, color, legs);
    this.breed = breed;
  }
  getDogInfo() {
    return `${this.name} is a ${this.age}-year-old ${this.breed} Dog with ${this.color} color and ${this.legs} legs.`;
  }
  makeSound() {
    return `${this.name} baw baw.`;
  }
}
class Cat extends Animal {
  constructor(name, age, color, legs, breed) {
    super(name, age, color, legs);
    this.breed = breed;
  }
  getCatInfo() {
    return `${this.name} is a ${this.age}-year-old ${this.breed} cat with ${this.color} color and ${this.legs} legs.`;
  }
  makeSound() {
    return `${this.name} meows.`;
  }
}

const dog = new Dog("Buddy", 3, "brown", 4, "Labrador");
console.log(dog.getDogInfo()); // Buddy is a 3-year-old Labrador dog with brown color and 4 legs.
console.log(dog.makeSound()); // Buddy barks.

const cat = new Cat("Whiskers", 2, "white", 4, "Persian");
console.log(cat.getCatInfo()); // Whiskers is a 2-year-old Persian cat with white color and 4 legs.
console.log(cat.makeSound()); // Whiskers meows.
