/*
 * @lc app=leetcode id=98 lang=javascript
 *
 * [98] Validate Binary Search Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  if(!root){
    return true;
  }
  var {result} =  dfs(root);
  return result;
};
function dfs(node){
  var val = node.val;
  var max,min,result = true;
  if(!node.left && !node.right){
    return {
      max: val,
      min: val,
      result: true
    };
  }
  if(node.left){
    var {max: lmax, min: lmin, result: lresult} = dfs(node.left);
    if( !lresult || lmax >= val ){
      result &= false;
    } else {
      result &= true;
      min = lmin;
    }
  }else{
    min = val;
  }
  if(node.right){
    var {max: rmax, min: rmin, result: rresult} = dfs(node.right);
    if( !rresult || rmin <= val ){
      result &= false;
    } else {
      result &= true;
      max = rmax;
    }
  }else{
    max = val;
  }
  return {
    result,
    max,
    min
  }
}
// @lc code=end

