/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function(root, k) {
  var result = [];
  dfs(root);
  return result[result.length - k];

  function dfs(node){
    if(!node){
      return;
    }
    node.left && dfs(node.left);
    result.push(node.val);
    node.right && dfs(node.right);
  }
};