/*
 * @lc app=leetcode.cn id=402 lang=javascript
 *
 * [402] 移掉K位数字
 */

// @lc code=start
/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
  if(num.length == k){
    return "0";
  }
  if(k == 0){
    return num;
  }
  while( k ){
    var dealed_num = deal(num);
    if ( dealed_num == num ) {
      num = dealed_num;
      break;
    } else {
      num = dealed_num;
    }
  }

  if(k){
    num = deleteEnd(num, k);
  }

  var result = deleteStartZero(num);
  return result ? result : "0";

  function deal(num){
    for(var i = 0; i <= num.length - 2; i++){
      var now = parseInt(num[i]);
      var next = parseInt(num[i + 1]);
      if(now > next) {
        k--;
        return num.substring(0, i) + num.substring(i + 1, num.length);
      }
    }
    return num;
  }

  function deleteEnd(num, k){
    return num.substring(0, num.length - k);
  }

  function deleteStartZero(num, k){
    var result = "";
    var index = 0;
    while(num[index] == "0"){
      index++;
    }
    result = num.slice(index)
    return result;
  }
};
// @lc code=end

