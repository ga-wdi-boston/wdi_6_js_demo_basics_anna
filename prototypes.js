// these are both OBJECTS

// var david, anna;

// david = {
//   name: "David",
//   age: 32,
//   greet: function() {
//     console.log("Hi " + this.name);
//   }
// }

// anna = {
//   name: "Anna",
//   age: 28,
//   greet: function() {
//     console.log("Hi " + this.name);
//   }
// }

// constructor function - kind of like a class, but not (because it's a function)
// useful if you want to build lots of objects that are similar

function Person(name, age) {
  this.name = name;
  this.age = age;

  // this greet function looks fine, but is being created from scratch
  // for every single instance of a person, so it's not DRY
  // this.greet = function() {
  //   console.log("Hi " + this.name);
  // }
}

// create a new person using this constructor function
var david, anna;

david = new Person("David", 32);
anna = new Person("Anna", 28);

// create a greet property for the Person constructor
// using prototypical inheritance
Person.prototype.greet = function () {
  console.log("Hi " + this.name);
}

david.greet();
anna.greet();



























