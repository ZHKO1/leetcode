/*
 * @lc app=leetcode id=268 lang=javascript
 *
 * [268] Missing Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    var result = 0;
    for(var i = 0;i <= nums.length; i++){
        result = result ^ i;
    }
    for(var i = 0;i < nums.length; i++){
        result = result ^ nums[i];
    }
    return result;
};
// @lc code=end

