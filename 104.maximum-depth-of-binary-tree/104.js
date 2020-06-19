/*
 * @lc app=leetcode id=104 lang=javascript
 *
 * [104] Maximum Depth of Binary Tree
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
var maxDepth = function(root) {
    return DFS(root);
};
var DFS = function(root){
  if( !root ){
    return 0;
  }
  var maxDepth = 1;
  root.number = 1;
  var array = [root];
  var current = array[array.length - 1];
  while(array.length > 0){
    if( !current.status ){
      if(current.left || current.right){
        current.left && (current.left.number = current.number + 1) && array.push(current.left);
        current.right && (current.right.number = current.number + 1) && array.push(current.right);
      }
      current.status = true;
    } else {
      maxDepth = Math.max(maxDepth, current.number);
      array.pop();
    }
    current = array[array.length - 1];
  }
  return maxDepth;
}

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


// @lc code=end

