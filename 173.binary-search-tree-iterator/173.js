/*
 * @lc app=leetcode id=173 lang=javascript
 *
 * [173] Binary Search Tree Iterator
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
 */
var BSTIterator = function(root) {
  if ( root ) {
    this.stack = [{node: root, visited: false}];
  } else {
    this.stack = [];
  }
};

/**
 * @return the next smallest number
 * @return {number}
 */
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

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    if(this.stack.length > 0){
      return true;
    }else{
      return false;
    }
};

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
// @lc code=end

