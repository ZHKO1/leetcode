/*
 * @lc app=leetcode.cn id=1370 lang=javascript
 *
 * [1370] 上升下降字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var sortString = function(s) {
  var result = "";
  if(!s){
    return s;
  }
  var array = getMapArray(s);
  while(array.length){
    result += getString();
    result += getReverseString();
  }
  return result;

  function getString(){
    var start = 0;
    var end = array.length - 1;
    var result = "";
    for(var i = start; i <= end; i++){
      var obj = array[i];
      obj.num--;
      result += obj.value
    }
    array = array.filter((a) => {
      return a.num > 0
    })
    return result
  }

  function getReverseString(){
    var start = 0;
    var end = array.length - 1;
    var result = "";
    for(var i = end; i >= start; i--){
      var obj = array[i];
      obj.num--;
      result += obj.value
    }
    array = array.filter((a) => {
      return a.num > 0
    })
    return result
  }
  
  function getMapArray(s){
    var map = {};
    var result = [];
    for(var i = 0; i < s.length; i++){
      var c = s[i];
      if(map[c]){
        map[c]++;
      }else{
        map[c] = 1
      }
    }
    return Object.keys(map).sort(function(a, b){
      return a.charCodeAt() - b.charCodeAt()
    }).map((a)=>{
      return {
        value: a,
        num: map[a]
      }
    });
  }

};
// @lc code=end

