/*
 * @lc app=leetcode id=148 lang=javascript
 *
 * [148] Sort List
 */

// @lc code=start
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
// 严格来说空间不算常量，还是需要参考下别的解法
// 而且写得太蠢了，需要优雅点
// 正解https://leetcode-cn.com/problems/sort-list/solution/148-pai-xu-lian-biao-bottom-to-up-o1-kong-jian-by-/
var sortList = function(head) {
  return sortList_(head).head;
};

var sortList_ = function(head){
  if(!head || !head.next){
    return {
      head: head,
      tail: head
    };;
  }

  var middle = head;

  var pointer = head.next;

  var small_head = null;
  var small_pointer = null;
  var big_head = null;
  var big_pointer = null;

  while( pointer ) {
    if(pointer.val <= middle.val){
      if(small_head){
        small_pointer.next = pointer;
        small_pointer = pointer;
      }else{
        small_head = small_pointer = pointer;
      }
    } else {
      if(big_head){
        big_pointer.next = pointer;
        big_pointer = pointer;
      }else{
        big_head = big_pointer = pointer;
      }
    }
    pointer = pointer.next;
  }

  small_pointer && (small_pointer.next = null);
  big_pointer && (big_pointer.next = null);

  var {head: head1, tail: tail1} = sortList_(small_head);
  var {head: head2, tail: tail2} = sortList_(big_head);
  
  var Head;
  var Tail;
  if (tail1) {
    Head = head1;
    tail1.next = middle;
    middle.next = null;
    if(head2){
      middle.next = head2
      Tail = tail2;
    }else{
      Tail = middle;
    }
  } else {
    Head = middle;
    middle.next = null;
    if(head2){
      middle.next = head2
      Tail = tail2;
    }else{
      Tail = middle;
    }
  }
  return {
    head: Head,
    tail: Tail
  };
}


// @lc code=end

