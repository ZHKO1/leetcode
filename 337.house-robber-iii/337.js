/*
 * @lc app=leetcode id=337 lang=javascript
 *
 * [337] House Robber III
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
var rob = function(root) {
  var max1 = dfs(root, true);
  var max2 = dfs(root, false);  
  return Math.max(max1, max2);

  function dfs(node, flag){
    //flag true 意味这这节点要被偷了
    //flag false 意味这这节点直接跳过
    if (!node) {
      return 0
    } else {
      var val = node.val;
      if( flag ){
        var left = dfs(node.left, false);
        var right = dfs(node.right, false);
        return val + left + right;
      } else {
        var left1 = dfs(node.left, false);
        var left2 = dfs(node.left, true);
        var right1 = dfs(node.right, false);
        var right2 = dfs(node.right, true);
        return Math.max(left1, left2) + Math.max(right1, right2)
      }
    }
  }
};
// @lc code=end

