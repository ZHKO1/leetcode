/*
 * @lc app=leetcode id=167 lang=javascript
 *
 * [167] Two Sum II - Input array is sorted
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  for(var i = 0; i < numbers.length; i++){
    var tmp1 = numbers[i];
    var tmp2 = target - tmp1;
    if((tmp2 <= numbers[numbers.length - 1]) && (tmp2 >= tmp1)){
      var j = search_default(numbers, i + 1, numbers.length - 1, tmp2);
      if(typeof j !== 'undefined'){
        return [i + 1, j + 1]
      }
    }

    if(tmp1 <= target) {
    }
  }
};

var search_default = function(nums, low, high, target){
  while(low <= high){
    var middle = Math.floor((low + high)/2);
    var value_m = nums[middle];
    if( value_m > target){
      high = middle - 1;
    } else if( value_m < target ){
      low = middle + 1;
    } else {
      return middle;
    }
  }
  return;
}

// @lc code=end

