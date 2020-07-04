/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var mirrorTree = function(root) {
  return dfs(root);
};

function dfs(node){
  if(node == null){
    return null;
  }
  var newNode = new TreeNode(node.val);
  newNode.left = dfs(node.right);
  newNode.right = dfs(node.left);
  return newNode;
}