function getFactorial(n) {
    if (isNaN(n) || n < 0) {
      return 'not a number';
    }
  
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * getFactorial(n - 1);
    }
  }
  
  module.exports = {
    getFactorial: getFactorial,

};