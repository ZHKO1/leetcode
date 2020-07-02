/*
 * @lc app=leetcode id=79 lang=javascript
 *
 * [79] Word Search
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  var height = board.length;
  if(height == 0){
    return false;
  }
  var width = board[0].length;
  if(width == 0){
    return false;
  }
  for(var i = 0; i < width; i++){
    for(var j = 0; j < height; j++){
      if(dfs(i, j, word)){
        return true;
      };
    }  
  }
  return false;


  function dfs(i, j, nextPart){
    var now = board[j][i];
    if(now == false){
      return false;
    }
    if(now == nextPart){
      return true;
    }

    var next = nextPart[0];
    if(now == next){
      board[j][i] = false;
      var top = [i, j - 1];
      var bottom = [i, j + 1];
      var left = [i - 1, j];
      var right = [i + 1, j];
      var directionArray = [top, bottom, left, right];
      for(var k = 0; k < directionArray.length; k++){
        var [i_, j_] =  directionArray[k];
        if( i_ < 0 || i_ > width - 1 || j_ < 0 || j_ > height - 1 ){
          continue;
        } else {
          if(dfs(i_, j_, nextPart.slice(1))){
            return true
          }
        }
      }
      board[j][i] = now;
    } else {
      return false;
    }
    return false
  }
};
// @lc code=end

