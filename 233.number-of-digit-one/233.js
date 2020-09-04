/*
 * @lc app=leetcode id=233 lang=javascript
 *
 * [233] Number of Digit One
 */

// @lc code=start

/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function(n) {
  if(n < 0){
      return 0
  }
return count(n, 0);

function count(n, one_number){
  var result = 0;
  var bit = getBitFromNum(n);
  if(bit == 0){
    return 0;
  }
  if(bit == 1){
    return 1 + one_number;
  }
  var leftest_bit = getLeftBitFromNum(n);
  var rest_bit = n - leftest_bit * Math.pow(10, bit - 1);
  for(var i = 0; i <= leftest_bit; i++){
    if(i < leftest_bit){
      if(i == 1){
        result = result + countDigitOne_9999(bit - 1, one_number + 1) + Math.pow(9, bit - 1) * (one_number + 1);
      } else {
        result = result + countDigitOne_9999(bit - 1, one_number);
      }
    }else{
      if(i == 1){
        result = result + count(rest_bit, one_number + 1) + countNoOne(rest_bit) * (one_number + 1);
      } else {
        result = result + count(rest_bit, one_number);
      }
    }
  }
  return result;
}
// 计算数字有多少位
function getBitFromNum( n ){
  var result = 0;
  while( n ){
    n = Math.floor( n / 10 );
    result ++;
  }
  return result;
}
// 获取最左位
function getLeftBitFromNum( n ) {
  while ( n > 9 ) {
    n = Math.floor( n / 10 );
  }
  return n;
}

function getNumberOfNInM(m, n){
  if(n == 1){
    return m;
  }
  var result = 0;
  for(var i = 1; i <= m; i++){
    result += getNumberOfNInM(m - i, n - 1);
  }
  return result;
}

function countDigitOne_9999(bit, one_number){
  var result = 0;
  for(var i = 1; i <= bit; i++){
    var count = getNumberOfNInM(bit, i);
    result += count * Math.pow(9, bit - i) * (i + one_number);
  }
  return result;
}

function countNoOne(n){
  if(n == 0){
    return 1;
  }
  var result = 0;
  var bit = getBitFromNum(n);
  var left = getLeftBitFromNum(n);
  for(var i = 0; i <= left; i++ ){
    if(i == left){
      if(i !== 1){
        var rest = n - left * Math.pow(10, bit - 1);
        result += countNoOne(rest);
      }
    }else{
      if(i !== 1){
        result += Math.pow(9, bit - 1);
      }
    }
  }
  return result;
}
};

//countDigitOne(123)
// @lc code=end

