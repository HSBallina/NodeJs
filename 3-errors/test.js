// TESTING WITH MOCHA
// npm install --location=global mocha
const assert = require('assert');

const isNumberValid = (num) => {
  if (typeof num !== 'number') {
    throw new Error('Only numbers are allowed');
  }
  return num <= 100;
}

describe('my function', () => {
  it('throws an error when passed in a string as argument', () => {
    assert.throws(() => isNumberValid('text'), new Error('Only numbers are allowed'));
  });

  it('does not throw an error when passed in a number as argument', () => {
    assert.doesNotThrow(() => isNumberValid(12), Error);
  });
});
