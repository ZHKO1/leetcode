/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  var min = 0;
  var max = nums.length - 1;
  if (nums[max] < target) {
    return max + 1;
  }
  while(min < max){
    var middle = Math.floor((min + max) / 2);
    var middle_v = nums[middle];
    if ( middle_v == target ) {
      return middle;
    } else if ( middle_v > target ){
      max = middle;
    } else {
      min = middle + 1;
    }
  }
  return min;
};
// @lc code=end

