/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function(head, val) {
  var HEAD = new ListNode(0);
  HEAD.next = head;
  var pre = HEAD;
  var current = head;
  while(current){
    if(current.val === val){
      pre.next = current.next;
      break;
    }
    pre = current;
    current = current.next;
  }
  return HEAD.next;
};