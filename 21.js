/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
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
var mergeTwoLists = function(l1, l2) {
    if(l1 == null){
      return l2;
    }
    if(l2 == null){
      return l1;
    }
    var Head = new ListNode();
    var current = Head;
    while( (l1 != null) && (l2 != null) ){
      if(l1.val <= l2.val){
        var newNode = new ListNode(l1.val);
        current.next = newNode;
        current = newNode;
        l1 = l1.next;
      } else {
        var newNode = new ListNode(l2.val);
        current.next = newNode;
        current = newNode;
        l2 = l2.next;
      }
    }
    if(l1 != null){
      current.next = l1;
    }
    if(l2 != null){
      current.next = l2;
    }
    return Head.next;
};
// @lc code=end

