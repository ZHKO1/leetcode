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
var deleteDuplicates = function ( head )  {
    var pre = null;
    var current = head;
    while (current != null){
        if (pre && (current.val == pre.val)) {
            pre.next = current.next;
            current = current.next;
        } else {
            pre = current;
            current = current.next;
        }
    }    
    return head;
};