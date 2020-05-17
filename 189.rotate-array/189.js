/*
 * @lc app=leetcode id=189 lang=javascript
 *
 * [189] Rotate Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  var k = k % nums.length;
  var tmp = nums.splice(nums.length - k, k)
  nums.splice(0, 0, ...tmp);
  return;
};
// @lc code=end

