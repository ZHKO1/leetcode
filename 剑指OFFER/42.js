/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  var left = 0;
  var right = 0;
  var length = nums.length;
  var tmp = nums[0];
  var max = nums[0];
  while((right < length) && (left < length)){
    if(left == right){
      tmp = nums[left];
      max = Math.max(max, tmp);
      if(tmp > 0){        
        right++;
      }else{
        left++;
        right++;
      }
    } else {
      tmp = tmp + nums[right];
      max = Math.max(max, tmp);
      if(tmp > 0){
        right++;
      }else{
        right++;
        left = right;
      }
    }
  }
  return max;
};