/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if(s === ''){
    return 0;
  }
  var Max = 0;
  var map = {};
  var left = 0;
  var right = 0;
  while(right <= s.length - 1){
    var c = s[right];
    if(!map[c]){
      map[c] = 1;
      Max = Math.max(Max, right - left + 1);
      right++;
    } else {
      while(s[left] !== c && (left < right)){
        var left_c = s[left];
        map[left_c]--;
        left++;
      }
      left++;
      right++;
    }
  }
  return Max;
};
// @lc code=end

