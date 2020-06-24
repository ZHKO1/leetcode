/*
 * @lc app=leetcode id=222 lang=javascript
 *
 * [222] Count Complete Tree Nodes
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
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
// @lc code=end

