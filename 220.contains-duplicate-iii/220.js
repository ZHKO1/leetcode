/*
 * @lc app=leetcode id=220 lang=javascript
 *
 * [220] Contains Duplicate III
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {    
    for(var i = 0; i < nums.length;i++){
        for(var j = i + 1;j < nums.length;j++){
            if(j - i <= k){
                if(Math.abs(nums[i] - nums[j]) <= t){
                    return true;
                }
            } else{
                break;
            }
        }    
    }
    return false;
};
// @lc code=end
// 暴力解法就过了，然而评论里都在讨论木桶排序....wtf
console.log(containsNearbyAlmostDuplicate([1,2,3,1],3,0));
console.log(containsNearbyAlmostDuplicate([1,0,1,1],1,2));
console.log(containsNearbyAlmostDuplicate([1,5,9,1,5,9],2,3));