// 99
var recoverTree = function(root) {
  var firstNode = getFirstNode(root);
  var lastNode = getLastNode(root);
  var tmp = firstNode.val;
  firstNode.val = lastNode.val;
  lastNode.val = tmp;
  return;

  function getFirstNode(node){
    var pre;
    var current = node;
    var stack = [];
    while(stack.length > 0 || current){
      while(current){
        stack.push(current)
        current = current.left;
      }
      current = stack.pop();
      if(pre == void 0){
        pre = current;
      }else{
        if(pre.val > current.val){
          return pre
        }
        pre = current;
      }
      current = current.right;
    }
  }

  function getLastNode(node){
    var pre;
    var current = node;
    var stack = [];
    while(stack.length > 0 || current){
      while(current){
        stack.push(current)
        current = current.right;
      }
      current = stack.pop();
      if(pre == void 0){
        pre = current;
      }else{
        if(current.val > pre.val){
          return pre
        }
        pre = current;
      }
      current = current.left;
    }
  }
};

// 114
var flatten = function(root) {
  if(!root){
    return null
  }
  var result = [];
  var stack = [root];
  while(stack.length > 0){
    var node = stack.pop();
    result.push(node);
    node.right && stack.push(node.right)
    node.left && stack.push(node.left)
  }
  for(var i = 0;i < result.length - 1;i++){
    node = result[i];
    nextNode = result[i + 1];
    node.left = null;
    node.right = nextNode;
  }
};

// 222
var countNodes = function(root) {
  if(!root){
    return 0;
  }

  var MaxDepth = getMaxDepth(root);
  var min = 1, max = 1;
  for(var i = 0; i < MaxDepth - 1; i++) {
    max = max * 2 + 1;
  }
  min = (max - 1) / 2 + 1;
  
  while(min < max){
    middle = Math.ceil((min + max) / 2);
    if(isNumberExist(middle)){
      min = middle;
    }else{
      max = middle - 1;
    }
  }
  return min;

  function getMaxDepth(node){
    var depth = 1;
    while(node.left){
      node = node.left;
      depth++;
    }
    return depth;
  }

  function getStepArray(number){
    var stepArray = [];
    if(number == 1){
      return stepArray;
    }
    while(number !== 1){
      if(number%2 == 0){
        number = number / 2;
        stepArray.unshift('l');
      }else{
        number = (number - 1) / 2;
        stepArray.unshift('r');
      }
    }
    return stepArray;
  }

  function isNumberExist(number){
    var stepArray = getStepArray(number);
    return getNumber(root, stepArray)
  }

  function getNumber(node, stepArray){
    if(!node){
      return false;
    }
    if((stepArray.length == 0) && node){
      return true;
    }
    var [step, ...restStepArray] = stepArray;
    if(step == 'l'){
      return getNumber(node.left, restStepArray)
    }else{
      return getNumber(node.right, restStepArray)
    }
  }  
};
