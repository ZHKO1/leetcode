/*
 * @lc app=leetcode id=136 lang=javascript
 *
 * [136] Single Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    // 网上解法里最酷炫的一种 能想出异或的都是天才啊
    for(var i = 1; i< nums.length;i++){
        nums[0] = nums[0] ^ nums[i]; 
    };
    return nums[0];
};
// @lc code=end

