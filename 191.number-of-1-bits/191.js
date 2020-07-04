/*
 * @lc app=leetcode id=191 lang=javascript
 *
 * [191] Number of 1 Bits
 */

// @lc code=start
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
// @lc code=end

