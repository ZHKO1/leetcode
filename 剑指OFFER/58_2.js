/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function(s, n) {
  var pre = s.slice(0, n);
  var next = s.slice(n);
  return next + pre;
};