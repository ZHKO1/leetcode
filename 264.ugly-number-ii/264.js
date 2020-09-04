/*
 * @lc app=leetcode id=264 lang=javascript
 *
 * [264] Ugly Number II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
  var i2 = 0, i3 = 0, i5 = 0;
  var result = [1];
  while(result.length < n){
    var tmp = Math.min(result[i2] * 2, result[i3] * 3, result[i5] * 5);
    result.push(tmp);
    if(tmp == result[i2] * 2){
      i2++;
    }
    if(tmp == result[i3] * 3){
      i3++;
    }
    if(tmp == result[i5] * 5){
      i5++;
    }
  }
  return result[n - 1];
};
// @lc code=end

