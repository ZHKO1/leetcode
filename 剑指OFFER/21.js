/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function(nums) {
  if(nums.length <= 1){
    return nums;
  }
  var head = 0;
  var tail = nums.length - 1;
  while (head < tail) {
    if(isOdd(nums[head]) && !isOdd(nums[tail])){
      var tmp = nums[tail];
      nums[tail] = nums[head];
      nums[head] = tmp;
    } else {
      if(!isOdd(nums[head])){
        head++;
      }
      if(isOdd(nums[tail])){
        tail--;
      }
    }
  }
  return nums;

  function isOdd (number) {
    return number % 2 == 0;
  }
};