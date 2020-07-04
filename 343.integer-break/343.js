/*
 * @lc app=leetcode id=343 lang=javascript
 *
 * [343] Integer Break
 */

// @lc code=start
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
// @lc code=end

