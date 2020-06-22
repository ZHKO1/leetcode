/*
 * @lc app=leetcode id=230 lang=javascript
 *
 * [230] Kth Smallest Element in a BST
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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
  var iterator = new BSTIterator(root);
  var result = null;
  for(var i = 0; i< k; i++){
    result = iterator.next()
  }
  return result;
};

var BSTIterator = function(root) {
  if ( root ) {
    this.stack = [{node: root, visited: false}];
  } else {
    this.stack = [];
  }
};

BSTIterator.prototype.next = function() {
  var result = null;
  while(this.stack.length > 0) {
    var {node, visited} = this.stack.pop();
    if(visited){
      result = node.val;
      break;
    }else{
      node.right && this.stack.push({node: node.right, visited: false});
      this.stack.push({node: node, visited: true});
      node.left && this.stack.push({node: node.left, visited: false});
    }
  }
  return result;
};

BSTIterator.prototype.hasNext = function() {
    if(this.stack.length > 0){
      return true;
    }else{
      return false;
    }
};

// @lc code=end

