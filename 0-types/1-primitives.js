// DATA TYPES
// string
// number
// boolean
// object
// function

// OBJECT TYPES
// Object
// Date
// Array
// String
// Number
// Boolean
// Null*
// Undefined*
// *Can't contain values

// Number
const var1 = 1.2; const var2 = -32.23122; const var3 = 42;
console.log(`var2 is a ${typeof var2}`);

// Boolean
const is = true; const isNot = false;
console.log(`isNot is a ${typeof isNot}`);

// String
const hi = 'Hello World';
console.log(`hi is a ${typeof hi}`);

// Null
const notNothing = null;
console.log(`notNothing is an ${typeof notNothing}`);

// Undefined
let notAssigned;
console.log(`notAssigned is ${typeof notAssigned}`);
console.log(`who am I is ${typeof whoAmI}`);

// Symbol
const unique = Symbol('I am unique');
const unique2 = Symbol('I am unique');
console.log(`type of unique is ${typeof unique}`); // "symbol"

console.log(unique === unique2); // false
console.log(unique == unique2); // false
