/*
 * @lc app=leetcode id=78 lang=javascript
 *
 * [78] Subsets
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    var result = [];
    for(var i = 0; i<= nums.length; i++){
        backtrack(0, []);
    }
    return result;

    function backtrack(start, cur){
        if(cur.length == i){
            result.push(cur.slice());
            return;
        }
        for(var j = start; j < nums.length; j++){
            cur.push(nums[j]);
            backtrack(j + 1, cur);
            cur.pop();
        };
    }
};
// @lc code=end

var subsets = function(nums) {
    var result = [[]];
    for(var i = 0; i < nums.length; i++){
        var cur = nums[i];
        var tmp = [];
        for(var j = 0; j < result.length; j++){
            var newArray = (result[j]).slice();
            newArray.push(cur);
            tmp.push(newArray);
        }
        result = result.concat(tmp);
    }
    return result;
};