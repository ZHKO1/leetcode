/*
 * @lc app=leetcode id=331 lang=javascript
 *
 * [331] Verify Preorder Serialization of a Binary Tree
 */

// @lc code=start
/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function(preorder) {
  var array = preorder.split(',');
  if( array.length % 2 == 0 ){
    return false;
  }
  var { restArray, isValidSerialization } = dfs(array);
  if( restArray.length !== 0 ){
    return false;
  }
  return isValidSerialization;

  function dfs(array){
    if(array.length == 0){
      return {
        restArray: [],
        isValidSerialization: false
      };
    }
    var [node, ...leftright] = array;
    if(node == "#"){
      return {
        restArray: leftright,
        isValidSerialization: true
      };
    }
    var {restArray: rightArray, isValidSerialization: left} = dfs(leftright);
    var {restArray: restArray, isValidSerialization: right} = dfs(rightArray);
    
    return {
      restArray: restArray, //从头编译到一半或者结尾 剩余未能编译的
      isValidSerialization: left && right // 已编译部分是否是二叉树
    }
  }
};
// @lc code=end

