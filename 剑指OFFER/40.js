/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
function MaxHeap(max){
  this.maxLength = (max === void 0) ? Infinity : max;
  this.MaxHeapArray = [0];
}
MaxHeap.prototype.add = function(number){
  this.MaxHeapArray.push(number);
  this.swim(this.MaxHeapArray.length - 1);
  var length = this.MaxHeapArray.length - 1;
  if(length > this.maxLength){
    this.deleteMax();
  }
}
MaxHeap.prototype.deleteMax = function(number){
  var bottom = this.MaxHeapArray.pop();
  this.MaxHeapArray[1] = bottom;
  this.sink(1);
}
MaxHeap.prototype.getMax = function(){
  return this.MaxHeapArray[1];
}
MaxHeap.prototype.swim = function(k){
  var up = Math.floor(k/2);
  while( k > 1 && this.less(up, k)){
    this.swap(up, k);
    k = up;
    up = Math.floor(k/2);
  }
}
MaxHeap.prototype.sink = function(k){
  var length = this.MaxHeapArray.length - 1;
  while( 2 * k <= length){
    var j = 2 * k;
    if ( j < length && this.less(j, j + 1)) {
      j++;
    }
    if(this.less(k, j)){
      this.swap(k, j);
      k = j;      
    }else{
      break;
    }
  }
}
MaxHeap.prototype.less = function(i, j){
  var item_i = this.MaxHeapArray[i];
  var item_j = this.MaxHeapArray[j];
  return item_i < item_j;
};
MaxHeap.prototype.swap = function(i, j){
  var tmp = this.MaxHeapArray[i];
  this.MaxHeapArray[i] = this.MaxHeapArray[j];
  this.MaxHeapArray[j] = tmp;
};  
MaxHeap.prototype.getMaxHeapArray = function(){
  var result = [...this.MaxHeapArray];
  result.shift();
  return result.sort((i,j)=>i-j);
};



var getLeastNumbers = function(arr, k) {
  if(k == 0 || arr.length == 0){
    return [];
  }
  var heap = new MaxHeap(k);
  arr.forEach(item => heap.add(item));
  return heap.getMaxHeapArray(); 
};