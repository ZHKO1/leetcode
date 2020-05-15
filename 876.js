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
var middleNode = function(head) {
    var i = 1;
    var middle = head;
    var end = head;
    while(end != null){
        if(i%2 == 0){
            middle = middle.next;
        }
        end = end.next;
        i++;
    }
    return middle;
};