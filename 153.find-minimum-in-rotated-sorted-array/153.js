/*
 * @lc app=leetcode id=153 lang=javascript
 *
 * [153] Find Minimum in Rotated Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  if(nums[0] <= nums[nums.length - 1]){
    return nums[0]
  }
  var low = 1;
  var high = nums.length - 1;
  while(low <= high){
    var middle = Math.floor((low + high)/2);
    var value_m = nums[middle];
    var value_pre = nums[middle - 1];
    if( value_m < value_pre ) {
      return value_m;
    } else {

      var value_l = nums[low];
      var value_h = nums[high];

      if(value_m < value_h){
        high = middle - 1;
      } else {
        low = middle + 1;
      }
    }
  }
};
// @lc code=end

