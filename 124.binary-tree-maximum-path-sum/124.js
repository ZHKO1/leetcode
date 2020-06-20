/*
 * @lc app=leetcode id=124 lang=javascript
 *
 * [124] Binary Tree Maximum Path Sum
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
var maxPathSum = function(root) {
  var MAX = -Infinity;
  dfsMaxPathSum(root);
  return MAX;

  function dfsMaxPathSum(node){
    if(!node){
      return 0;
    }
    if(!node.left && !node.right ){
      MAX = Math.max(MAX, node.val)
      return node.val;
    }
    var left = dfsMaxPathSum(node.left);
    var right = dfsMaxPathSum(node.right);
    var middle = node.val;
    var max = Math.max(middle, middle + left, middle + right);
    MAX = Math.max(MAX, max, middle + left + right)
    return max;
  }
};



// @lc code=end

