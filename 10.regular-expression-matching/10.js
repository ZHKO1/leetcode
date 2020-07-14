/*
 * @lc app=leetcode id=10 lang=javascript
 *
 * [10] Regular Expression Matching
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  var repArray = getRepArray(p);
  if(repArray){
    var s_length = s.length;
    var r_length = repArray.length;
    if(r_length == 0){
      if(s == ""){
        return true;
      } else {
        return false
      }
    }else{
      return dfs(0, 0);
    }
  }else{
    return false;
  }

  // str_start：待检查的开头
  // rep_index: 待匹配的rep
  function dfs(str_start, rep_index){
    if((rep_index == r_length) && (str_start == s_length)){
      return true;
    }

    if(rep_index == r_length){
      return false;
    }

    var rep = repArray[rep_index];
    if(rep.length == 1){
      // rep 为 a-z 或 .
      var rep_val = rep[0];
      if(rep_val == '.'){
        if(dfs(str_start + 1, rep_index + 1)){
          return true;
        }
      } else {
        if(rep_val === s[str_start]){
          if(dfs(str_start + 1, rep_index + 1)){
            return true;
          }
        }
      }
    } else if (rep.length == 2){
      var rep_val = rep[0];
      var str_max = str_start;
      if(str_start == s_length){
        str_max = str_start;
      } else {
        if (rep_val == ".") {
          str_max = s_length;
        } else {
          while((str_max <= s_length - 1) && (s[str_max] == rep_val)) {
            str_max++;
          }
        }
      }
      for(var i = str_start; i <= str_max; i++){
        if(dfs(i, rep_index + 1)){
          return true;
        }
      }
    } else {
    }
    return false;
  }

  function getRepArray(p){
    var result = [];
    var pre = null;
    for(var i = 0; i < p.length; i++){
      var ch = p[i];
      // pre 可能为 a-z * .
      if(ch == '*'){
        if(pre == null || pre == '*') {
          return false;
        } else {
          result.push([pre, ch]);
        }
      } else {
        // ch 可能为 a-z 或者 .
        if(pre == null || pre == '*'){
        }else{
          result.push([pre]);
        }
      }
      pre = ch;
    }
    if((pre !== null) && (pre !== '*')){
      result.push([pre]);
    }
    return result
  }
};
// @lc code=end

