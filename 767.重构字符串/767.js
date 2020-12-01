/*
 * @lc app=leetcode.cn id=767 lang=javascript
 *
 * [767] 重构字符串
 */

// @lc code=start
/**
 * @param {string} S
 * @return {string}
 */
var reorganizeString = function(S) {
  if(!S){
    return "";
  }
  var map = {};
  for(var i = 0; i < S.length; i++){
    var s = S[i];
    if(map[s]){
      map[s]++;
    } else {
      map[s] = 1;
    }
  }
  var maxHeap = new MaxHeap(function(a, b){
    return a.num < b.num
  })
  for(var key in map){
    maxHeap.add({
      key: key,
      num: map[key]
    })
  }
  var max = maxHeap.getMax()
  if(max.num > Math.ceil(S.length / 2)){
    return "";
  }
  var result = "";
  var pre = null;
  while(!maxHeap.isNull()){
    var tmp = null
    max = maxHeap.getMax();
    if(max.key == pre){
      var tmp = max;
      maxHeap.deleteMax()
      max = maxHeap.getMax();
    }
    result += max.key; 
    maxHeap.deleteMax()
    max.num--;
    tmp && maxHeap.add(tmp);
    max.num && maxHeap.add(max);
    pre = max.key;
  }
  return result;
};

function MaxHeap(lessCallback){
  this.lessCallback = lessCallback;
  this.MaxHeapArray = [0]
}
MaxHeap.prototype.isNull = function(){
  return this.MaxHeapArray.length == 1;
}
MaxHeap.prototype.add = function(obj){
  this.MaxHeapArray.push(obj);
  this.swim(this.MaxHeapArray.length - 1);
}
MaxHeap.prototype.swim = function(k){
  var h = Math.floor(k/2);
  while(k > 1){
    if(this.less(h, k)){
      this.swap(h, k);
      k = h;
      h =  Math.floor(k/2);
    } else {
      break;
    }
  }
}
MaxHeap.prototype.sink = function(k){
  var next = 2 * k;
  var length = this.MaxHeapArray.length - 1;
  while(next <= length){
    if((next + 1 <= length) && this.less(next, next + 1)){
      next = next + 1;
    }
    if(this.less(k, next)){
      this.swap(k, next);
      k = next;
      next = 2 * k
    }else{
      break;
    }
  }
}
MaxHeap.prototype.getMax = function(){
  return this.MaxHeapArray[1];
}
MaxHeap.prototype.deleteMax = function(){
  if(this.MaxHeapArray.length > 2){
    var bottom = this.MaxHeapArray.pop();
    this.MaxHeapArray[1] = bottom;
    this.sink(1);
  }else{
    this.MaxHeapArray.pop();
  }
}
MaxHeap.prototype.less = function(i, j){
  var item_i = this.MaxHeapArray[i];
  var item_j = this.MaxHeapArray[j];
  return this.lessCallback(item_i, item_j);
}
MaxHeap.prototype.swap = function(i, j){
  var tmp = this.MaxHeapArray[i];
  this.MaxHeapArray[i] = this.MaxHeapArray[j];
  this.MaxHeapArray[j] = tmp;
};  
// @lc code=end

