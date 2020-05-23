/*
 * @lc app=leetcode id=128 lang=javascript
 *
 * [128] Longest Consecutive Sequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  if(nums.length == 0){
    return 0;
  }
  var hash = {};
  for(var i = 0;i< nums.length;i++){
    hash[nums[i]] = 1;
  }
  var nums_ = Object.keys(hash).map(e=>parseInt(e));
  var result = 1;
  var tmp = 1;
  nums_.sort(function(a, b){
    return parseInt(a) - parseInt(b)
  });
  for(var j = 1; j < nums_.length; j++){
    if(hash[nums_[j] - 1] && hash[nums_[j]]){
      tmp ++ ;
      result = Math.max(result, tmp);
    }else{
      tmp = 1;
    }
  }
  return result;
};
// @lc code=end

