/*
 * @lc app=leetcode.cn id=646 lang=javascript
 *
 * [646] 最长数对链
 */

// @lc code=start
/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function(pairs) {
  if(pairs.length == 0){
    return 0;
  }
  var dp = [];
  pairs.sort(function(a, b){
    return a[1] - b[1]
  });
  for(var i = 0; i < pairs.length; i++){
    dp.push(1);
  };
  var max = 1;
  for(var i = 1; i < pairs.length; i++){
    var pair_i = pairs[i];
    for (var j = 0; j < i; j++) {
      var pair_j = pairs[j];
      if (pair_j[1] < pair_i[0]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
        max = Math.max(max, dp[i])
      } 
    };
  };
  return max;
};
// @lc code=end

