/*
 * @lc app=leetcode id=509 lang=javascript
 *
 * [509] Fibonacci Number
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
var fib = function(n) {
  if ( n == 0 ) {
    return 0;
  } else if (n == 1) {
    return 1;
  } else {
    var pre1 = 0;
    var pre2 = 1;
    for(let i = 2; i <= n; i++){
      result = pre1 + pre2;
      pre1 = pre2 % 1000000007;
      pre2 = result % 1000000007;
    }
    return result % 1000000007;
  }
};
// @lc code=end

