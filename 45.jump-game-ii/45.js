/*
 * @lc app=leetcode id=45 lang=javascript
 *
 * [45] Jump Game II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    var jumpNumber = 0;
    var nextRange = 0 + nums[0];
    var nextnextRange = 0 + nums[0];
    for(var i = 1; i < nums.length; i++){
        if(nextRange >= nums.length - 1){
            return jumpNumber + 1;
        }      
        if(nextnextRange < i + nums[i]){
            nextnextRange = i + nums[i];
        }
        if(i == nextRange){
            nextRange = nextnextRange;
            jumpNumber ++;
        }
    }
    return jumpNumber
};
// @lc code=end

