/*
 * @lc app=leetcode id=112 lang=javascript
 *
 * [112] Path Sum
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
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
  if(!root){
    return false;
  }
  return dfs(root, root.val);

  function dfs(node, tmp){
    if(!node.left && !node.right){
      return tmp === sum ? true: false;
    }
    if(node.left && dfs(node.left, tmp + node.left.val)){
      return true;
    };
    if(node.right && dfs(node.right, tmp + node.right.val)){
      return true;
    }
    return false;
  }
};
// @lc code=end

