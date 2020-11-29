/*
 * @lc app=leetcode.cn id=976 lang=javascript
 *
 * [976] 三角形的最大周长
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number}
 */
var largestPerimeter = function(A) {
  var length = A.length;
  var max = 0;
  A.sort(function(a, b){
    return a - b;
  });
  for(var i = length - 1; i >= 0; i--){
    if(i < 2){
      break;
    }
    var a = A[i];
    var b = A[i - 1];
    var c = A[i - 2];
    if(a < b + c){
      max = a + b + c;
      break;
    }
  }
  return max;
};
// @lc code=end

