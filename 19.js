/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    var i = 1;
    var HEAD = head;
    var current = head;
    var deleNodePre = null;    
    var deleNode = head;
    while( current.next != null ){
        if( i >= n ){
            deleNodePre = deleNode;
            deleNode = deleNode.next;
        } else {
            i++;
        }
        current = current.next;
    };
    if ( deleNodePre ) {
        deleNodePre.next = deleNodePre.next.next;
    } else {
        HEAD = deleNode.next;
    }
    return HEAD;
};