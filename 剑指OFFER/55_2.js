/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
  var { balanced } = dfs(root);
  return balanced;

  function dfs(node){
    if(!node){
      return {
        depth: 0,
        balanced: true
      }
    }
    var { depth: leftDepth, balanced: leftBalanced } = dfs(node.left);
    if(!leftBalanced){
      return {
        depth: 0,
        balanced: false
      }
    }
    var { depth: rightDepth, balanced: rightBalanced } = dfs(node.right);
    if(!rightBalanced){
      return {
        depth: 0,
        balanced: false
      }
    }
    if(Math.abs(leftDepth - rightDepth) <= 1){
      return {
        depth: Math.max(leftDepth, rightDepth) + 1,
        balanced: true
      }
    } else {
      return {
        depth: 0,
        balanced: false
      }
    }
  }
};