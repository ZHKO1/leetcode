/*
 * @lc app=leetcode id=1123 lang=javascript
 *
 * [1123] Lowest Common Ancestor of Deepest Leaves
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
 * @return {TreeNode}
 */
var lcaDeepestLeaves = function(root) {
  if(!root){
    return root
  }
  var queue = [{
    node: root,
    stack: [root]
  }]
  var pre;
  while( queue.length > 0){
    pre = [...queue];
    var length = queue.length;
    for(var i = 0; i < length; i++){
      var {node, stack} = queue.shift();
      node.left && queue.push({
        node: node.left,
        stack: [...stack, node.left]
      });
      node.right && queue.push({
        node: node.right,
        stack: [...stack, node.right]
      });
    }
  }
  if(pre.length == 1){
    return pre[0].node;
  }else{
    var left = pre[0].stack;
    var right = pre[pre.length - 1].stack;
    var i = 0;
    while(left[i] === right[i]){
      i++;
    }
    return left[i - 1];
  }
};
// @lc code=end

