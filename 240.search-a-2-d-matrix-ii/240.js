/*
 * @lc app=leetcode id=240 lang=javascript
 *
 * [240] Search a 2D Matrix II
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  var height = matrix.length - 1;
  if(height == -1){
    return false;
  }
  var width = matrix[0].length - 1;
  if(width == -1){
    return false;
  }
  var rt = [0, width];
  while( (rt[0] >= 0) && (rt[0] <= height) && (rt[1] >= 0) && (rt[1] <= width) ){
    var y = rt[0];
    var x = rt[1];
    var item = matrix[y][x];
    if(item == target){
      return true
    }else if(item < target){
      y++;
    }else{
      x--;
    }
    rt = [y, x];
  }
  return false;    
};
// @lc code=end

