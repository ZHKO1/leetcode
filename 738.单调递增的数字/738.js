/*
 * @lc app=leetcode.cn id=738 lang=javascript
 *
 * [738] 单调递增的数字
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
var monotoneIncreasingDigits = function(N) {
  var array = getArray(N);
  var i;
  for ( i = 1; i < array.length; i++ ){
    if(array[i] < array[i - 1]){
      array[i - 1] = array[i - 1] - 1;
      var j = i - 1;
      while(array[j] < array[j - 1]){
        array[j - 1] = array[j - 1] - 1;
        j--;
      }
      var k = j + 1;
      while(k < array.length){
        array[k] = 9;
        k++;
      }
      break;
    }
  }
  var result = 0;
  for ( i = 1; i < array.length; i++ ){
    result = result * 10 + array[i];
  }
  return result;

  function getArray ( N ) {
    var array = [];
    while ( N > 0) {
      var n = N % 10;
      array.unshift(n);
      N = Math.floor(N / 10);
    }
    array.unshift(0);
    return array;
  }
};
// @lc code=end

