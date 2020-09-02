/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function(n) {
  // 算出总共多少位
  var bit = getBitFromNum(n);
  if(bit == 0){
    return 0;
  }
  if(bit == 1){
    return 1;
  }
  // 总共n位，那么先计算去除最左位后剩下n-1位(都为9)情况下的数量
  var part1 = countDigitOne_9999(bit - 1);
  // 计算最左位是多少
  var left_bit = getLeftBitFromNum(n);
  // 计算当最左位是1时，所有排列一共有多少个1
  var part2 = countDigitOne_19999(bit - 1);

  var result = 0;
  if(left_bit == 1){
    result = part1 + part2;
  } else if(left_bit >= 2) {
    // 计算当最左位是2到left_bit - 1时，所有排列一共有多少个1
    var part3 = part1 * (left_bit - 2);
    // 计算去掉最左位，剩下位的排列一共有多少个1
    var part4 = countDigitOne(n - left_bit * Math.pow(10, bit - 1));
    result = part1 + part2 + part3 + part4;
  }
  return result;
};


// m个格子，n个苹果，一个苹果对应一个格子 一共有多少种摆法？
var getNumberOfNInM = function(m, n){
  if(n == 1){
    return m;
  }
  var result = 0;
  for(var i = 1; i <= m; i++){
    result += getNumberOfNInM(m - i, n - 1);
  }
  return result;
}

// 计算数字有多少位
var getBitFromNum = function(n){
  var result = 0;
  while(n){
    n = Math.floor(n/10);
    result++;
  }
  return result;
}

// 获取最左位
var getLeftBitFromNum = function( n ) {
  while ( n > 9 ) {
    n = Math.floor(n/10);
  }
  return n;
}


// 计算n位数字下 能有多少摆法（至少要有一个1）,然后所有摆法的1出现了几次，比如11是出现了2次
var countDigitOne_9999 = function(bit){
  var result = 0;
  for(var i = 1; i <= bit; i++){
    var count = getNumberOfNInM(bit, i);
    result += count * Math.pow(9, bit - i) * i;
  }
  return result;
}

var countDigitOne_19999 = function(bit){
  var result = 0;
  
  result += Math.pow(9, bit);
  
  for(var i = 1; i <= bit; i++){
    var count = getNumberOfNInM(bit, i);
    result += count * Math.pow(9, bit - i) * (i + 1);
  }
  return result;
}
