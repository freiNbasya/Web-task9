function getMultiply(x) {
    const result = x;
  
    function insideMultiply(y) {
      return getMultiply(result * y);
    }
  
    insideMultiply.valueOf = function () {
      return result;
    };
  
    return insideMultiply;
  }
  module.exports = {
    getMultiply: getMultiply,

};