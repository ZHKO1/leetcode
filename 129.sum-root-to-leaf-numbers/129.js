/*
 * @lc app=leetcode id=129 lang=javascript
 *
 * [129] Sum Root to Leaf Numbers
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
 * @return {number}
 */
var sumNumbers = function(root) {
  var result = 0;
  if(!root){
    return result;
  }
  var tmp = [root.val];
  dfs(root);
  return result;

  function dfs(node){
    if(!node.left && !node.right){
      result += parseInt(tmp.join(''), 10)
    }
    if(node.left){
      tmp.push(node.left.val); 
      dfs(node.left);
      tmp.pop();
    }
    if(node.right){
      tmp.push(node.right.val); 
      dfs(node.right)
      tmp.pop();
    }
  }
};
// @lc code=end

