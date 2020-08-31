/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function(nums) {
  var zeroNumber = 0;
  nums = nums.sort((a,b)=>(a - b));
  var noZeroNums = nums.filter(num => (num !== 0));
  zeroNumber = nums.length - noZeroNums.length;
  
  var pre = null;
  for(var i = 0; i <= noZeroNums.length - 1; i++){
    var current = noZeroNums[i];
    if(pre){
      if(current - pre == 1){
      }else{
        if(current - pre == 2){
          zeroNumber --;
        } else if(current - pre == 3){
          zeroNumber = zeroNumber - 2;
        } else{
          return false;
        }
        if(zeroNumber < 0){
          return false;
        }
      }
    }
    pre = current;
  }
  return true;
};
//isStraight([1,3,9,0,0])