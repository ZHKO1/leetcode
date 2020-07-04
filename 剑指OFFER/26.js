/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function(A, B) {
  return dfs(A);

  function dfs(node){
    if(isEqual(node, B)){
      return true;
    } else {
      if(node){
        return dfs(node.left) || dfs(node.right);
      }
      return false;
    }
  }

  function isEqual(A, B){
    if(!B){
      return false;
    }
    if(!A){
      return false;
    }
    if(A.val !== B.val){
      return false
    }
    let left = true;
    if(B.left){
      left = isEqual(A.left, B.left);
    }
    let right = true;
    if(B.right){
      right = isEqual(A.right, B.right);
    }    
    return left && right;
  }
};
