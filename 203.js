/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  var HEAD = null;
  var current = head;
    var pre = null;
  while(current != null){
    if(current.val == val){
      if( pre ){
        pre.next = current.next;
        current = current.next;   
      }else{
        pre = current;
        current = current.next;
      }
    } else {
      (HEAD == null) && (HEAD = current);
      pre = current;
      current = current.next;
    }
  }
  return HEAD;
};

var p = new ListNode(1, new ListNode(2,new ListNode(3,new ListNode(4,))));
var q = removeElements(p, 2);
while(q!=null){
  console.log(q.val);
  q = q.next;
}