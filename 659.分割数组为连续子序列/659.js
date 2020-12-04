/*
 * @lc app=leetcode.cn id=659 lang=javascript
 *
 * [659] 分割数组为连续子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossible = function(nums) {
  var array = [];
  for(var i = 0; i < nums.length; i++){
    var num = nums[i];
    add(num)
  }
  var checkArray = array.filter(item => (item.amount < 3));
  if(checkArray.length > 0){
    return false;
  } else {
    return true;
  }
  
  function add(num){
    if(array.length == 0){
      array.push({
        val: num,
        amount: 1
      })
      return;
    }
    var addFlag = false;
    var length = array.length - 1;
    var last = array[length];
    if ( last.val + 1 < num  ) {
      array.push({
        val: num,
        amount: 1
      });
    }else{
      for ( var i = length; i >= 0; i-- ) {
        var item = array[i];
        if ( item.val + 1 == num) {
          item.val++;
          item.amount++;
          addFlag = true;
          break;
        } else if ( item.val == num ) {
          continue;
        } else {
          break;
        }
      }
      if(!addFlag){
        array.push({
          val: num,
          amount: 1
        })
      }
    }    
  }
};
// @lc code=end

