/*
 * @lc app=leetcode id=389 lang=javascript
 *
 * [389] Find the Difference
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    var s1 = s.split("").map(e=>e.charCodeAt());
    var t2 = t.split("").map(e=>e.charCodeAt());
    var result = 0;
    for(var i = 0; i< s1.length; i++){
        result = result^s1[i];
    };
    for(var i = 0; i< t2.length; i++){
        result = result^t2[i];
    };

    return String.fromCharCode(result);
};
// @lc code=end

