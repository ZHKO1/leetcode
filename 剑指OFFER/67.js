/**
 * @param {string} str
 * @return {number}
 */
var strToInt = function(str) {
  var str = deleteLeftSpace(str);
  var {minus, str} = deleteLeftPlusMinus(str);
  var result = 0;
  var isNum = false;
  for(i = 0; i < str.length; i++){
    var s = str[i];
    if(isInteger(s)){
      result = result * 10 +  parseInt(s);
      isNum = true;
    }else{
      break;
    }
  }
  if (isNum) {
    if(result >= Math.pow(2, 31)){
      result = Math.pow(2, 31);
      if(!minus){
        result = Math.pow(2, 31) - 1;
      }
    }
    if(minus){
      result = -1 * result;
    }
    return result;    
  } else {
    return 0;
  }
};

function isInteger(s){
  if(s == ""){
    return false;
  }
  for(var i = 0;  i < s.length; i++){
    var ch = s[i].charCodeAt();
    if(ch < 48 || ch > 57){
      return false;
    }
  }
  return true;
}

function deleteLeftSpace(s){
  var left = 0;
  while(s[left] == " "){
    left++;
  }
  s = s.slice(left);
  return s;  
}

function deleteLeftPlusMinus(s){
  var plus = "+";
  var minus = "-";
  var flag = false;
  if((s.indexOf(plus) == -1) && (s.indexOf(minus) == -1)){
  }
  if((s.indexOf(plus) == 0) || (s.indexOf(minus) == 0)){
    if(s.indexOf(minus) == 0){
      flag = true;
    }
    s = s.slice(1);
  }
  return {
    str: s,
    minus: flag
  };
}