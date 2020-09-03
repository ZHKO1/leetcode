/*
  树
  1. 前序遍历，中序遍历，后序遍历 递归/循环
  2. 宽度优先遍历
  3. 最大/小堆 红黑树
  查找与排序
  1. 二分查找
  2. 插入排序 冒泡排序 归并排序 快速排序 （额外空间消耗，平均时间复杂度，最差时间复杂度）


  TODO List
  剑指OFFER 7 循环法
  leetcode 10 动态规划法

*/

//121
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  var Min = prices[0];
  var result = 0;
  for(var i = 1; i < prices.length ;i++){
    result = Math.max(result, prices[i] - Min);
    Min = Math.min(Min, prices[i]);
  }
  return result;
};

// 233
/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function(n) {
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

// 3
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if(s === ''){
    return 0;
  }
  var Max = 0;
  var map = {};
  var left = 0;
  var right = 0;
  while(right <= s.length - 1){
    var c = s[right];
    if(!map[c]){
      map[c] = 1;
      Max = Math.max(Max, right - left + 1);
      right++;
    } else {
      while(s[left] !== c && (left < right)){
        var left_c = s[left];
        map[left_c]--;
        left++;
      }
      left++;
      right++;
    }
  }
  return Max;
};