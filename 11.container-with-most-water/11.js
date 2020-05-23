/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Container With Most Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  var min = 0;
  var max = height.length - 1;
  var result = 0;
  while(min !== max){
    var minV = height[min];
    var maxV = height[max];
    if(minV <= maxV){
      var value = minV * (max - min);
      result = Math.max(result, value);
      min ++;
    } else{
      var value = maxV * (max - min);
      result = Math.max(result, value);
      max --;
    }
  };
  return result;
};
// @lc code=end

