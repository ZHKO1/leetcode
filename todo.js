// 343
/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
  let cacheArray = [0, 1];
  return dfs(n);

  function dfs(n){
    if(cacheArray[n] !== void 0){
      return cacheArray[n];
    }
    let middle = Math.floor( n / 2 );
    let result = 0;
    for(let i = 1; i <= middle; i++){
      let j = n - i;
      let left = Math.max(dfs(i), i);
      let right = Math.max(dfs(j), j);
      result = Math.max(left * right, result);
    }
    cacheArray[n] = result;
    return cacheArray[n];
  }
};
// 191
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
// 参考了网上的解法
var hammingWeight = function(n) {
    var result = 0;
    while(n){
      result += 1;
      n = n & (n - 1);
    }
    return result;
};