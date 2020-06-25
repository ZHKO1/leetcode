/*
 * @lc app=leetcode id=96 lang=javascript
 *
 * [96] Unique Binary Search Trees
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
  var map = {
    0: 1,
    1: 1,
  };
  return dfs(n);


  function dfs(n){
    if(map[n]){
      return map[n];
    }

    var result = 0;

    for(var i = 1; i <= n; i++){
      var leftNumber = dfs(i - 1);
      var rightNumber = dfs(n - i);
      result += leftNumber * rightNumber;  
    }
    map[n] = result;
    return result;
  }
};
// @lc code=end

