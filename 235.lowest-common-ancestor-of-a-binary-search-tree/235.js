/*
 * @lc app=leetcode id=235 lang=javascript
 *
 * [235] Lowest Common Ancestor of a Binary Search Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  return dfs(root, p, q);

  function dfs(node, p, q){
    if(node.val == p.val){
      return node;
    }
    if(node.val == q.val){
      return node;
    }
    if((p.val < node.val && node.val < q.val) || (q.val < node.val && node.val < p.val)){
      return node;
    }
    if( p.val < node.val && q.val < node.val ){
      return dfs(node.left, p, q)
    }
    if( p.val > node.val && q.val > node.val ){
      return dfs(node.right, p, q)
    }
  }
};
// @lc code=end

