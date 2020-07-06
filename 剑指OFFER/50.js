/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function(s) {
  var array = s.split('');
  var map = {};
  for(var i = 0; i < array.length; i++){
    var ch = array[i];
    if( !map[ch] ){
      map[ch] = 1;
    } else {
      map[ch]++
    }
  } 
  for(var i = 0; i < array.length; i++){
    var ch = array[i];
    if( map[ch] === 1 ){
      return ch;
    }
  }
  return ' '
};