/*
 * @lc app=leetcode id=88 lang=javascript
 *
 * [88] Merge Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  var nums1_pointer = m - 1;
  var nums2_pointer = n - 1;
  var nums1_tail = m + n - 1;
  while(nums2_pointer >= 0){
    var n1 = nums1[nums1_pointer];
    var n2 = nums2[nums2_pointer];
    if((nums1_pointer >= 0) && (n1 >= n2)){
      nums1[nums1_tail] = n1;
      nums1_pointer--;
      nums1_tail--;
    } else {
      nums1[nums1_tail] = n2;
      nums2_pointer--;
      nums1_tail--;
    }
  };
};
// @lc code=end

