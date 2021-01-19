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
  if(!root){
    return null
  }
  if(p.val > q.val){
    var tmp = p;
    p = q;
    q = tmp;
  }
  var p_val = p.val;
  var q_val = q.val;
  return dps(root);

  function dps(node){
    var node_val = node.val;
    if((p_val == node_val) || (q_val == node_val)){
      return node
    }
    if((p_val < node_val) && (q_val < node_val)){
      return dps(node.left)
    }
    if((p_val > node_val) && (q_val > node_val)){
      return dps(node.right)
    }
    if((p_val < node_val) && (q_val > node_val)){
      return node
    }    
  }
};