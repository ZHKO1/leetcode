/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function(s) {
  var array = s.split(' ');
  return array.join('%20')
};