/*
 * @lc app=leetcode id=55 lang=javascript
 *
 * [55] Jump Game
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    var farest = 0;
    for(var i = 0; i < nums.length; i++){
        if(farest < i){
            return false;
        }
        if(farest <= i + nums[i]){
            farest = i + nums[i];
            if(farest >= nums.length - 1){
                return true;
            }
        }
    }
};
// @lc code=end

