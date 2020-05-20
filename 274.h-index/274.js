/*
 * @lc app=leetcode id=274 lang=javascript
 *
 * [274] H-Index
 */

// @lc code=start
/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    var citations = citations.sort((a,b)=>b-a);
    var result = 0;
    for(var i = 0; i< citations.length; i++){
        var h = i + 1;
        if(citations[i] >= h){
            result = h;
        } else {
            break;
        }
    };
    return result;
};
// @lc code=end
// 看起来又是跟木桶排序有关的场景...wtf

