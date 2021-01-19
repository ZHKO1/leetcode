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
  var result_p = dps(root, p, []);
  var result_q = dps(root, q, []);

  var p_index = 0;
  var q_index = 0;
  while(result_p[p_index] && result_q[q_index] && (result_p[p_index].val == result_q[q_index].val)){
    p_index++;
    q_index++;
  }
  return result_p[p_index - 1];

  function dps(node, find, result){
    if(!node){
      return;
    }
    result.push(node);
    if(node.val == find.val){
      return result;
    }
    var left_array = dps(node.left, find, result);
    if(left_array){
      return left_array
    }
    var right_array = dps(node.right, find, result);
    if(right_array){
      return right_array
    }
    result.pop(node);
    return;
  }
};