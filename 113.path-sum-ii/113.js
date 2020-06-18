/*
 * @lc app=leetcode id=113 lang=javascript
 *
 * [113] Path Sum II
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
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
  var result = [];
  if(!root){
    return result;
  }
  dfs(root, [root.val]);
  return result;

  function dfs(node, array){
    if(!node.left && !node.right){
      if(array.reduce((a, b) => a + b) == sum){
        return result.push([...array])
      }
    }
    node.left && dfs(node.left, [...array, node.left.val])
    node.right && dfs(node.right, [...array, node.right.val])
  }
};
// @lc code=end

