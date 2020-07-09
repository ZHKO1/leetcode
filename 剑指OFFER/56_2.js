/**
 * @param {number[]} nums
 * @return {number}
 */
// https://leetcode-cn.com/problems/shu-zu-zhong-shu-zi-chu-xian-de-ci-shu-ii-lcof/solution/mian-shi-ti-56-ii-shu-zu-zhong-shu-zi-chu-xian-d-4/
var singleNumber = function(nums) {
  var two = 0;
  var one = 0;
  nums.forEach(item => {
    one = one ^ item & ~two;
    two = two ^ item & ~one;
  });
  return one;
};