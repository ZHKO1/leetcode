/*
 * @lc app=leetcode id=617 lang=javascript
 *
 * [617] Merge Two Binary Trees
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
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
  var root = dfs(t1, t2);
  return root;

  function dfs(node1, node2){
    if(!node1 && !node2){
      return null;
    }
    if(!node1){
      var left = dfs(null, node2.left);
      var right = dfs(null, node2.right);
      var node = new TreeNode(node2.val, left, right);
      return node;
    }
    if(!node2){
      var left = dfs(node1.left, null);
      var right = dfs(node1.right, null);
      var node = new TreeNode(node1.val, left, right);
      return node;
    }
    var left = dfs(node1.left, node2.left);
    var right = dfs(node1.right, node2.right);
    var node = new TreeNode(node1.val + node2.val, left, right);
    return node;
  }
};
// @lc code=end

