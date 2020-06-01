/*
 * @lc app=leetcode id=154 lang=javascript
 *
 * [154] Find Minimum in Rotated Sorted Array II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  var low = 0;
  var high = nums.length - 1;
  while(low < high){
    var middle = Math.ceil((low + high)/2);
    var value_m = nums[middle];
    var value_pre = nums[middle - 1];
    if( value_m < value_pre ) {
      return value_m
    } else {
      var value_l = nums[low];
      var value_h = nums[high];

      if(value_l === value_h){
        high = high - 1;
      } else {
        if(value_m <= value_h){
          high = middle - 1;
        } else {
          low = middle + 1;
        }  
      }
    }
  }
  return nums[high];
};
// @lc code=end

