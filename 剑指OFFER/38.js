/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function(s) {
  let array = s.split('');
  let result = [];
  let map = new Map()
  for(let i = 0;i < array.length; i++){
    let ch = array[i];
    array[i] = null;
    dfs(ch);
    array[i] = ch;    
  }
  return result;

  function dfs(str){
    if(str.length == array.length){
      if(map.get(str)){
      } else {
        map.set(str, true);
        result.push(str);
      }
      return;
    };
    for(let i = 0;i < array.length; i++){
      let ch = array[i];
      if(ch){
        array[i] = null;
        dfs(str + ch);
        array[i] = ch;
      }
    }
  }
};