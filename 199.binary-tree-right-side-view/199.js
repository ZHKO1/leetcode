/*
 * @lc app=leetcode id=199 lang=javascript
 *
 * [199] Binary Tree Right Side View
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
var rightSideView = function(root) {
  var result = [];
  if(!root){
    return result;
  }
  var queue = [root];
  while(queue.length > 0){
    var length = queue.length;
    for(var i = 0;i < length; i++){
      var node = queue.shift()
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    result.push(node.val)
  }
  return result;
};
// @lc code=end

