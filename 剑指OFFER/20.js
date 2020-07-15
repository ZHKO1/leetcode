/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
  var string = deleteLeftRightSpace(s);
  return isExponentOrSmallNumberOrInteger(string);
};

// 判断是否指数
// 前部分可以是整数也可以是小数点，正负也无所谓
// 后部分只能是整数，但正负也同样无所谓
function isExponentOrSmallNumberOrInteger(s){
  var e_index = s.indexOf('e');
  if(e_index == -1){
    return getLeftPlusMinus(s, isSmallNumberOrInteger)
  } else {
    var eBefore = s.slice(0, e_index);
    var eAfter = s.slice(e_index + 1);   
    if(eBefore == "" || eAfter == ""){
      return false;      
    }
    return getLeftPlusMinus(eBefore, isSmallNumberOrInteger) && getLeftPlusMinus(eAfter, isInteger); 
  }
}

// 判断是否是正负数，callback决定是检查纯整数还是小数
function getLeftPlusMinus(s, callback){
  var plus = "+";
  var minus = "-";
  if((s.indexOf(plus) == -1) && (s.indexOf(minus) == -1)){
    return callback(s);
  }
  if((s.indexOf(plus) == 0) || (s.indexOf(minus) == 0)){
    s = s.slice(1);
    return callback(s);
  }
  return false;
}

// 判断是否是小数或正整数（不带正负号）
// case1 .1
// case2 1.
// case3 1.1
// case4 1234
function isSmallNumberOrInteger(s){
  var pointer = s.indexOf('.');
  if(pointer == -1){
    return isInteger(s)
  } else {
    var pointerBefore = s.slice(0, pointer);
    var pointerAfter = s.slice(pointer + 1);   
    if(pointerBefore == ""){
      return (pointerAfter !== "") && (isInteger(pointerAfter));      
    }
    if(pointerAfter == ""){
      return (pointerBefore !== "") && (isInteger(pointerBefore));      
    }
    return isInteger(pointerAfter) && isInteger(pointerBefore); 
  }
}

// 判断是否是纯整数（不带正负号）
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

function deleteLeftRightSpace(s){
  var right = s.length - 1;
  while(s[right] == " "){
    right--;
  }
  s = s.slice(0, right + 1);
  var left = 0;
  while(s[left] == " "){
    left++;
  }
  s = s.slice(left);
  return s;  
}

var testCase = [
  {s:".", result: false},
  {s:"0.", result: true},
  {s:".0", result: true},
  

  {s:"0", result: true},
  {s:" 0.1 ", result: true},
  {s:"abc", result: false},
  {s:"1 a", result: false},
  {s:"2e10", result: true},
  {s:" -90e3   ", result: true},
  {s:" 1e", result: false},
  {s:"e3", result: false},
  {s:" 6e-1", result: true},
  {s:" -10e-1.25", result: false},
  {s:" -10e-45", result: true},
  {s:" 99e2.5 ", result: false},
  {s:"53.5e93", result: true},
  {s:" --6 ", result: false},
  {s:"-+3", result: false},
  {s:"95a54e53", result: false},
  
  
  {s:"+100", result: true},
  {s:"5e2", result: true},
  {s:"-123", result: true},
  {s:"3.1416", result: true},
  {s:"0123", result: true},
  {s:"12e", result: false},
  {s:"1a3.14", result: false},
  {s:"1.2.3", result: false},
  {s:"+-5", result: false},
  {s:"-1E-16", result: false},
  {s:"12e+5.4", result: false},
  
  
  
]

testCase.forEach(({s,result}, index) => {
  var result_my = isNumber(s);
  if(result_my !== result){
    console.log(s,result_my)    
  }
})