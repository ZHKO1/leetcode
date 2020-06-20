/*
 * @lc app=leetcode id=236 lang=javascript
 *
 * [236] Lowest Common Ancestor of a Binary Tree
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
  var array = [];
  dfs(root);
  var map = {};
  array.forEach((item, i) => {
    map[item] = i;
  });
  return dfs_other(root, p, q);
  

  function dfs(node){
    if(!node){
      return;
    }
    dfs(node.left);
    array.push(node.val);
    dfs(node.right);
  }

  function dfs_other(node, p, q){
    var node_val = getVal(node.val);
    var p_val = getVal(p.val);
    var q_val = getVal(q.val);
    if(node_val == p_val){
      return node;
    }
    if(node_val == q_val){
      return node;
    }
    if((p_val < node_val && node_val < q_val) || (q_val < node_val && node_val < p_val)){
      return node;
    }
    if( p_val < node_val && q_val < node_val ){
      return dfs_other(node.left, p, q)
    }
    if( p_val > node_val && q_val > node_val ){
      return dfs_other(node.right, p, q)
    }
  }

  function getVal(key){
    return map[key]
  }
};
// @lc code=end

