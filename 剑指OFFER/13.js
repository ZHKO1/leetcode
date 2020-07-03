/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
// 顺带一提...初看时我理解错意思了...以为机器人能随便走，只需要算符合的格子数量就行
// 结果意思是要能连续走
var movingCount = function(m, n, k) {
  var height = n;
  var width = m;
  var board = new Array(n).fill(1).map(() => new Array(n).fill(false));
  var result = 0;
  dfs(0, 0)
  return result;


  function dfs(i, j){
    var visited = board[j][i];
    if(visited == true){
      return;
    }
    if(!getResult(i,j)){
      return;
    }else{
      board[j][i] = true;
      result++;
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
          dfs(i_, j_);
        }
      }
    }
  }

  function getResult(i, j){
    var a = 0;
    var b = 0;
    do{
      a += i % 10;
      i = Math.floor(i / 10);
    }while( i > 0 );
    do{
      b += j % 10;
      j = Math.floor(j / 10);
    }while( j > 0 );
    return a + b <= k
  }
};