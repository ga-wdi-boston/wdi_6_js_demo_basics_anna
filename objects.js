// js objects are like hashes in ruby

// each object is made up of properties and values

var anna = {name: "Anna",
            age: 28,
            luckyNumber: function() {
              // debugger
              return this.age*2; // here, 'this' points to the whole 'anna' object
            }
          }

// dot notation to access the properties

// anna.name // returns "Anna"
// anna.age // returns 28

console.log(anna.luckyNumber());
