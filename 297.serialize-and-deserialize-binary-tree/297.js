/*
 * @lc app=leetcode id=297 lang=javascript
 *
 * [297] Serialize and Deserialize Binary Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  var result = [];
  if(root){
    var queue = [root];
    while(queue.filter(item => !!item).length > 0){
      result = [...result, ...queue.map(item => {
        if(!item){
          return null;
        }else{
          return item.val;
        }
      })];
      var length = queue.length;
      for(var i = 0; i < length; i++){
        var node = queue.shift();
        if(!node){
        } else {
          queue.push(node.left);
          queue.push(node.right);
        }
      }
    }
    while(result[result.length - 1] === null){
      result.pop();
    }  
  }
  return JSON.stringify(result);
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    var array = JSON.parse(data);
    if(array.length == 0){
      return null;
    }
    var val = array.shift();
    var HEAD = new TreeNode(val);
    var tmp = [HEAD];
    while( array.length > 0 ){
      for(var i = 0; i < tmp.length; i++){
        var node = tmp.shift();
        if(node === null){
          continue
        }
        var left_val = array.shift();
        left_val = left_val === undefined ? null : left_val;
        var left_node = left_val === null ? null : new TreeNode(left_val);
        var right_val = array.shift();
        right_val = right_val === undefined ? null : right_val;
        var right_node = right_val === null ? null : new TreeNode(right_val);
        node.left = left_node;
        node.right = right_node;
        tmp.push(left_node);
        tmp.push(right_node);
      }
    }
    return HEAD;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end

