/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function(head) {
  var current = head;
  var result = [];
  while(current){
    result.unshift(current.val);
    current = current.next;
  }
  return result;
};