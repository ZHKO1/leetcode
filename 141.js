/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

var hasCycle = function(head) {
    if(head == null){
        return false;
    }
    var slowNode = head;
    var fastNode = head;
    while((fastNode.next !== null) && (fastNode.next.next !== null)){
        slowNode = slowNode.next;
        fastNode = fastNode.next.next;
        if(slowNode === fastNode){
            return true;
        }else{
        }
    }    
    return false;
};