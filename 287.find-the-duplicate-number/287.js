/*
 * @lc app=leetcode id=287 lang=javascript
 *
 * [287] Find the Duplicate Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  var flag = true;
  var slowIndex = 0;
  var fastIndex = 0;
  while(flag){
    slowIndex = nums[slowIndex];
    fastIndex = nums[nums[fastIndex]];
    if(slowIndex == fastIndex){
      flag = false;
      break;
    }
  }
  flag = true;
  slowIndex = 0;
  while(flag){
    slowIndex = nums[slowIndex];
    fastIndex = nums[fastIndex];
    if(slowIndex == fastIndex){
      return slowIndex;
    }
  }
};
// @lc code=end

