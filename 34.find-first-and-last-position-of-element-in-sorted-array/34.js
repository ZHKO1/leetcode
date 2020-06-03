/*
 * @lc app=leetcode id=34 lang=javascript
 *
 * [34] Find First and Last Position of Element in Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    var index_low = search_low(nums, target);
    var index_high = search_high(nums, target);
    if(nums[index_low] == target){
        return [index_low, index_high];
    }else{
        return [-1, -1]
    }
};

var search_low = function(nums, target){
    var low = 0;
    var high = nums.length - 1;
    while(low < high){
        var middle = Math.floor((low + high)/2);
        if(nums[middle] == target){
            high = middle;
        }else if(nums[middle] < target){
            low = middle + 1;
        }else{
            high = middle - 1;
        }
    }
    return low;
}

var search_high = function(nums, target){
    var low = 0;
    var high = nums.length - 1;
    while(low < high){
        var middle = Math.ceil((low + high)/2);
        if(nums[middle] == target){
            low = middle;
        }else if(nums[middle] < target){
            low = middle + 1;
        }else{
            high = middle - 1;
        }
    }
    return low;
}
// @lc code=end

