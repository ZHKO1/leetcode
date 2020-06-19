var isBalanced = function(root) {
  return dfsIsBalanced(root) == -2 ? false: true;

  function dfsIsBalanced(node){
    if(!node){
      return 0;
    }
    if(!node.left && !node.right){
      return 1;
    }
    var left = dfsIsBalanced(node.left);
    if(left == -2)return -2;
    var right = dfsIsBalanced(node.right);
    if(right == -2)return -2;
    if(Math.abs(left - right) <= 1){
      return Math.max(left, right) + 1;
    }else{
      return -2;
    }
  }
}