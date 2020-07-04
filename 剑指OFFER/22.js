/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function(head, k) {
  var h_node = head;
  var t_node = head;
  while (k) {
    t_node = t_node.next;
    k--;
  }
  while(t_node){
    h_node = h_node.next;
    t_node = t_node.next;
  }
  return h_node;
};