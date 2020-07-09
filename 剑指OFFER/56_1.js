/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumbers = function(nums) {
  var ret = 0;
  nums.forEach(item => ret = ret ^ item);
  var bit = 1;
  while((ret & bit) == 0){
    bit = bit << 1;
  }
  var a = 0;
  var b = 0;
  
  nums.forEach(item => {
    if(bit & item){
      a ^= item;
    }else{
      b ^= item;
    }
  });
  return [a, b];
};