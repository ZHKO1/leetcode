/*
 * @lc app=leetcode.cn id=164 lang=javascript
 *
 * [164] 最大间距
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 题意要求时间以及空间都是O(n)，但是我想不出
// 果断排序了再遍历
var maximumGap = function(nums) {
  nums.sort((a, b) => {
    return a - b;
  });
  var max = 0;
  for(var i = 1; i < nums.length; i++){
    var now = nums[i];
    var pre = nums[i - 1];
    max = Math.max(max, now - pre);
  }
  return max;
};
// @lc code=end