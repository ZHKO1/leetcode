/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  if(n == 0){
    return 1;
  }
  var flag = false;
  if(n < 0){
    flag = true;
  }

  var result = dfs(Math.abs(n));
  
  return flag ? 1.0 / result : result;

  function dfs(n){
    if(n == 1){
      return x
    }
    var tmp;
    if(n % 2 == 0){
      tmp = dfs(n / 2);
      return tmp * tmp;
    } else {
      tmp = dfs( (n - 1) / 2);
      return tmp * tmp * x;
    }
  }
};