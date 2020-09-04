/**
 * @param {number[]} nums
 * @return {string}
 */
var minNumber = function(nums) {
  sortArray(nums, function(a, b){
    var a = a + "";
    var b = b + "";

    a = a + b;
    b = b + a;

    var i = 0;
    var length = a.length + b.length;

    while(i <= length - 1){
      var a_int = parseInt(a[i]);
      var b_int = parseInt(b[i]);
  
      if(a_int !== b_int){
        return a_int - b_int;
      } else {
        i++;
      }
    }
    return 0;
  });
  return nums.map(item => item + "").join("");

  // 获取最左位
  function getLeftFromNum( n ) {
    while ( n > 9 ) {
      n = Math.floor( n / 10 );
    }
    return n;
  }
  // 计算总共有多少位
  function getBitFromNum( n ){
    if(n === 0){
      return 1;
    }
    var result = 0;
    while( n ){
      n = Math.floor( n / 10 );
      result ++;
    }
    return result;
  }
};

// 数组原地快速排序
var sortArray = function(array, callback){
  sort(0, array.length - 1);
  function sort(left, right){
    if(left < right) {
      var middle = sortHalf(left, right);
      sort(left, middle - 1);
      sort(middle + 1, right);
    }
  }

  function sortHalf(left, right){
    var target = array[left]; // 居中点
    while(left < right){
      while((left < right) && (callback(target, array[right]) <= 0)){
        right--;
      }
      if(left < right){
        array[left] = array[right];
        left++;        
      }
      while((left < right) && (callback(array[left], target) <= 0)){
        left++;
      }
      if(left < right){
        array[right] = array[left];
        right--;
      }
    }
    array[left] = target;
    return left;
  }
}