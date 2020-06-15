/*
 * @lc app=leetcode id=144 lang=javascript
 *
 * [144] Binary Tree Preorder Traversal
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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  // dfs iteratively
  var result = [];
  if(root == null){
    return result;
  }
  var tmp = [root];
  var node;
  while(tmp.length > 0){
    node = tmp.pop();
    result.push(node.val);
    node.right && tmp.push(node.right);
    node.left && tmp.push(node.left);    
  }
  return result;


  
  return;

  // dfs recursive
  var result = [];
  dfs(root);
  return result;

  function dfs(node){
    if(node == null){return}
    result.push(node.val);
    dfs(node.left);
    dfs(node.right);
  }
};

// @lc code=end

