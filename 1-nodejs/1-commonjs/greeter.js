function sayHello() {
  return "Hello World";
}

module.exports.sayHello = sayHello;

// Behind the scenes

// (function (exports, require, module, __filename, __dirname) {
//   function sayHello() {
//     return 'Hello World!';
//   }

//   module.exports.sayHello = sayHello;
// })

// This ensures that variables are scoped to the module rather than to the global object.