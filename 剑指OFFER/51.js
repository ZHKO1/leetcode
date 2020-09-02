/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function(nums) {
  var tmp = [];
  var result = 0;
  for(var i = 0; i < nums.length; i++){
    var num = nums[i];
    var number = getNumber(num);
    result += number;
    if(tmp.length > 0){
      if(tmp[tmp.length - 1] >= num){
        tmp.push(num)
      }else if(tmp[0] <= num){
        tmp.unshift(num)
      }else{
        pushAndSortArray(num, number)
      }
    }else{
      tmp.push(num);  
    }
  }
  return result;

  function getNumber(num){
    if(tmp.length == 0){
      return 0
    }
    if(tmp[tmp.length - 1] > num){
      // console.log(tmp, num, tmp.length)
      return tmp.length;
    }
    if(tmp[0] <= num){
      // console.log(tmp, num, 0)
      return 0;
    }
    var left = 0;
    var right = tmp.length - 1;
    while(left < right){
      var middle = Math.ceil((left + right) / 2);
      var middle_num = tmp[middle];
      if( middle_num > num){
        left = middle;
      } else {
        right = middle - 1;
      }
    }
    // console.log(tmp, num, right + 1)
    return right + 1;
  }

  function pushAndSortArray(num, index){
    tmp.splice(index, 0, num)
  }
};