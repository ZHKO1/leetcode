/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function(root) {
  if(!root){
    return root;
  }
  var {min, max} = dfs(root);
  min.left = max;
  max.right = min;
  return min;

  function dfs(node){
    var middle = node;
    var min = middle;
    var max = middle;
    if(node.left){
      var {min: lmin, max: lmax} = dfs(node.left);
      lmax.right = middle;
      middle.left = lmax;
      min = lmin;
    }
    if(node.right){
      var {min: rmin, max: rmax} = dfs(node.right);
      middle.right = rmin;
      rmin.left = middle;
      max = rmax;
    }
    return {
      min,
      max
    }
  }
};