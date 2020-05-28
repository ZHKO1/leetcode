/*
 * @lc app=leetcode id=321 lang=javascript
 *
 * [321] Create Maximum Number
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[]}
 */
var maxNumber = function(nums1, nums2, k) {
  var a = [];
  var b = [];
  var max = [];
  for (var i = 0; i <= k; i++) {
      if(i>nums1.length || (k-i>nums2.length)){
          continue;
      }     
      a = getMaxList(nums1, i);
      b = getMaxList(nums2, k - i);
      console.log(a,b);
      var result = mergeList(a, b);
      console.log("--",result);
      
      max = getMax(max,result );
  }
  return max;
};

var getMax = function(a, b,i=0,j=0) {
  for (; i < a.length && j < b.length; i++,j++) {
      var a1 = a[i];
      var b1 = b[j];
      if (a1 > b1) {
          return a;
      } else if (a1 < b1) {
          return b;
      } else {
      }
  }
  if(j == b.length){
      return a
  } else {
      return b
  }
}

var mergeList = function(a, b) {
  var i = 0;
  var j = 0;
  var k = a.length + b.length;
  var result = [];
  for (i = 0, j = 0, r = 0; r < k; ++r){
      if(getMax(a, b, i, j)===a){
          result.push(a[i]);
          i++
      }else{
          result.push(b[j]);
          j++
      }
  }
  return result;
}

var getMaxList = function(nums, k) {
  var tmp = [];
  if(k == 0){
      return tmp;    
  }
  if(k == nums.length){
      return nums;
  }
  for (var i = 0; i < nums.length; i++) {
      if(k > tmp.length){
          tmp.push(nums[i]);
      } else {
          for(var j = 0;j < tmp.length - 1; j++){
              if(tmp[j] < tmp[j + 1]){
                  tmp.splice(j, 1);
                  tmp.push(nums[i]);
                  break;
              }
          }
          if(tmp[tmp.length - 1] < nums[i]){
              tmp.pop();
              tmp.push(nums[i]);            
          }
      }
  }
  return tmp;
};
// @lc code=end

