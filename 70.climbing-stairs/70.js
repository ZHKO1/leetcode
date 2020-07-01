/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
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
      result = step1 + step2;
    }
    map[n] = result;
    return result;
  }
};
// @lc code=end

