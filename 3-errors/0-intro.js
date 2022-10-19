// IT'S JAVASCRIPT - ACCEPT THAT IT WILL BREAK...

const e = new Error('Something went wrong!');
console.log(`${e.name} : ${e.message}`);

/*  ERROR TYPES
    - TypeError
    - RangeError
    - URIError
    - ReferenceError
    - EvalError
    - SyntaxError
*/

// THROWING STUFF
const isNumberValid = (num) => {
  if (typeof num !== 'number') {
    throw new Error('Please just give me a number'); //TypeError
  }
  return num <= 100;
}

isNumberValid("5");

// AND TAKING CARE OF THEM
try {
  isNumberValid("5");
} catch (e) {
  console.log(`You did something wrong; ${e.message}`);
} finally {
  console.log("I'll always be here...")
}

let str = "Phat string thingy";

try {
  isNumberValid(str);
} catch (e) {
  switch(e.name) {
    case 'TypeError': {
      console.error(`Wrong type provided: ${e.message}`);
      break;
    }
    case 'ReferenceError': {
      console.error(`You used something that wasn't declared: ${e.message}`);
      break;
    }
    default: {
      console.error(`Something else went wrong: ${e.message}`)
      break;
    }
  }
}