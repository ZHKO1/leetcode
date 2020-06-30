/*
 * @lc app=leetcode id=968 lang=javascript
 *
 * [968] Binary Tree Cameras
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
// 还是参考了下题解...
var minCameraCover = function(root) {
  var res = 0;
  if(dfs(root) == 0){
    res++;
  }
  return res;

  function dfs(node){
    if(node == null){
      return 1;
    }
    var left = dfs(node.left);
    var right = dfs(node.right);
    if(left == 0 || right == 0){
      res++;
      return 2;
    }
    if(left + right >= 3){
      return 1;
    }
    if(left == 1 || right == 1){
      return 0;
    }
  }
};

// @lc code=end

