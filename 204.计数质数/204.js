/*
 * @lc app=leetcode.cn id=204 lang=javascript
 *
 * [204] 计数质数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// 暴力超时了，这里参考了教程来解决问题
var countPrimes = function(n) {
  if(n <= 1){
    return 0;
  }
  if(n <= 2){
    return 0;
  }
  var result = [2];
  var array = [];
  for(var i = 3; i < n; i = i + 2){
    array.push(i);
  }

  for(var i = 0; i < array.length; i++) {
    var num = array[i];
    var flag = true;
    for(var j = 0; j < result.length; j++) {
      if( num % result[j] == 0){
        flag = false;
        break;
      }
      if( num < result[j] * result[j]){
        break;
      }
    }
    if(flag){
      result.push(num)
    }
  }
  return result.length
};
// @lc code=end

