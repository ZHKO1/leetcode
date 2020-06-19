var maxDepth = function(root) {
  var maxDepth = 0;
  if(!root){
    return maxDepth;
  }
  var queue = [root];
  while(queue.length > 0){
    maxDepth++;
    var length = queue.length;
    for(var i = 0; i < length; i++){
      var node = queue.shift();
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
  }
  return maxDepth;
};