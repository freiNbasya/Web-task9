const chai = require('chai');
const assert = chai.assert;
const getFactorial = require('./factorial');

describe('getFactorial', function () {
  it('factorial of 5 int', function () {
    assert.equal(getFactorial.getFactorial(5), 120);
  });
  it('factorial of 5 string', function () {
    assert.equal(getFactorial.getFactorial('5'), 120);
  });
  it('not a number', function () {
    assert.equal(getFactorial.getFactorial('blabla'), 'not a number');
  });
});
