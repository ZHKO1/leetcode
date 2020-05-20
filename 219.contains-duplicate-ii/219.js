/*
 * @lc app=leetcode id=219 lang=javascript
 *
 * [219] Contains Duplicate II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    var hash = {};
    for( i=0; i<nums.length; i++){
        var current = nums[i];
        if(typeof hash[current] !== "undefined"){
            var j = hash[current];
            if(i - j > k){
                hash[current] = i;
            }else{
                return true;
            }
        } else {
            hash[current] = i;
        }
    };
    return false;
};
// @lc code=end

