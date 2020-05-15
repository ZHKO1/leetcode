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
var reverseList = function(head) {
    var next = head;
    var PreNode = null;
    if((next === null) || (next.next === null)){
        return next;
    }
    while(next !== null){
        var NextNode = next.next;
        next.next = PreNode;
        PreNode = next;
        next = NextNode;
    }    
    return PreNode;
};

var p = new ListNode(1, new ListNode(2));
reverseList(p);
reverseList(null);
