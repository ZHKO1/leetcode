/*
 * @lc app=leetcode id=162 lang=javascript
 *
 * [162] Find Peak Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    var before = [-Infinity];
    var after = [-Infinity]
    var newNums = before.concat(nums).concat(after);
    var low = 1;
    var high = newNums.length - 2;
    while(low < high){
      var middle = Math.ceil((low + high) / 2);
      var nums_before = newNums[middle - 1];
      var nums_middle = newNums[middle];
      var nums_after = newNums[middle + 1];
      if((nums_before < nums_middle) && (nums_middle > nums_after)){
        return middle - 1;
      } else if((nums_before < nums_middle) && (nums_middle < nums_after)){
        low = middle + 1;
      } else{
        high = middle - 1;
      }
    }
    return high - 1;
};
// @lc code=end

