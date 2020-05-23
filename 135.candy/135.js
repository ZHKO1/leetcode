/*
 * @lc app=leetcode id=135 lang=javascript
 *
 * [135] Candy
 */

// @lc code=start
/**
 * @param {number[]} ratings
 * @return {number}
 */
// 参考了别人的解法
var candy = function(ratings) {
  var sum = 1;
  var top = 0;
  var down = 0;
  var high = 0;
  for(var i = 1; i < ratings.length; i++) {
    var cur = ratings[i];
    var pre = ratings[i - 1];
    if(cur > pre){
      top++;
      down = 0;
      high = 1 + top;
      sum += 1 + top;
    } else if (cur < pre){
      down++;
      top = 0;
      sum += 1 + down + ((high > down) ? -1 : 0);
    }else{
      top = 0;
      down = 0;
      high = 1;
      sum += 1;
    }
  };
  return sum;
};
// @lc code=end

