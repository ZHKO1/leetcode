/*
 * @lc app=leetcode id=111 lang=javascript
 *
 * [111] Minimum Depth of Binary Tree
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
 * @return {number}
 */
var minDepth = function(root) {
  var minLength = 0;
  if(!root){
    return minLength;
  }
  var queue = [root];
  minLength = 1;
  while(queue.length > 0){
    var length = queue.length;
    for(var i = 0; i < length; i++){
      var node = queue.shift();
      if(!node.left && !node.right){
        return minLength;
      }
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    minLength++;
  }
  return minLength;
};
// @lc code=end

