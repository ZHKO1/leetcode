/*
 * @lc app=leetcode id=35 lang=javascript
 *
 * [35] Search Insert Position
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  var head = 0;
  var end = nums.length;
  while(head <= end){
    var middle = Math.floor((head + end)/2);
    var value = nums[middle];
    if(value === void 0){
      return head;
    }
    if(value == target){
      return middle;
    } else if(value < target) {
      head = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  return head;
};
// @lc code=end

