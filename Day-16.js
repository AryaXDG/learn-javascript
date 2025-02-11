
// ============================================
// DAY 16: Objects - Basics
// Topics: Object creation, properties, methods
// ============================================

// OBJECTS - Collections of key-value pairs (properties)
// Objects represent real-world things with characteristics

// CREATING OBJECTS

// Object literal (most common way)
let person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  isStudent: false
};

console.log(person); // Output: {firstName: "John", lastName: "Doe", age: 30, isStudent: false}

// ACCESSING PROPERTIES

// Dot notation (preferred)
console.log(person.firstName); // Output: John
console.log(person.age); // Output: 30

// Bracket notation (useful for dynamic property names)
console.log(person["lastName"]); // Output: Doe

let property = "age";
console.log(person[property]); // Output: 30

// MODIFYING PROPERTIES
person.age = 31;
console.log(person.age); // Output: 31

person["isStudent"] = true;
console.log(person.isStudent); // Output: true

// ADDING NEW PROPERTIES
person.email = "john@example.com";
person["phone"] = "123-456-7890";
console.log(person);

// DELETING PROPERTIES
delete person.phone;
console.log(person); // phone property is gone

// METHODS - Functions inside objects
let calculator2 = {
  num1: 10,
  num2: 5,
  
  add: function() {
    return this.num1 + this.num2; // 'this' refers to the object
  },
  
  subtract: function() {
    return this.num1 - this.num2;
  },
  
  // Shorthand method syntax (ES6)
  multiply() {
    return this.num1 * this.num2;
  },
  
  divide() {
    return this.num1 / this.num2;
  }
};

console.log(calculator2.add()); // Output: 15
console.log(calculator2.subtract()); // Output: 5
console.log(calculator2.multiply()); // Output: 50
console.log(calculator2.divide()); // Output: 2

// NESTED OBJECTS - Objects inside objects
let employee = {
  name: "Alice",
  age: 28,
  address: {
    street: "123 Main St",
    city: "Boston",
    country: "USA"
  },
  skills: ["JavaScript", "Python", "SQL"]
};

// Accessing nested properties
console.log(employee.address.city); // Output: Boston
console.log(employee.skills[0]); // Output: JavaScript

// THIS KEYWORD - Refers to the object the method belongs to
let car = {
  brand: "Toyota",
  model: "Camry",
  year: 2022,
  
  getInfo() {
    return `${this.brand} ${this.model} (${this.year})`;
  },
  
  age() {
    let currentYear = 2025;
    return currentYear - this.year;
  }
};

console.log(car.getInfo()); // Output: Toyota Camry (2022)
console.log("Car age:", car.age()); // Output: Car age: 3

// CHECKING IF PROPERTY EXISTS

// in operator
console.log("firstName" in person); // Output: true
console.log("salary" in person); // Output: false

// hasOwnProperty method
console.log(person.hasOwnProperty("age")); // Output: true
console.log(person.hasOwnProperty("salary")); // Output: false

// LOOPING THROUGH OBJECT PROPERTIES

// for...in loop
console.log("Person properties:");
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

// OBJECT CONSTRUCTOR FUNCTION (older way)
function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.greet = function() {
    return `Hi, I'm ${this.firstName}`;
  };
}

let person1 = new Person("Alice", "Johnson", 25);
let person2 = new Person("Bob", "Smith", 30);

console.log(person1.greet()); // Output: Hi, I'm Alice
console.log(person2.greet()); // Output: Hi, I'm Bob

console.log("Day 16 Complete!");

