/*
 * @lc app=leetcode id=200 lang=javascript
 *
 * [200] Number of Islands
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function( grid ) {
  var height = grid.length;
  if(height == 0){return 0};
  var width = grid[0].length;
  var checkGrid = new Array(height).fill(1).map(() => new Array(width).fill(false))
  var result = 0;

  for (var j = 0; j < height; j++) {
    for (var i = 0; i < width; i++) {
      var current = grid[j][i];
      var checkFlag = checkGrid[j][i];
      if(!checkFlag && (current == "1")){
        result ++;
        dp(i, j);
      }
    }
  }

  return result;



  function dp(i, j){
    if(!checkGrid[j][i]){
      checkGrid[j][i] = true;
      (i !== 0 ) && checkEqual(i - 1, j) && dp(i - 1, j);
      (i !== width - 1 ) && checkEqual(i + 1, j) && dp(i + 1, j);
      (j !== 0 ) && checkEqual(i, j - 1) && dp(i, j - 1);
      (j !== height - 1 ) && checkEqual(i, j + 1) && dp(i, j + 1);        
    }
  }

  function checkEqual(i, j){
    var current = grid[j][i];
    return (current == "1") ? true : false;
  }
};

// @lc code=end

