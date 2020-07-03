/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  var result = 0;
  var i = 0;
  while( n > 0){
    n = n - Math.pow(2, Math.floor(Math.log2(n)));
    result++;
  }
  return result;
};