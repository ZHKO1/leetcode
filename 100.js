/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if((p == null) && (q == null)){
        return true;
    }
    if((p == null) && q){
        return false;
    }
    if(p && (q == null)){
        return false;
    }
    if((p.val == q.val) &&　isSameTree(p.left, q.left) && isSameTree(p.right, q.right)){
        return true;
    }else{
        return false;
    }
};

// 例子
var p = new TreeNode(1, new TreeNode(2), undefined);
var q = new TreeNode(1, undefined, new TreeNode(2));
isSameTree(p, q);

