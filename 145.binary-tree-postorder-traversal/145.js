/*
 * @lc app=leetcode id=145 lang=javascript
 *
 * [145] Binary Tree Postorder Traversal
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
var postorderTraversal = function(root) {
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
      tmp.push({node:node, visible: true});
      node.right && tmp.push({node:node.right, visible: false});
      node.left && tmp.push({node:node.left, visible: false});
    }
  }
  return result;
};
// @lc code=end

