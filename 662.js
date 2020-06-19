var widthOfBinaryTree = function(root) {
  var maxWidth = 0;
  if(!root){
    return maxWidth;
  }
  var queue = [{
    node: root,
    id: 1
  }];
  while(queue.length > 0){
    var length = queue.length;
    maxWidth = Math.max(maxWidth, queue[length - 1].id - queue[0].id + 1);
    var minId = queue[0].id;
    queue = queue.map(item => ({
      ...item,
      id: item.id - minId + 1
    }));
    for(var i = 0; i < length; i++){
      var item = queue.shift();
      var {node, id} = item;
      node.left && queue.push({node: node.left, id: id * 2 - 1});
      node.right && queue.push({node: node.right, id: id * 2 });  
    }
  }
  return maxWidth;
};