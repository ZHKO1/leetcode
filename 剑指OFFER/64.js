/**
 * @param {number} n
 * @return {number}
 */
var sumNums = function(n) {
  return fun(n);
  function fun(n){
    return n && (n + fun(n - 1));
  }
};