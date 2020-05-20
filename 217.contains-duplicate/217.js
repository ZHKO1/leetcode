/*
 * @lc app=leetcode id=217 lang=javascript
 *
 * [217] Contains Duplicate
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var hash = {};
    for(var i = 0; i < nums.length; i++){
        var current = nums[i];
        if(hash[current]){
            return true;
        } else {
            hash[current] = 1;
        }
    }
    return false;
};
// @lc code=end

