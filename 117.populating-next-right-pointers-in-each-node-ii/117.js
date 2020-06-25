/*
 * @lc app=leetcode id=117 lang=javascript
 *
 * [117] Populating Next Right Pointers in Each Node II
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
  if(!root){
    return root;
  }
  var queue = [root];
  while(queue.length > 0){
    var length = queue.length;
    var pre = queue[0];
    for(var i = 1; i < length; i++){
      var node = queue[i];
      pre.next = node;
      pre = node;
    }
    for(var i = 0; i < length; i++){
      var node = queue.shift();
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
  }
  return root;
};
// @lc code=end

