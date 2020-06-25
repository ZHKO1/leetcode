/*
 * @lc app=leetcode id=95 lang=javascript
 *
 * [95] Unique Binary Search Trees II
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
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
  var map = {
    0: [],
    1: [new TreeNode(1)],
  };

  var array = [];
  for(var i = 1; i <= n; i++){
    array.push(i);
  }
  return dfs(array);


  function dfs(array){    
    var length = array.length;
    if(map[length]){
      return map[length].map(item => {
        var min = array[0];
        return setTree(copyTree(item), min - 1)
      });
    }

    var result = [];

    var min = array[0];
    var max = array[array.length - 1];

    for(var i = min; i <= max; i++){
      var leftArray = [];
      var rightArray = [];
      for(var j = min;j < i;j++){
        leftArray.push(j);
      }
      for(var j = i + 1;j <= max;j++){
        rightArray.push(j);
      }
      var leftTreeArray = dfs(leftArray);
      var rightTreeArray = dfs(rightArray);
      if(leftTreeArray.length == 0){
        rightTreeArray.forEach(itemR => {
          var parentNode = new TreeNode(i);
          parentNode.right = copyTree(itemR);
          result.push(parentNode);
        })
      }
      if(rightTreeArray.length == 0){
        leftTreeArray.forEach(itemL => {
          var parentNode = new TreeNode(i);
          parentNode.left = copyTree(itemL);
          result.push(parentNode);
        })
      }
      if(leftTreeArray.length > 0 && rightTreeArray.length > 0){
          leftTreeArray.forEach(itemL => {
            rightTreeArray.forEach(itemR => {
              var parentNode = new TreeNode(i);
              parentNode.left = copyTree(itemL);
              parentNode.right = copyTree(itemR);
              result.push(parentNode);
            })
          })          
      }
    }
    map[length] = result.map(item => {
      var min = array[0];
        return setTree(copyTree(item), 1 - min)
    });
    return result;
  }

  function copyTree(node){
    if(!node){
      return node;
    }
    var parentNode = new TreeNode(node.val);
    if(node.left){
      parentNode.left = copyTree(node.left)
    }
    if(node.right){
      parentNode.right = copyTree(node.right)
    }
    return parentNode;
  }

  function setTree(node, revise){
    if(!node){
      return node;
    }
    node.val = node.val + revise;
    setTree(node.left, revise);
    setTree(node.right, revise);
    return node;
  }
};

// @lc code=end