/*
 * @lc app=leetcode id=54 lang=javascript
 *
 * [54] Spiral Matrix
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  let result = [];
  let height = matrix.length;
  if(!height){
    return result;
  }
  let width = matrix[0].length;
  if(!width){
    return result;
  }
  // 上 右 下 左
  return print([0,0], [width - 1, height - 1]);

  function print(lefttop, rightbottom){
    let left = lefttop[0];
    let top = lefttop[1];
    let right = rightbottom[0];
    let bottom = rightbottom[1];
    if(left > right || top > bottom){
      return []
    }
    let topArray = getTopArray(top, left, right);
    let rightArray = [];
    let bottomArray = [];
    let leftArray = [];
    if(top < bottom){
      //上下两条线
      rightArray = getRightArray(right, top + 1, bottom);
      if(left < right){
        bottomArray = getBottomArray(bottom, right - 1, left);
        if(top + 1 < bottom){
          leftArray = getLeftArray(left, bottom - 1, top + 1)
        }
      }
    }
    let result = [...topArray, ...rightArray, ...bottomArray, ...leftArray];
    let nextresult = print([left + 1, top + 1], [right - 1, bottom - 1]);
    return [...result, ...nextresult]
  }

  function getTopArray(top, left, right){
    let result = [];
    for(let i = left; i <= right; i++){
      result.push(matrix[top][i]);
    }
    return result;
  }

  function getRightArray(right, top, bottom){
    let result = [];
    for(let i = top; i <= bottom; i++){
      result.push(matrix[i][right]);
    }
    return result;
  }

  function getBottomArray(bottom, right, left){
    let result = [];
    for(let i = right; i >= left; i--){
      result.push(matrix[bottom][i]);
    }
    return result;
  }

  function getLeftArray(left, bottom, top){
    let result = [];
    for(let i = bottom; i >= top; i--){
      result.push(matrix[i][left]);
    }
    return result;
  }
};
// @lc code=end

