/*
 * @lc app=leetcode id=138 lang=javascript
 *
 * [138] Copy List with Random Pointer
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
  let HEAD = head;
  let copyHead = new Node(0);
  let copyCurrent = copyHead;
  let map = new Map();
  let current = HEAD;
  while(current){
    let node = new Node(current.val);
    copyCurrent.next = node;
    map.set(current, node);
    current = current.next;
    copyCurrent = node;
  }
  current = HEAD;
  copyCurrent = copyHead.next;
  while(current){
    let random = current.random;
    random && (copyCurrent.random = map.get(random));
    current = current.next;
    copyCurrent = copyCurrent.next;
  }
  return copyHead.next; 
};
// @lc code=end

