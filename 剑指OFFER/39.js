/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  var i = 0;
  var j = 1;
  while(true){
    while(nums[i] == nums[j] && j <= nums.length - 1){
      j++;
    }
    if(j == nums.length){
      break;
    } else {
      nums.splice(j, 1);
      nums.shift();
      i = 0;
      j = 1;
    }
  }
  return nums[0];
};