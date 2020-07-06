/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  if(headA == null || headB == null){
    return null;
  }
  var headAStart = headA;
  var headBStart = headB;
  var currentA = headA;
  var currentB = headB;
  while((currentA != null) || (currentB != null)){
    if((currentA != null) && (currentB != null)){
      currentA = currentA.next;
      currentB = currentB.next;
    } else if (currentB == null) {
      headAStart = headAStart.next;
      currentA = currentA.next;
    } else {
      headBStart = headBStart.next;
      currentB = currentB.next;
    }
  }
  var current = null;
  currentA = headAStart;
  currentB = headBStart;
  while(currentA != null){
    if(currentA == currentB){
      current = currentA;
      break;
    }
    currentA = currentA.next;
    currentB = currentB.next;
  }
  return current;
};