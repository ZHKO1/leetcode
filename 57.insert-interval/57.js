/*
 * @lc app=leetcode id=57 lang=javascript
 *
 * [57] Insert Interval
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
  intervals.push(newInterval);
  intervals.sort((a,b)=>(a[0]-b[0]));
  var result = [];
  for(var i = 0;i< intervals.length;i++) {
    var cur = intervals[i];    
    if(result.length == 0){
      result.push(cur);
      continue;
    } else {
      var result_last = result[result.length - 1];

      var a_0 = result_last[0];
      var a_1 = result_last[1];

      var b_0 = cur[0];
      var b_1 = cur[1];

      if(a_1 >= b_0){
        result_last[0] = Math.min(a_0, b_0);
        result_last[1] = Math.max(a_1, b_1);        
      } else {
        result.push(cur);
      }
    }
  };
  return result;
};
// @lc code=end

