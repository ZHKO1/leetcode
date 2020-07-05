/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  if(!root){
    return 0;
  }
  var max = 0;
  dfs(root, 1);
  return max; 

  function dfs(node, depth){
    if(!node.left && !node.right){
      max = Math.max(max, depth);
      return;
    }
    node.left && dfs(node.left, depth + 1);
    node.right && dfs(node.right, depth + 1);
  }
};