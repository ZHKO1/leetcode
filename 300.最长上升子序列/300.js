/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长上升子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  var dp = [];
  for(var i = 0; i < nums.length; i++){
    dp[i] = 1; 
  }
  for(var i = 1; i < nums.length; i++){
    var num_i = nums[i];
    for(var j = 0; j < i; j++){
      var num_j = nums[j]
      if(num_j < num_i){
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  return Math.max.apply(null, dp);
};
// @lc code=end

