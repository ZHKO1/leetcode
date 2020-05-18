/*
 * @lc app=leetcode id=229 lang=javascript
 *
 * [229] Majority Element II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
  var m1 = null;
  var m1C = 0;
  var m2 = null;
  var m2C = 0;
  for(var i = 0;i < nums.length; i++){
    var current = nums[i];
    if(m1C === 0){
      m1 = current;
    }

    if((m2C === 0) && (m1 !== current)){
      m2 = current;
    }

    if ( current === m1 ) {
      m1C++;
    } else if( current === m2 ){
      m2C++;
    } else{
      m1C--;
      m2C--;
    }

    if(m1C === 0 && m2C !== 0){
      m1 = m2;
      m1C = m2C;
      m2 = null;
      m2C = 0;
    }
  }
  var result = [];
  if (m1C > 0){
    var m1_number = 0;
    for(var i = 0;i < nums.length; i++){
      var current = nums[i];
      if(current == m1){
        m1_number ++;
      };
    } 
    if(m1_number * 3 > nums.length){
      result.push(m1);
    }
  }
  if (m2C > 0){
    var m2_number = 0;
    for(var i = 0;i < nums.length; i++){
      var current = nums[i];
      if(current == m2){
        m2_number ++;
      };
    } 
    if(m2_number * 3 > nums.length){
      result.push(m2);
    }
  }
  return result;
};
// @lc code=end

