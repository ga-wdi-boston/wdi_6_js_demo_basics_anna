/// RUBY

// def method_name
//   x = 2
//   $y = 3
//   return true
// end

// puts x => ERROR because x is local - x has method scope
// puts $y => 3 because y is global - y has global scope

/// JAVASCRIPT

var methodName = function() {
  x = 2;
  var y = 3;
  return true;
}

methodName();
console.log(x); // returns 2 because x (without var in front of it) has global scope, so you can reference it or change it outside of the function itself
console.log(y); // returns ERROR because y (with var) has function scope

