/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function(n) {
  var length = Math.pow(10, n);
  var result = [];
  for(var i = 1; i < length; i++){
    result.push(i);
  }
  return result;
};