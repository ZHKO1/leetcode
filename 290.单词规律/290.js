/*
 * @lc app=leetcode.cn id=290 lang=javascript
 *
 * [290] 单词规律
 */

// @lc code=start
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
  s = s.trim();
  var s_array = s.split(" ");
  if( s_array.length !== pattern.length ) {
    return false;
  }
  var map_A = {};
  var map_B = {};
  for(var i = 0; i < s_array.length; i++){
    var s_item = s_array[i];
    var pattern_itemA = pattern[i];
    if(map_A[pattern_itemA]){
      // 当前pattern已有对应的值，只需要对比即可
      if(map_A[pattern_itemA] !== s_item){
        return false;
      }
    } else {
      // 当前pattern是全新的，所以应该对应全新的值
      // 只需要确认是否全新的单词
      var pattern_itemB = findPatternItem(s_item); 
      if(pattern_itemB){
        return false;
      } else {
        setPatternItem(pattern_itemA, s_item);
      }
    }

  }
  return true;

  function findPatternItem(s_item){
    if(map_B[s_item]){
      return map_B[s_item];
    }
    return false;
  }
  function setPatternItem(patternItem, s_item){
    map_A[patternItem] = s_item;
    map_B[s_item] = patternItem;
  }
};
// @lc code=end

