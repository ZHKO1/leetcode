/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function(nums) {
  for(let i = 0; i < nums.length; i++){
    let item = nums[i];
    while(item !== i){
      if(item == nums[item]){
        return item;
      }
      let tmp = nums[item];
      nums[i] = tmp;
      nums[item] = item;
      item = tmp;
    }
  }
  return -1;
};
// 排序法 
// Map法
// Map法的升级 原地交换 某种程度上有点像链表 圆周链表
// 甚至还能用到二分法