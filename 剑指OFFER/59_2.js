var MaxQueue = function() {
  this.array = [];
  this.tmp = [];
  this.index = 0;
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function() {
  if(this.array.length == 0){
    return -1;
  }
  return this.array[ this.tmp[ 0 ] - this.index ];
};

/** 
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function(value) {
  this.array.push(value);
  while(this.tmp.length && (this.array[ this.tmp[ this.tmp.length - 1 ] - this.index ] < value)){
    this.tmp.pop();
  }
  this.tmp.push(this.array.length - 1 + this.index);  
  console.log(this.tmp);
};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function() {
  if(this.array.length == 0){
    return -1;
  }
  var result = this.array.shift()
  this.index++;
  if(this.tmp[0] < this.index){
    this.tmp.shift();
  }
  return result;
};

/**
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */