/*
 * @lc app=leetcode id=155 lang=javascript
 *
 * [155] Min Stack
 */

// @lc code=start
// 悲伤的故事：这题是EASY，然而我往堆那边去想了，死活就是想不出方案
// 然而确实是EASY难度，感觉变得越来越蠢了 
/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.Head = null;
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  if(this.Head){
    var node = new Node(x, Math.min(x, this.Head.min), this.Head);
    this.Head = node;
  }else{
    this.Head = new Node(x, x);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.Head = this.Head && this.Head.next;
}
/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.Head && this.Head.val;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.Head && this.Head.min;
};

function Node(val, min, next){
  this.val = val;
  this.min = min;
  this.next = next;
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */
// @lc code=end

