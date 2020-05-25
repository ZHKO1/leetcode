/*
 * @lc app=leetcode id=283 lang=javascript
 *
 * [283] Move Zeroes
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var pointer = -1;
    for(var i = 0; i< nums.length; i++){
      var cur = nums[i];
      if(cur){
        pointer++;
        nums[pointer] = cur;
      }
    }
    for(pointer = pointer + 1; pointer< nums.length; pointer++){
      nums[pointer] = 0;
    }
};
// @lc code=end

