/*
 * @lc app=leetcode id=75 lang=javascript
 *
 * [75] Sort Colors
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
//三路排序 这种题目我还能理解，但是...wiggle-sort 和 wiggle-sortII 怎么用到这特性？
var sortColors = function(nums) {
  var zeroPointer = -1;
  var twoPointer = nums.length;
  var onePointer = -1;
  var i = 0;
  while(twoPointer > onePointer + 1){
    var index = onePointer + 1;
    var cur = nums[index];
    if(cur == 0){
      onePointer ++;
      zeroPointer ++;
      nums[zeroPointer] = 0;
      (onePointer !== zeroPointer) && (nums[onePointer] = 1);
    }else if(cur == 1){
      onePointer ++;
    }else{
      twoPointer--;
      nums[index] = nums[twoPointer];
      nums[twoPointer] = 2;
    }
  }
};
// @lc code=end

