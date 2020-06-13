/*
 * @lc app=leetcode id=52 lang=javascript
 *
 * [52] N-Queens II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
  if(n == 0){
    return 1;
  }
  var grid = new Array(n).fill(1).map(()=>(new Array(n).fill('.')));
  var result = 0;
  for(var i = 0; i < n; i ++){
    dp(i,0);
  }
  return result

  function dp(i, j){
    grid[j][i] = "Q";
    if(check(i, j)){
      if(j < n - 1){
        for(var i_ = 0; i_ < n; i_ ++){
          dp(i_, j + 1);
        }  
      }else{
        result++;
        // var tmp = JSON.parse(JSON.stringify(grid));
        // tmp = tmp.map((item) => item.join(''));
        // console.log(tmp);
      }      
    }
    grid[j][i] = ".";
  }

  function check(i, j){
    var i_ = i;
    var j_ = j;
    i_--; j_--;
    while(i_ >= 0 && j_ >= 0){
      if(grid[j_][i_] == "Q"){
        return false;
      }
      i_--; j_--;
    }
    
    i_ = i;
    j_ = j;
    i_++; j_--;
    while(i_ < n && j_ >= 0){
      if(grid[j_][i_] == "Q"){
        return false;
      }
      i_++; j_--;
    }

    i_ = i;
    j_ = j;
    j_--;
    while(j_ >= 0){
      if(grid[j_][i_] == "Q"){
        return false;
      }
      j_--;
    }
    
    return true;
  }
};
// @lc code=end

