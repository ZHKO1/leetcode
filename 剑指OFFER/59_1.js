/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  var result = [];
  var index_tmp_array = [];
  for(var i = 0; i < nums.length; i++ ){
    while(index_tmp_array.length && (getNumber(index_tmp_array[index_tmp_array.length - 1]) < nums[i])){
      index_tmp_array.pop();
    }
    if(index_tmp_array[0] < i - k + 1){
      index_tmp_array.shift();
    }
    index_tmp_array.push(i);

    if(i >= k - 1){
      result.push(getNumber(index_tmp_array[0]))
    }
  }
  return result;

  function getNumber(index){
    return nums[index];
  }
};