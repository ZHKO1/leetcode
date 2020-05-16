/*
 * @lc app=leetcode id=445 lang=javascript
 *
 * [445] Add Two Numbers II
 *
 * https://leetcode.com/problems/add-two-numbers-ii/description/
 *
 * algorithms
 * Medium (53.51%)
 * Likes:    1267
 * Dislikes: 145
 * Total Accepted:    145.4K
 * Total Submissions: 271.8K
 * Testcase Example:  '[7,2,4,3]\n[5,6,4]'
 *
 * You are given two non-empty linked lists representing two non-negative
 * integers. The most significant digit comes first and each of their nodes
 * contain a single digit. Add the two numbers and return it as a linked list.
 * 
 * You may assume the two numbers do not contain any leading zero, except the
 * number 0 itself.
 * 
 * Follow up:
 * What if you cannot modify the input lists? In other words, reversing the
 * lists is not allowed.
 * 
 * 
 * 
 * Example:
 * 
 * Input: (7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 8 -> 0 -> 7
 * 
 * 
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  var l1Val = "";
  var l2Val = "";
  var pointer = l1;
  while( pointer != null ){
    l1Val += (pointer.val).toString();
    pointer = pointer.next;
  }
  pointer = l2;
  while( pointer != null ){
    l2Val += (pointer.val).toString();
    pointer = pointer.next;
  }
  var l1length = l1Val.length;
  var l2length = l2Val.length;

  var Head = null;
  var temp = 0;
  var l1bit = 0;
  while(( l1length > 0 ) || ( l2length > 0 )){
    if(l1length > 0){
      l1bit = parseInt(l1Val[l1length - 1]);
      l1length--;
    } else {
      l1bit = 0;
    }
    if(l2length > 0){
      l2bit = parseInt(l2Val[l2length - 1]);
      l2length--;
    } else {
      l2bit = 0;
    }
    var sum = l1bit + l2bit + temp;
    var newNode = new ListNode(sum%10);
    temp = (sum>9)?1:0;
    newNode.next = Head;
    Head = newNode;
  }
  if(temp == 1){
    var newNode = new ListNode(1);
    newNode.next = Head;
    Head = newNode;
  }
  return Head;
};
// @lc code=end

