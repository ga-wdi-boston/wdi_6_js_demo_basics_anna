// just use alerts to make sure that your javascript file is linked correctly to your html file

alert("hello world!");

// always use ; at the end of every expression

// strings

"how's it going?" // simple string
var greeting = "how's it going?"; // save a string to a variable
"hey" + " " + name + ", " + greeting; // string concatenation

// numbers

10+2; // basic functions
10-2;
10*2;
10/2;

9/2; // numbers are stored as floats by default
9/0; // if you divide by zero, you DON'T get an error... which means your code will still run, and if you want to check for an error, you need to check after that calculation is run

0.1 + 0.2 // => 0.30000000004
// float math is weird! don't compare floats

// convert datatypes

typeof(10);  // check which datatype something is
typeof("10");

var num = 10;
num.toString(); // number to string
parseFloat("10"); // string to number
this.parseFloat("10"); // parseFloat is really being invoked on the 'this' pointer, which is just like 'self' in Ruby - e.g. self.puts

// naming convention for variables and functions: camelCase with *lowercase* first letter

// always call or invoke a function with () even if there is no argument being passed in - otherwise you will just get the code of that function, instead of the return value

// getting some user input

prompt("enter a number"); // popup window
var num1 = prompt("enter a number"); // save user's input


// assignment: in a new js file, write a short program to prompt the user for three inputs (string or number) and then output the result of the mad lib via an alert

// example mad lib:
// "Let's build a " + word_1 + "! It can have lots of " + word_2 + "and live in a " + word_3;

// best practice is to declare all your variables at the top of the file or function
// e.g. var name, chore, wakeup, madLib;

// instead of alerts you can also use console.log to print to the "terminal" (Chrome console)

// comparators

// in js, always use ===
// == tries to convert first, which leads to unpredictable results

// conditionals

var weather = "sunny";

if (weather === "sunny") {
  console.log("it's so nice out!");
} else if (weather === "cloudy") {
  console.log("maybe better tomorrow");
} else {
  console.log("let's stay in and code");
}

// functions!!!

var square = function(number) {
  return number*number; // must use literal return always
}

var cube = function(number) {
  return Math.pow(number, 3);
}

// arrays

var numbers = [2, 3, 4];
var names1 = ["anna", "david"];

names1[0]; // get first element
names1[names1.length - 1]; // get last element
names1.push("dan"); // add new element to end of array
names1.indexOf("dan"); // get index of an element

var names2 = ["John", "Paul", "Jones"];
names2.join();
names2.join(' ');

names1.concat(names2); // concat is an array method that joins two arrays and returns a single array

// iterating over arrays

var myArray = ["some", "stuff"];

// define a function that we will do to each element

var makeMoreExciting = function(element) {
  return element + "!!!!!!";
}

myArray.forEach(makeMoreExciting);












