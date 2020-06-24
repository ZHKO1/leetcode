/*
 * @lc app=leetcode id=114 lang=javascript
 *
 * [114] Flatten Binary Tree to Linked List
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  if(!root){
    return null
  }
  var result = [];
  var stack = [root];
  while(stack.length > 0){
    var node = stack.pop();
    result.push(node);
    node.right && stack.push(node.right)
    node.left && stack.push(node.left)
  }
  for(var i = 0;i < result.length - 1;i++){
    node = result[i];
    nextNode = result[i + 1];
    node.left = null;
    node.right = nextNode;
  }
};
// @lc code=end

