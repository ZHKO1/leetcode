/*
 * @lc app=leetcode id=763 lang=javascript
 *
 * [763] Partition Labels
 */

// @lc code=start
/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function(S) {
  var result = [];
  var hash = {}
  for(var i = 0;i< S.length;i++){
    hash[S[i]] = i;
  };

  var number = 0;
  var max = 0;
  for(var i = 0;i< S.length;i++){
    max = Math.max(max, hash[S[i]]);
    if(i == max){
      result.push(max - number + 1);
      number = max + 1;
    }
  };
  return result;
};
// @lc code=end

