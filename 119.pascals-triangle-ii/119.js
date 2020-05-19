/*
 * @lc app=leetcode id=119 lang=javascript
 *
 * [119] Pascal's Triangle II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    var result = [1];
    for(var i = 1; i <= rowIndex; i++){
        result[i] = 1;
        for(var j = i - 1; j > 0; j--){
            result[j] = result[j] + result[j - 1];
        }
    }
    return result;
};

// @lc code=end

