/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  if(nums.length == 0){
    return 0;
  }
  var min = 0;
  var max = nums.length - 1;
  if(nums[max] == max){
    return max + 1;
  }
  while(min < max){
    var middle = Math.floor((min + max) / 2);
    if(nums[middle] == middle){
      min = middle + 1;
    } else {
      max = middle;
    }
  }
  return min;
};