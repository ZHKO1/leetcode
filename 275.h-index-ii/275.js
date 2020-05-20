/*
 * @lc app=leetcode id=275 lang=javascript
 *
 * [275] H-Index II
 */

// @lc code=start
/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    var min = 0;
    var max = citations.length - 1;
    while(min <= max){
        var middle = Math.floor((min + max) / 2);
        var current = citations[middle];
        if (current >= citations.length - middle) {
            max = middle - 1;
        } else {
            min = middle + 1;
        }
    }
    if(min == citations.length){
        return 0;
    }
    if(max == -1){
        return citations.length;
    }
    
    var current = citations[middle];
    if (current >= citations.length - middle) {
        return citations.length - middle;
    } else {
        return citations.length - middle - 1;
    }
};
// @lc code=end

