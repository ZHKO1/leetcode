/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function(numbers) {
  var min = 0;
  var max = numbers.length - 1;
  var first = numbers[min];
  var last = numbers[max];
  if (first < last) {
    return first;
  } else {
    while(min < max){
      first = numbers[min];
      last = numbers[max];
      if(first == last){
        max--;
        continue;
      }
      var middle = Math.floor((min + max)/2);
      var item = numbers[middle];
      if(item <= last){
        max = middle;
      }else if(item >= first){
        min = middle + 1;
      }
    };
    return numbers[min];
  }
};