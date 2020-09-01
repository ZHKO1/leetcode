/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var add = function(a, b) {
  if(a == 0){
    return b
  }
  if(b == 0){
    return a
  }
  var tmp1 = a ^ b;
  var tmp2 = (a & b) << 1;
  return add(tmp1, tmp2)
};