/**
 * @param {number} num
 * @return {number}
 */
var translateNum = function(num) {
  var tmp = [];
  for(var i = 0;i<26;i++){
    tmp[i] = String.fromCharCode(97 + i);
  }
  var length = 0;
  dp(num + "");
  return length;

  function dp(str){
    if(str == ""){
      length++;
    } else {
      var ch1 = str[0];
      dp(str.slice(1));
      var ch2 = str[1];
      if(ch2){
        if(tmp[ch1+ch2]){
          dp(str.slice(2));
        }
      }
    }
  }
};