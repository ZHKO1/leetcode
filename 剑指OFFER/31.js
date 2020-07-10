/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
  if(pushed.length !== popped.length){
    return false;
  }
  let pushed_tmp = [];
  let popped_index = 0;
  for(let i = 0; i < pushed.length; i++){
    let num = pushed[i];
    pushed_tmp.push(num);
    while((pushed_tmp.length > 0) && (pushed_tmp[pushed_tmp.length - 1] == popped[popped_index])){
      pushed_tmp.pop();
      popped_index++;
    }
  }
  if(pushed_tmp.length == 0){
    return true;
  } else {
    return false;
  }
};

