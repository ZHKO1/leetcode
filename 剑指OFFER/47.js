/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxValue = function(grid) {
  var width = grid[0].length;
  var height = grid.length;
  var Max = [];
  for(var i = 0; i < height; i++){
    Max[i] = [];
    for(var j = 0; j < width; j++){
      Max[i][j] = 0;
    }
  }
  
  for(var i = 0; i < height; i++){
    for(var j = 0; j < width; j++){
      if((i == 0) && (j == 0)){
        Max[i][j] = grid[i][j];
        continue;
      }
      if(i == 0){
        Max[i][j] = Max[i][j - 1] + grid[i][j];
        continue;
      }
      if(j == 0){
        Max[i][j] = Max[i - 1][j] + grid[i][j];
        continue;
      }
      Max[i][j] = Math.max(Max[i - 1][j], Max[i][j - 1]) + grid[i][j];
    }
  }


  return Max[height - 1][width - 1];
};


