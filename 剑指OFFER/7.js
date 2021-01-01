/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  if(preorder.length === 0){
    return null;
  }
  var middle_val = preorder[0];
  var inorder_middle_index = inorder.indexOf(middle_val);
  
  var inorder_left = inorder.slice(0, inorder_middle_index);
  var inorder_right = inorder.slice(inorder_middle_index + 1);

  var preorder_left = preorder.slice(1, inorder_left.length + 1);
  var preorder_right = preorder.slice(inorder_left.length + 1);

  var root = new TreeNode(preorder[0]);
  root.left = buildTree(preorder_left, inorder_left);
  root.right = buildTree(preorder_right, inorder_right);

  return root;
};