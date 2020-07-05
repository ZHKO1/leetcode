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
  dfs(root);
  return JSON.stringify(result);

  function dfs(node){
    if(!node){
      result.push(null);
      return;
    }
    var val = node.val;
    result.push(val);
    dfs(node.left);
    dfs(node.right);
  }
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    var array = JSON.parse(data);
    var {result} = dfs(array);
    return result;

    function dfs(array){
      if(array.length == 0){
        return null
      }
      var [val, ...restArray] = array;
      if ( val !== null ) {
        var topNode = new TreeNode(val);
        var {result: leftNode, rest: rightArray} = dfs(restArray);
        var {result: rightNode, rest: restArray_} = dfs(rightArray);
        topNode.left = leftNode;
        topNode.right = rightNode;
        return {
          result: topNode,
          rest: restArray_
        };  
      } else {
        return {
          result: null,
          rest: restArray
        }
      }
    }
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */