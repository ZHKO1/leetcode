/*
 * @lc app=leetcode id=107 lang=javascript
 *
 * [107] Binary Tree Level Order Traversal II
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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
      if(root == null){
    return []
  }
  var queue = [{node: root, step: 1}];
  var result = [];
  var preStep = 0;
  while(queue.length > 0){
    var item = queue.shift();
    var {node, step} = item;
    if(step !== preStep){
      preStep = step;
      result.push([])
    }
    result[result.length - 1].push(node.val)
    node.left && queue.push({node: node.left, step: step + 1});
    node.right && queue.push({node: node.right, step: step + 1});
  }
  return result.reverse();
};
// @lc code=end

