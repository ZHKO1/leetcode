/*
 * @lc app=leetcode id=81 lang=javascript
 *
 * [81] Search in Rotated Sorted Array II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
  var low = 0;
  var high = nums.length - 1;
  var rotatedIndex  = searchRotatedIndex(nums);
  if(target == nums[high]){
    return true;
  }else if(target < nums[high]){
    return search_default(nums, rotatedIndex, high, target);
  } else {
    return search_default(nums, low, rotatedIndex - 1, target);
  }
};

var searchRotatedIndex = function(nums) {
  var low = 0;
  var high = nums.length - 1;
  while(low < high){
    var middle = Math.ceil((low + high)/2);
    var value_m = nums[middle];
    var value_pre = nums[middle - 1];
    if( value_m < value_pre ) {
      return middle
    } else {
      var value_l = nums[low];
      var value_h = nums[high];

      if(value_l === value_h){
        low = low + 1;
      } else {
        if(value_m <= value_h){
          high = middle - 1;
        } else {
          low = middle + 1;
        }  
      }
    }
  }
  return high;
};

var search_default = function(nums, low, high, target){
  while(low <= high){
    var middle = Math.floor((low + high)/2);
    var value_m = nums[middle];
    if( value_m > target){
      high = middle - 1;
    } else if( value_m < target ){
      low = middle + 1;
    } else {
      return true;
    }
  }
  return false;
}
// @lc code=end

