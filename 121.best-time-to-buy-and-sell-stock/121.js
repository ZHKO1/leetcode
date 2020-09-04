/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
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
// @lc code=end

