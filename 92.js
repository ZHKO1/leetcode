/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    if(m == n) {
        return head;
    }
    var HEAD = head;
    var pre = null;
    var current = head;
    var number = 1;
    var reverseBetweenHeadPre = null;
    var reverseBetweenHeadPreNext = null;
    while(current !== null) {
        if (number < m) {
            pre = current;
            current = current.next;
        } else if (number == m) {
            if (m == 1) {
            } else {
                reverseBetweenHeadPre = pre;
            }
            pre = current;
            current = current.next;
        }else if(number <= n) {
            if(reverseBetweenHeadPre){
                reverseBetweenHeadPreNext = reverseBetweenHeadPre.next;
            } else {
                reverseBetweenHeadPreNext = HEAD;
                HEAD = current;
            }
            pre.next = current.next;
            current.next = reverseBetweenHeadPreNext;
            current = pre;
            current = current.next;        
        } else {
            break;
        }
        number++;
    }
    return HEAD;
};

var p = new ListNode(1, new ListNode(2,new ListNode(3,new ListNode(4,))));
var q = reverseBetween(p, 1, 2);
while(q!=null){
    console.log(q.val);
    q = q.next;
}