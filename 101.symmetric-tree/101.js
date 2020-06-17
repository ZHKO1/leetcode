/*
 * @lc app=leetcode id=101 lang=javascript
 *
 * [101] Symmetric Tree
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
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if(!root){
    return true;
  }
  return bfs(root)
};

function bfs(root){
  var queue = [root.left, root.right];
  while(queue.length > 0){
    var length = queue.length;
    for (let i = 0; i < length/2; i++) {
      if(!queue[i] && queue[length - 1 - i]){
        return false;
      }
      if(queue[i] && !queue[length - 1 - i]){
        return false;
      }
      if((queue[i] && queue[i].val) !== (queue[length - 1 - i] && queue[length - 1 - i].val)){
        return false;
      }
    }
    for (let i = 0; i < length; i++) {
      var node = queue.shift();
      node && queue.push(node.left);
      node && queue.push(node.right);
    }
  }
  return true;
}

function dfs(leftNode, rightNode){
  if(!leftNode && !rightNode){
    return true;
  }
  if(!leftNode && rightNode){
    return false;
  }
  if(leftNode && !rightNode){
    return false;
  }
  return (leftNode.val == rightNode.val) && dps(leftNode.left, rightNode.right) && dps(leftNode.right, rightNode.left);
}
// @lc code=end

