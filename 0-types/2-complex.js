// COMPLEX TYPES
// JavaScript Object
const ob = { name: 'Yoda', profession: 'Jedi' };
console.log(`${ob.name} is an ${typeof ob}`);

// Array
const arr = [1, 2, 3, 4];
console.log(`arr is an ${typeof arr}`);

const mixedArr = [1, "2", [1, 2], null];
console.log(`Mixing is ok\n\t"2" is a ${typeof mixedArr[1]}\n\tand [1, 2] is an ${typeof mixedArr[2]}`);

// Function
const add = function (a, b) {
  return a + b;
}
console.log(`add is a ${typeof add}`);

// Arrow function
const sub = (a, b) => a - b;
console.log(`sub is a ${typeof sub}`);
