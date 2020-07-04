/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  if( !head || (head && !head.next) ){
    return head;
  }
  var current = head;
  var pre = null;
  var next = null;
  while (current) {
    next = current.next;
    current.next = pre;
    pre = current;
    current = next;
  }
  return pre;
};