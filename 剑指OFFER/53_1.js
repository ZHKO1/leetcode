/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  var max = findMaxIndex();
  if(max == -1){
    return 0;
  }
  var min = findMinIndex();
  return max - min + 1;

  function findMaxIndex(){
    var min = 0;
    var max = nums.length - 1;
    while(min < max){
      var middle = Math.ceil((min + max) / 2);
      if(nums[middle] > target){
        max = middle - 1;
      } else if (nums[middle] < target) {
        min = middle + 1;
      } else {
        min = middle;
      }
    }
    if( nums[min] == target ){
      return min;
    } else {
      return -1;
    }
  }

  function findMinIndex(){
    var min = 0;
    var max = nums.length - 1;
    while(min < max){
      var middle = Math.floor((min + max) / 2);
      if(nums[middle] > target){
        max = middle - 1;
      } else if (nums[middle] < target) {
        min = middle + 1;
      } else {
        max = middle;
      }
    }
    if( nums[min] == target ){
      return min;
    } else {
      return -1;
    }
  }
};