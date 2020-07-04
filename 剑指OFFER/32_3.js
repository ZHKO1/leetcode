/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var levelOrder = function(root) {
  if(!root){
    return [];
  }
  var result = [];
  var stack = [root];
  var flag = false;
  while(stack.length > 0){
    var length = stack.length;
    var result_item = [];
    for(var i = 0; i < length; i++){
      var node = stack.shift();
      result_item.push(node.val);
      node.left && stack.push(node.left);
      node.right && stack.push(node.right);
    }
    flag && result_item.reverse();
    flag = !flag;
    result.push(result_item);
  }
  return result;
};