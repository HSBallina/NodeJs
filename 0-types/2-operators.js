
// Arithmetic op's
console.log(`1 + 2 = ${1 + 2}`);
console.log(`7 - 3 = ${7 - 3}`);
console.log(`2 * 3 = ${2 * 3}`);
console.log(`2 ** 3 = ${2 ** 3}`); // exponentiation
console.log(`56 / 7 = ${56 / 7}`);
console.log(`13 % 2 = ${13 % 2}`); // division remainder (modulo)

let i = 0;
console.log(i++);
console.log(i++);
console.log(i--);
console.log(--i);

// Assignment op's
console.log('a = b');
console.log('a += b => a = a + b');
console.log('a -= b => a = a - b');
console.log('a *= b => a = a * b');
console.log('a /= b => a = a / b');
console.log('a %= b => a = A % b');

// Comparison op's
console.log(`0 == null: ${0 == null}`);
console.log(`undefined == null: ${undefined == null}`);
console.log(`undefined === null: ${undefined === null}`);
console.log(`5 == "5": ${5 == "5"}`);
console.log(`5 === "5": ${5 === "5"}`);
console.log(`0 == false: ${0 == false}`);
console.log(`0 === false: ${0 === false}`);
console.log(`1 == true: ${1 == true}`);
console.log(`1 === true: ${1 === true}`);
console.log(`1 != 2: ${1 != 2}`);
console.log(`1 != "1": ${1 != "1"}`);
console.log(`1 !== "1": ${1 !== "1"}`);

// The == operator will compare for equality after doing
// any necessary type conversions.
// The === (triple equals / strict comparison) operator
// does not do any conversion.

// TAKE HEED!!!!
// When comparing a string with a number JS will convert the
// string to a number.
// An empty string converts to 0.
// A non-numeric value converts to NaN.
console.log(`0 == "": ${0 == ""}`);
console.log(`0 === "": ${0 === ""}`);
console.log(`"f" is a number: ${!isNaN("f")}`);

// Logical op's
// && and
// || or
// !  not