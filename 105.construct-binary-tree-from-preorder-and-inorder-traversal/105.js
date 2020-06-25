/*
 * @lc app=leetcode id=105 lang=javascript
 *
 * [105] Construct Binary Tree from Preorder and Inorder Traversal
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  return dfs(preorder, inorder);
  
  function dfs(preorder, inorder){
    var {
      fatherVal,
      leftInorder,
      rightInorder,
      leftPreorder,
      rightPreorder
    } = getFatherNode(preorder, inorder);
    if(fatherVal == null){
      return null
    }else{
      var node = new TreeNode(fatherVal);
      node.left = dfs(leftPreorder, leftInorder);
      node.right = dfs(rightPreorder, rightInorder);
      return node;
    }
  }

  function getFatherNode(preorder, inorder){
    if(preorder.length == 0){
      return {
        fatherVal : null,
        leftInorder : [],
        rightInorder : [],
        leftPreorder : [],
        rightPreorder : []
      }
    }

    var fatherVal = preorder[0];

    var fatherIndex = inorder.indexOf(fatherVal);
    var leftInorder = inorder.slice(0, fatherIndex);
    var rightInorder = inorder.slice(fatherIndex + 1);
    var leftPreorder = preorder.slice(1, 1 + leftInorder.length);
    var rightPreorder = preorder.slice(1 + leftInorder.length);
    return {
      fatherVal,
      leftInorder,
      rightInorder,
      leftPreorder,
      rightPreorder
    }
  }
};

// @lc code=end

