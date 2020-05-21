/*
 * @lc app=leetcode id=45 lang=javascript
 *
 * [45] Jump Game II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    var memo = [];
    memo[nums.length - 1] = 0;
    for(var i = nums.length - 2; i >= 0; i--){
        var farest = Math.min(i + nums[i], nums.length - 1);
        if(farest == i){
            memo[i] = "GAMEOVER";
            continue;
        }
        var min = nums.length;
        for(var j = i + 1;j <= farest; j++){
            if(memo[j] == "GAMEOVER"){
                continue;
            }else{
                if(min > memo[j]){
                    min = memo[j];
                }
            }
        };
        memo[i] = min + 1;
    };
    return memo[0];
};
// @lc code=end

