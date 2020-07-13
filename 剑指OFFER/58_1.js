/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  let wordArray = [];
  let word = "";
  s += " ";
  for(let i = 0; i < s.length; i++){
    let ch = s[i];
    if (ch !== " ") {
      word += ch;
    } else if ( word ){      
      wordArray.push(word);
      word = ""
    }
  }
  return wordArray.reverse().join(" ")
};