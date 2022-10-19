// JavaScript didn't have any native way of organizing code before ES6.
// Node solved this by using CommonJS.
// CommonJS is a project with the goal to establish conventions
// on the module ecosystem for JavaScript outside of the web browser.

const greeter = require("./greeter.js");

console.log(`Greeter says ${greeter.sayHello()}!!`);

// Importing a directory (well sorta)
// require('./lib/repo.js'); // use repo.js
// require('./validations'); // use index.js in the directory validations
