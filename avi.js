//pet of the day: if sat return a dog with a name, sun return a cat with a name, otherwise return ____

var day, name, sentence;

day = prompt("Enter the day of the week");
name = prompt("Enter a name");
sentence = "The pet of the day is a ";

if(day === "Saturday") {
  debugger
  console.log(sentence + "dog named " + name);
  console.log("hi");
  console.log("welcome");
  var x;
  x = 12;
  x = "hi";
} else if (day === "Sunday") {
  console.log(sentence + "cat named " + name);
} else {
  console.log(sentence + "owl named " + name);
}
