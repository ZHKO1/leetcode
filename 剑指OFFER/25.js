/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  var HEAD1 = new ListNode(0);
  HEAD1.next = l1;
  var pre1 = HEAD1;
  while( l1 && l2 ){
    if(l1.val <= l2.val){
      pre1 = l1;
      l1 = l1.next;
    } else {
      pre1.next = l2;
      var tmp = l2.next;
      l2.next = l1;
      pre1 = l2;
      l2 = tmp;
    }
  }
  if(!l1){
    pre1.next = l2
  }
  return HEAD1.next;
};