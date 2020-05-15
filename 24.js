/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if((head == null) || (head.next == null)){
        return head;
    }
    var pointer1 = head;
    var pointer2 = head.next;
    var HEAD = pointer2;
    var prepointer1 = null;
    while((pointer1 != null) && (pointer2 != null)){
        var pointer1Temp = pointer2.next;
        var pointer2Temp = pointer2.next && pointer2.next.next || null;
        prepointer1 && (prepointer1.next = pointer2);
        pointer2.next = pointer1;
        pointer1.next = pointer1Temp;
        var prepointer1 = pointer1;
        pointer1 = pointer1Temp;
        pointer2 = pointer2Temp;
    }
    return HEAD;
};

var p = new ListNode(1, new ListNode(2,new ListNode(3,new ListNode(4,))));
var q = reverseList(p);
while(q!=null){
    console.log(q.val);
    q = q.next;
}
