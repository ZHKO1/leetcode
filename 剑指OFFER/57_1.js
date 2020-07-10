/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let min = 0;
  let max = nums.length - 1;
  while(min < max){
    let min_item = nums[min];
    let max_item = nums[max];
    let sum = min_item + max_item;
    if(sum == target){
      return [min_item, max_item]
    } else if ( sum >= target ){
      max--;
    } else {
      min++;
    }
  }
  return [];
};