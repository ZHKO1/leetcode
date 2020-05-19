/*
 * @lc app=leetcode id=169 lang=javascript
 *
 * [169] Majority Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var length = nums.length;
    var line = Math.floor(length/2);
    var hash = {};
    for(var i = 0; i < length; i++){
        var current = nums[i];
        if(hash[current]){
            hash[current]++;
        }else{
            hash[current] = 1;
        }
        if(hash[current] > line){
            return current;
        }
    };
};
// @lc code=end

