/**
 * @param {number} n
 * @return {number}
 */
var numWays = function(n) {
  var map = {};
  return dfs(n);

  function dfs(n){
    if(map[n] !== void 0){
      return map[n];
    }
    var result = 1;
    if(n == 0){
    } else if (n == 1){
    } else {
      let step1 = dfs(n - 1);
      let step2 = dfs(n - 2);
      result = step1 % 1000000007 + step2  % 1000000007;
    }
    map[n] = result % 1000000007;
    return result % 1000000007;
  }
};