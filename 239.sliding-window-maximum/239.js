/*
 * @lc app=leetcode id=239 lang=javascript
 *
 * [239] Sliding Window Maximum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  var result = [];
  var tmp = [];
  for(var i = 0;i < nums.length;i++){
    while(tmp.length && (nums[tmp[tmp.length - 1]] <= nums[i])){
      tmp.pop();
    }
    tmp.push(i);
    if(tmp[0] <= i - k){
      tmp.splice(0,1);
    }
    if(i >= k - 1){
      result.push(nums[tmp[0]]);
    }
  }
  return result;
};
// @lc code=end

