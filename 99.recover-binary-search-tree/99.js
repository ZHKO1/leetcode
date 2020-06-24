/*
 * @lc app=leetcode id=99 lang=javascript
 *
 * [99] Recover Binary Search Tree
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
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
// @lc code=end

