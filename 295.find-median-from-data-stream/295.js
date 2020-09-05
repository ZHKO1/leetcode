/*
 * @lc app=leetcode id=295 lang=javascript
 *
 * [295] Find Median from Data Stream
 */

// @lc code=start
/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
  this.array = []
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
  var tmp = this.array;
  var number = getNumber(num);
  if(tmp.length > 0){
    if(tmp[tmp.length - 1] >= num){
      tmp.push(num)
    }else if(tmp[0] <= num){
      tmp.unshift(num)
    }else{
      pushAndSortArray(num, number)
    }
  }else{
    tmp.push(num);  
  }


  function getNumber(num){
    if(tmp.length == 0){
      return 0
    }
    if(tmp[tmp.length - 1] > num){
      // console.log(tmp, num, tmp.length)
      return tmp.length;
    }
    if(tmp[0] <= num){
      // console.log(tmp, num, 0)
      return 0;
    }
    var left = 0;
    var right = tmp.length - 1;
    while(left < right){
      var middle = Math.ceil((left + right) / 2);
      var middle_num = tmp[middle];
      if( middle_num > num){
        left = middle;
      } else {
        right = middle - 1;
      }
    }
    // console.log(tmp, num, right + 1)
    return right + 1;
  }

  function pushAndSortArray(num, index){
    tmp.splice(index, 0, num)
  }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
  var length = this.array.length;
  if(length %2 == 1){
    var middle =  (this.array.length + 1)/2;
    return this.array[middle - 1];
  }else{
    var middle =  Math.floor((this.array.length + 1)/2);
    return (this.array[middle - 1] + this.array[middle])/2;
  }
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
// @lc code=end

