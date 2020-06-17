/*
 * @lc app=leetcode id=103 lang=javascript
 *
 * [103] Binary Tree Zigzag Level Order Traversal
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
var zigzagLevelOrder = function(root) {
  if(!root){
    return [];
  }
  var result = [];
  var queue = [root];
  var flag = true;
  while(queue.length > 0){
    var length = queue.length;
    var line = []
    for (let i = 0; i < length; i++) {
      var node = queue.shift();
      flag && line.push(node.val);
      !flag && line.unshift(node.val);      
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    flag = !flag;
    result.push(line);
  }
  return result;
}
// @lc code=end

