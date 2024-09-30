// Animal class
class Animal {
  constructor(name, age, color, legs) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
  }

  // Method to get basic info about the animal
  getInfo() {
    return `${this.name} is a ${this.age}-year-old animal with ${this.color} color and ${this.legs} legs.`;
  }

  // Method to make sound (this can be overridden by child classes)
  makeSound() {
    return `${this.name} makes a sound.`;
  }
}

// Dog class extends Animal
class Dog extends Animal {
  constructor(name, age, color, legs, breed) {
    super(name, age, color, legs); // Call the parent class's constructor
    this.breed = breed;
  }

  // Overriding the getInfo method
  getInfo() {
    return `${this.name} is a ${this.age}-year-old ${this.breed} dog with ${this.color} color and ${this.legs} legs.`;
  }

  // Overriding the makeSound method
  makeSound() {
    return `${this.name} barks loudly.`;
  }
}

// Cat class extends Animal
class Cat extends Animal {
  constructor(name, age, color, legs, breed) {
    super(name, age, color, legs); // Call the parent class's constructor
    this.breed = breed;
  }

  // Overriding the getInfo method
  getInfo() {
    return `${this.name} is a ${this.age}-year-old ${this.breed} cat with ${this.color} color and ${this.legs} legs.`;
  }

  // Overriding the makeSound method
  makeSound() {
    return `${this.name} meows softly.`;
  }
}

// Example usage
const dog = new Dog("Buddy", 3, "brown", 4, "Labrador");
console.log(dog.getInfo()); // Buddy is a 3-year-old Labrador dog with brown color and 4 legs.
console.log(dog.makeSound()); // Buddy barks loudly.

const cat = new Cat("Whiskers", 2, "white", 4, "Persian");
console.log(cat.getInfo()); // Whiskers is a 2-year-old Persian cat with white color and 4 legs.
console.log(cat.makeSound()); // Whiskers meows softly.
