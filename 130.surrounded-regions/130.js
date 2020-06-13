/*
 * @lc app=leetcode id=130 lang=javascript
 *
 * [130] Surrounded Regions
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
  var height = board.length;
  if(height <= 2)return;
  var width = board[0].length;
  if(width <= 2)return;

  var checkGrid = new Array(height).fill(1).map(() => new Array(width).fill(false));  
  for (var j = 1; j < height - 1; j++) {
    for (var i = 1; i < width - 1; i++) {
      var current = board[j][i];
      var checkFlag = checkGrid[j][i];
      if(!checkFlag && (current == "O")){
        BFS(i, j);
      }
    }
  }

  return;

  function BFS(i, j){    
    var queue = [];
    var OtoX = [];
    var SF = true; // SurroundedFlag

    queue.push({i,j});
    checkGrid[j][i] = true;

    while ( queue.length > 0 ) {
      var top = queue.shift();
      OtoX.push(top);
      var {i:i_, j:j_} = top;

      var left = (i_ !== 0 ) && !checkGrid[j_][i_ - 1] && checkEqual(i_ - 1, j_);
      if(left){
        checkGrid[j_][i_ - 1] = true;
        if(i_ - 1 == 0){
          SF = false;
        }else{
        }
        queue.push({i: i_ - 1, j: j_});
      }

      var right = (i_ !== width - 1 ) && !checkGrid[j_][i_ + 1] && checkEqual(i_ + 1, j_);
      if ( right ) {
        checkGrid[j_][i_ + 1] = true;
        if(i_ + 1 == width - 1){
          SF = false;
        }else{
        }
        queue.push({i: i_ +1, j: j_});
      }

      var top = (j_ !== 0 ) && !checkGrid[j_ - 1][i_] && checkEqual(i_, j_ - 1);
      if ( top ) {
        checkGrid[j_ - 1][i_] = true;
        if(j_ - 1 == 0){
          SF = false;
        }else{          
        }
        queue.push({i: i_, j: j_ - 1});
      }

      var bottom = (j_ !== height - 1 ) && !checkGrid[j_ + 1][i_] && checkEqual(i_, j_ + 1);
      if ( bottom ) {
        checkGrid[j_ + 1][i_] = true;
        if(j_ + 1 == height - 1){
          SF = false;
        }else{          
        }
        queue.push({i: i_, j: j_ + 1});
      }
    }

    if( SF ){
      for(var index = 0; index < OtoX.length; index++){
        var obj = OtoX[index];
        board[obj.j][obj.i] = "X"
      }
    }
  }


  function checkEqual(i, j){
    var current = board[j][i];
    return (current == "O") ? true : false;
  }
};
// @lc code=end

