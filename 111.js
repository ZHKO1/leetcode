var minDepth = function(root) {
  var minLength = 0;
  if(!root){
    return minLength;
  }
  var queue = [root];
  minLength = 1;
  while(queue.length > 0){
    var length = queue.length;
    for(var i = 0; i < length; i++){
      var node = queue.shift();
      if(!node.left && !node.right){
        return minLength;
      }
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    minLength++;
  }
  return minLength;
};