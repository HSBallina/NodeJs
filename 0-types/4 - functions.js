// FUNCTIONS

// A function is a block of code, or a subprogram, that executes 
// when something invokes it.
// N.B; a func is evaluated when invoked, not when defined.
// First class citizen (i.e. they can be passed around).

// ANATOMY OF A FUNCTION
// Part               Requirement
// function keyword   required, or arrow function
// name               optional
// parameters	        optional
// body	              required (may be empty)
// return statement	  optional (defaults to undefined)

// EXAMPLES
// Named function
function add(a, b) {
  return a + b;
}

// Anonymous function
const x = function(a, b, c) {
  return a + b - c;
}

// Arrow functions
const y = (a, b, c) => a + b - c;

const z = (a, b, c) => {
return a + b - c;
}

() => {}