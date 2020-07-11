/*
 * @lc app=leetcode id=400 lang=javascript
 *
 * [400] Nth Digit
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
  var digit = 0;
  let i = 0;
  while(true){
    let digitRang = getDigitRang(i);
    if(digit +  digitRang > n){
      break;
    } else {
      digit = digit + digitRang;
      i++;
    }
  }

  let k = i;
  let m = n - digit;
  let add  = (m % k == 0) ? (m/k) : (Math.floor(m/k) + 1);
  let number = Math.pow(10, k - 1) - 1 + add;

  let digitPos = (m % k == 0) ? 0 : k - m % k;
  while( digitPos ){
    number = Math.floor(number / 10);
    digitPos--;
  }

  return number % 10;

  function getDigitRang(i){
    let max = Math.pow(10, i) - 1 - Math.pow(10, i - 1) + 1;
    return i * max;
  }
};
// @lc code=end

