/*
 * @lc app=leetcode.cn id=714 lang=javascript
 *
 * [714] 买卖股票的最佳时机含手续费
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
// 不会做，参考了题解
var maxProfit = function(prices, fee) {
  var arrayA = []; // 前k个股票的最大利润(此时手里有股票)
  for(var i = 0;i < prices.length; i++){
    arrayA.push(0);
  };
  arrayA[0] = -1 * prices[0];
  var arrayB = []; // 前k个股票的最大利润(此时手里无股票)
  for(i = 0;i < prices.length; i++){
    arrayB.push(0);
  };

  for(i = 1;i < prices.length; i++) {
    arrayA[i] = Math.max(arrayA[i - 1], arrayB[i - 1] - prices[i]);
    arrayB[i] = Math.max(arrayB[i - 1], arrayA[i - 1] + prices[i] - fee);
  };
  return arrayB[prices.length - 1];
};
// @lc code=end

