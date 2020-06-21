/*
 * @lc app=leetcode id=108 lang=javascript
 *
 * [108] Convert Sorted Array to Binary Search Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  return dfs(nums);
    
  function dfs(nums){
    var length = nums.length;
    if(length == 0){
      return null;
    }
    var middle_index = Math.floor(length/2);
    var middle = nums[middle_index];
    var left_array = nums.slice(0, middle_index);
    var left_node = dfs(left_array);
    var right_array = nums.slice(middle_index + 1, length);
    var right_node = dfs(right_array);
    return new TreeNode(middle, left_node, right_node);
  }
};

// @lc code=end

