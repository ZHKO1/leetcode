/*
 * @lc app=leetcode id=41 lang=javascript
 *
 * [41] First Missing Positive
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

var firstMissingPositive = function(nums) {
  var i = 0;
  var min = Infinity;
  var max = 1;

  var Hash = Array(nums.length + 1 );

  for(i = 0; i < nums.length; i++){
    var current = nums[i];
    if(current > 0){
      if( current < min ){
        min = current;
      }
      if(current > max){
        max = current;
      }
    }
    Hash[current] = 1;
  };
  if(min > 1){
    return 1;
  }
  for(i = 1; i <= max; i++){
    var current = Hash[i];
    if(!current){
      return i;
    }
  };
  return max+1;
}
// @lc code=end

