/*
 * @lc app=leetcode id=257 lang=javascript
 *
 * [257] Binary Tree Paths
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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  if(!root){
    return []
  }
  var result = [];
  dfs(root, []);
  return result;

  function dfs(node, array){
    if(!node.left && !node.right){
      result.push([...array, node.val].join('->'));
    }else{
      node.left && dfs(node.left, [...array, node.val]);
      node.right && dfs(node.right, [...array, node.val]);
    }
  }  
};


// @lc code=end

