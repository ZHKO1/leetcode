/*
 * @lc app=leetcode id=374 lang=javascript
 *
 * [374] Guess Number Higher or Lower
 */

// @lc code=start
/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    var low = 1;
    var high = n;
    while(low < high){
      var middle = Math.floor((low + high)/2);
      var result = guess(middle);
      if( result === 0){
        return middle;
      } else if ( result === -1 ) {
        high = middle - 1;
      } else {
        low = middle + 1;
      }
    }
    return high;
};
// @lc code=end

