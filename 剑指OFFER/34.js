/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
  if(!root){
    return [];
  }
  var result = [];
  var array = [];
  dfs(root, root.val);
  return result;

  function dfs(node, tmp){
    if (!node) {        
      return;
    }

    var val = node.val;
    array.push(val);
    node.left && dfs(node.left, tmp + node.left.val);
    node.right && dfs(node.right, tmp + node.right.val);
    if (!node.left && !node.right ) {
      if (tmp == sum) {
        result.push([...array]);
      }
    }
    array.pop();
  }
};