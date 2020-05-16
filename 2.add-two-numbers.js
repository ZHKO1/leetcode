/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
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
    var HEAD = new ListNode();
    var pre = HEAD;
    var temp = 0;
    while((l1 != null) || (l2 != null) || (temp > 0)){
      var l1Val = l1 && l1.val || 0;
      var l2Val = l2 && l2.val || 0;
      var addResult = l1Val + l2Val + temp;
      temp = 0;
      if(addResult > 9){
        temp = 1;
        addResult = addResult - 10
      }
      var newNode = new ListNode(addResult);
      pre.next = newNode;
      pre = newNode;
      l1 && (l1 = l1.next);
      l2 && (l2 = l2.next);
    };
    return HEAD.next;
};
// @lc code=end

