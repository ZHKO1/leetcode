/**
 * @param {number} n
 * @return {number[]}
 */
var twoSum = function(n) {
  if(n <= 0){
    return [];
  }
  var first = [1/6, 1/6, 1/6, 1/6, 1/6, 1/6 ];
  if(n == 1){
    return first;
  }
  
  var pre_array = [1/6, 1/6, 1/6, 1/6, 1/6, 1/6 ];
  var current_array = [];

  var i = 2;
  
  while(i <= n){
    var min = i * 1;
    var max = i * 6;
    current_array = [];
    for(var j = min; j <= max; j++){
      var tmp = 0;
      for(var l = 1; l <= 6; l++){
        var rest = j - l;
        if((rest >= (i - 1) * 1) && (rest <= (i - 1) * 6)){
          var index = rest - (i - 1) * 1;
          tmp += pre_array[index] * 1/6;
        }
      }
      current_array.push(tmp);
    }
    pre_array = current_array;
    i++;
  }
  return current_array;
};
//twoSum(3)