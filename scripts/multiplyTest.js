const chai = require('chai');
const assert = chai.assert;
const getMultiply = require('./multiply');

describe('getMultiply', function () {
  it('Multiply 3 numbers, should return 60', function () {
    assert.equal(getMultiply.getMultiply(2)(3)(10), 60);
  });
  it('multiply 1 number, should return 3', function () {
    assert.equal(getMultiply.getMultiply(3), 3);
  });
  it('multiply 4 numbers, should return -769072', function () {
    assert.equal(getMultiply.getMultiply(-1)(677)(568)(2), -769072);
  });
});
