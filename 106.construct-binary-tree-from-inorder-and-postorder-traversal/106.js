/*
 * @lc app=leetcode id=106 lang=javascript
 *
 * [106] Construct Binary Tree from Inorder and Postorder Traversal
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  return dfs(inorder, postorder);
  
  function dfs(inorder, postorder){
    var {
      fatherVal,
      leftInorder,
      rightInorder,
      leftPostorder,
      rightPostorder
    } = getFatherNode(inorder, postorder);
    if(fatherVal == null){
      return null
    }else{
      var node = new TreeNode(fatherVal);
      node.left = dfs(leftInorder, leftPostorder);
      node.right = dfs(rightInorder, rightPostorder);
      return node;
    }
  }

  function getFatherNode(inorder, postorder){
    if(inorder.length == 0){
      return {
        fatherVal : null,
        leftInorder : [],
        rightInorder : [],
        leftPostorder : [],
        rightPostorder : []
      }
    }

    var fatherVal = postorder[postorder.length - 1];

    var fatherIndex = inorder.indexOf(fatherVal);
    var leftInorder = inorder.slice(0, fatherIndex);
    var rightInorder = inorder.slice(fatherIndex + 1);
    var leftPostorder = postorder.slice(0, leftInorder.length);
    var rightPostorder = postorder.slice(leftInorder.length, inorder.length - 1);
    return {
      fatherVal,
      leftInorder,
      rightInorder,
      leftPostorder,
      rightPostorder
    }
  }
};
// @lc code=end

