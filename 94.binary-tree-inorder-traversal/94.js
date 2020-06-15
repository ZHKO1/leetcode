/*
 * @lc app=leetcode id=94 lang=javascript
 *
 * [94] Binary Tree Inorder Traversal
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
var inorderTraversal = function(root) {
  // dfs iteratively
  var result = [];
  if(root == null){
    return result;
  }
  var tmp = [{node:root, visible: false}];
  var node,visible;
  while(tmp.length > 0){
    current = tmp.pop();
    node = current.node;
    visible = current.visible;
    if( visible ){
      result.push(node.val)
    } else {
      node.right && tmp.push({node:node.right, visible: false});
      tmp.push({node:node, visible: true});
      node.left && tmp.push({node:node.left, visible: false});
    }
  }
  return result;
  
  // dfs recursive
  var result = [];
  dfs(root);
  return result;

  function dfs(node){
    if(node == null){return}
    dfs(node.left);
    result.push(node.val);
    dfs(node.right);
  }
};
// @lc code=end

