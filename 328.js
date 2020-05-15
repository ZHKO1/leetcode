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
var oddEvenList = function(head) {
    if(head == null || head.next == null){
        return head;
    }
    var number = 1;
    var oddPointer = null;
    var current = head;
    var pre = null;
    while(current != null){
        if(number % 2 == 1 ){
            if(oddPointer){
                if(oddPointer.next == current){
                    pre = current;
                    oddPointer = current;
                    current = current.next;
                }else{
                    var nextTemp = current.next;
                    var tempPointer = oddPointer.next;
                    oddPointer.next = current;
                    current.next = tempPointer;
                    oddPointer = current;
                    pre.next = nextTemp;
                    current = nextTemp;
                }
            } else {
                pre = current;
                oddPointer = current;
                current = current.next;
            }            
        }else{
            pre = current;
            current = current.next;
        }
        number++;
    }
    return head;
};