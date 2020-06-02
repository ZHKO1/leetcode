/*
 * @lc app=leetcode id=540 lang=javascript
 *
 * [540] Single Element in a Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    var low = 0;
    var high = nums.length - 1;

    while(low < high){
        var middle = Math.floor((low + high) / 2);
        if(
            (middle % 2 == 1) && (nums[middle] == nums[middle - 1]) || 
            (middle % 2 == 0) && (nums[middle] == nums[middle + 1])             
        ){
            low = middle + 1;
        }else{
            high = middle;
        }
    }
    return nums[high];
};
// @lc code=end

