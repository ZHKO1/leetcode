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

// 65
/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
  var string = deleteLeftRightSpace(s);
  return isExponentOrSmallNumberOrInteger(string);
};

// 判断是否指数
// 前部分可以是整数也可以是小数点，正负也无所谓
// 后部分只能是整数，但正负也同样无所谓
function isExponentOrSmallNumberOrInteger(s){
  var e_index = s.indexOf('e');
  if(e_index == -1){
    return getLeftPlusMinus(s, isSmallNumberOrInteger)
  } else {
    var eBefore = s.slice(0, e_index);
    var eAfter = s.slice(e_index + 1);   
    if(eBefore == "" || eAfter == ""){
      return false;      
    }
    return getLeftPlusMinus(eBefore, isSmallNumberOrInteger) && getLeftPlusMinus(eAfter, isInteger); 
  }
}

// 判断是否是正负数，callback决定是检查纯整数还是小数
function getLeftPlusMinus(s, callback){
  var plus = "+";
  var minus = "-";
  if((s.indexOf(plus) == -1) && (s.indexOf(minus) == -1)){
    return callback(s);
  }
  if((s.indexOf(plus) == 0) || (s.indexOf(minus) == 0)){
    s = s.slice(1);
    return callback(s);
  }
  return false;
}

// 判断是否是小数或正整数（不带正负号）
// case1 .1
// case2 1.
// case3 1.1
// case4 1234
function isSmallNumberOrInteger(s){
  var pointer = s.indexOf('.');
  if(pointer == -1){
    return isInteger(s)
  } else {
    var pointerBefore = s.slice(0, pointer);
    var pointerAfter = s.slice(pointer + 1);   
    if(pointerBefore == ""){
      return (pointerAfter !== "") && (isInteger(pointerAfter));      
    }
    if(pointerAfter == ""){
      return (pointerBefore !== "") && (isInteger(pointerBefore));      
    }
    return isInteger(pointerAfter) && isInteger(pointerBefore); 
  }
}

// 判断是否是纯整数（不带正负号）
function isInteger(s){
  if(s == ""){
    return false;
  }
  for(var i = 0;  i < s.length; i++){
    var ch = s[i].charCodeAt();
    if(ch < 48 || ch > 57){
      return false;
    }
  }
  return true;
}

function deleteLeftRightSpace(s){
  var right = s.length - 1;
  while(s[right] == " "){
    right--;
  }
  s = s.slice(0, right + 1);
  var left = 0;
  while(s[left] == " "){
    left++;
  }
  s = s.slice(left);
  return s;  
}
