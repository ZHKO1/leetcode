/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var lastRemaining = function(n, m) {
  var array = [];
  for(var i = 0; i < n; i++){
    array.push(i);
  }

  var index = 0;
  while(array.length > 1){
    index = (index + m - 1) % array.length;
    array.splice(index, 1);
  }

  return array[0];
};

// 暴力法其实能过，就是需要注意初始化方式的区别
// 看来初始化还是直接创建个空数组，再push比较快
// 我原本是new Array(n);再逐一赋值就直接超时了...

//当然还有数学法，以数学法为准