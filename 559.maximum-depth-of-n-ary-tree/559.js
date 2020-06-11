/*
 * @lc app=leetcode id=559 lang=javascript
 *
 * [559] Maximum Depth of N-ary Tree
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function(root) {
    if(!root){
        return 0;
    }
    return dp(root)
};

function dp(node){    
    if(node.children.length == 0){
        return 1;
    }
    var result = node.children.map(i => (dp(i) + 1));
    return Math.max(...result);
}

// @lc code=end

