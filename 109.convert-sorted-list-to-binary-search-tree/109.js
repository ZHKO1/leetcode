/*
 * @lc app=leetcode id=109 lang=javascript
 *
 * [109] Convert Sorted List to Binary Search Tree
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
  return dfs(head);
    
  function dfs(node){
    if(node == null){
      return null;
    }
    var {left, middle, right} = getLeftMiddleRight(node);
    var left_node = dfs(left);
    var right_node = dfs(right);
    return new TreeNode(middle.val, left_node, right_node);
  }

  function getLeftMiddleRight(head){
    if(head.next == null){
      return {
        left: null,
        middle: head,
        right: null
      }
    }
    var pre = null;
    var middle = head;
    var end = head;
    var right = middle.next;
    while((end !== null) && (end.next !==  null)){
      pre = middle;
      middle = middle.next;
      right = middle.next;
      end = end.next.next;
    }
    pre.next = null;
    return {
      left: head,
      middle: middle,
      right: right,
    }
  }
};
// @lc code=end

