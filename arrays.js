// iterating over arrays

var myArray = ["some", "stuff"];

// // define a function that we will do to each element

// var makeMoreExciting = function(element) {
//   return element + "!!!!!!";
// }

// // call .map with that function as the argument

// console.log(myArray.map(makeMoreExciting));

// // for loops with arrays

// // iterate forward through the array

for (var i = 0, length = myArray.length; i < length; i++) {
  console.log(myArray[i] + "!!!!!");
}

// // iterate backwards through the array - slightly faster

// var i;
// for (i = myArray.length - 1; i >= 0;) {
//   console.log(myArray[i] + "!!!!!");
//   i = i - 1; // at the end of each time through the loop, decrement the counter
// }
