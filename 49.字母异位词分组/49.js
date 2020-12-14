/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  var array = strs.map(item => getSign(item));
  var map = {};
  array.forEach((item, index) => {
    if( map[item] ){
      map[item].push(index);
    } else {
      map[item] = [index];
    }
  });
  var result = [];
  for(var key in map){
    result.push(map[key].map(item => strs[item]))
  }
  return result;

  function getSign(string){
    var result = "";
    var arr = (new Array(26)).fill(0);
    for(var i = 0; i < string.length; i++){
      var str = string[i];
      arr[str.charCodeAt() - 97]++;
    }
    arr.forEach((item, index) => {
      if ( item != 0 ) {
        result += String.fromCharCode(index + 97) + item;
      }
    });
    return result;
  }
};
// @lc code=end

