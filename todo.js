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