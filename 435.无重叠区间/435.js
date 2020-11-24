/*
 * @lc app=leetcode.cn id=435 lang=javascript
 *
 * [435] 无重叠区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
  if(intervals.length == 0){
    return 0;
  }
  var dp = [];
  intervals.sort(function(a, b){
    return a[1] - b[1]
  });
  for(var i = 0; i < intervals.length; i++){
    dp.push(1);
  };
  var max = 1;
  for(var i = 1; i < intervals.length; i++){
    var interval_i = intervals[i];
    for (var j = 0; j < i; j++) {
      var interval_j = intervals[j];
      if (interval_j[1] <= interval_i[0]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
        max = Math.max(max, dp[i])
      } 
    };
  };
  return intervals.length - max;
};
// @lc code=end

