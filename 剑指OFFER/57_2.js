/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function(target) {
  let min = 1;
  let max = 2;
  let result = [];
  while(min < max){
    let sum = getSum(min, max);
    if(sum == target){
      result.push(getArray(min, max));
      min++;
    } else if(sum < target){
      max++;
    } else {
      min++;
    }
  }
  return result;

  function getSum(min, max){
    return (min + max)*(max - min + 1)/2
  }

  function getArray(min, max){
    let result = [];
    for(let i = min; i <= max; i++){
      result.push(i);
    }
    return result;
  }
};