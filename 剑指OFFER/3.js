/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function(nums) {
  let i = 0;
  while(i < nums.length){
    var num = nums[i];
    if(num == i){
      i++;
    }else{
      var tmp = nums[num];
      if ( tmp == num ) {
        return num;
      } else {
        nums[i] = tmp;
        nums[num] = num;
      }
    }
  }
  return -1;
};
// 基于书中给出的空间复杂度O(1)解的优化
// 书里的解有点罗嗦，用到两次循环，我的优化一次循环搞定

/*
 剑指OFFER额外给出了一道题 数组 n+1长度 每项范围1～n
 与leetcode要求的 数组 n长度 每项范围0～n-1不同
 此情况下可以套用二分法
 这里给出二分法的证明
 已知 n+1长度 每项范围1～n
 计算 1～n范围的出现次数，如果不重复，只会出现n次，然而数组长度是n+1，因此必然会有某项重复
 将1～n范围分割为1～m和m+1～n
 假设1~m范围出现次数>m，则1~m范围内必然存在重复项，可以进一步二分法将范围压缩到1~m
 假设1~m范围出现次数=m，则m+1～n范围出现次数可以推断出n+1-m，显然可以判断出m+1～n范围内肯定有重复项，这里进一步二分法将范围压缩到m+1～n
 当然这里需要注意到1~m范围出现次数=m，并不一定证明1~m范围就没有重复项了，比如1～2范围出现两次，也有可能是[1,1]这样的重复阵容
 因此二分法无法不能保证找出所有的重复数字
*/
