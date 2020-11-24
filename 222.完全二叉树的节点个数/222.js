/*
 * @lc app=leetcode.cn id=222 lang=javascript
 *
 * [222] 完全二叉树的节点个数
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function(root) {
  if(root == null){
    return 0;
  }
  var MaxDepth = getMaxDepth(root, 0);
  return getCountNodes(root, 1, 1);


  function getMaxDepth(node, depth){
    if(node == null){
      return depth
    } else {
      return getMaxDepth(node.left, depth + 1);
    }
  }

  function getCountNodes(node, depth, index){
    var {isExist:isExist_R, index: index_R } = isExistRightestNode(node, depth, index);
    
    if(isExist_R){
      return  index_R
    }
    // node不是满的
    while(depth < MaxDepth){
      var {isExist:isExist_Lr, index: index_Lr } = isExistRightestNode(node.left, depth + 1, index * 2);
      var {isExist:isExist_Rl, index: index_Rl } = isExistLeftestNode(node.right, depth + 1, index * 2 + 1);      
      if(isExist_Lr){
        // node的左子树是满的，右子树是不满的
        if(isExist_Rl){
          node = node.right;
          depth++;
          index = index * 2 + 1;
        } else {
          return index_Lr;
        }
      }else{
        // node的左子树是不满的
        node = node.left;
        depth++;
        index = index * 2;
      }
    }
  }

  function isExistRightestNode(node, depth, index){
    if(depth == MaxDepth){
      if(node){
        return {
          isExist: true,
          index: index
        };
      } else {
        return {
          isExist: false,
        };
      }
    } else {
      return isExistRightestNode(node.right, depth + 1, index * 2 + 1);
    }
  }
  function isExistLeftestNode(node, depth, index){
    if(depth == MaxDepth){
      if(node){
        return {
          isExist: true,
          index: index
        };
      } else {
        return {
          isExist: false,
        }
      }
    } else {
      return isExistLeftestNode(node.left, depth + 1, index * 2);
    }
  }
};
// @lc code=end

// 2020_6_24
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