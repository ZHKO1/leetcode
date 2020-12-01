/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  var low = findlow(); 
  var high = findhigh();
  if(nums[low] == target){
    return [low, high]
  }else{
    return [-1, -1]
  }

  function findlow(){
    var min = 0;
    var max = nums.length - 1;
    while(min < max){
      var middle = Math.floor((min + max) / 2);
      if( nums[middle] == target ){
        max = middle
      } else if (nums[middle] < target){
        min = middle + 1;
      } else {
        max = middle - 1;
      }
    }
    return min;
  }
  function findhigh(){
    var min = 0;
    var max = nums.length - 1;
    while( min < max ){
      var middle = Math.ceil((min + max) / 2);
      if( nums[middle] == target ){
        min = middle;
      } else if ( nums[middle] < target ){
        min = middle + 1;
      } else {
        max = middle - 1;
      }
    }
    return min;
  }
};
// @lc code=end

