/*
 * @lc app=leetcode id=118 lang=javascript
 *
 * [118] Pascal's Triangle
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  if(numRows == 0){
    return [];
  }
  var result = [];
  for(var i = 0;i < numRows; i++) {
    var length = i + 1;
    var start = 0;
    var end = start + length - 1;
    var array = Array(length)
    for(var j = start; j <=end; j++) {
      if (j == start){
        array[j] = 1;
        continue;
      }
      if((j > start) && (j < end)){
        array[j] = result[i - 1][j - 1] + result[i - 1][j];
      }
      if (j == end){
        array[j] = 1;
      }
    };
    result.push(array);
  };
  return result;
};
// @lc code=end

