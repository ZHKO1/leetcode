/*
 * @lc app=leetcode id=278 lang=javascript
 *
 * [278] First Bad Version
 */

// @lc code=start
/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        if(n == 0){
            return 1;
        }
        var goodMax = -1;
        var badMin = n;
        var head = 1;
        var end = n;
        while(head <= end){
            var middle = Math.floor((head + end) / 2);
            if(isBadVersion(middle)){
                head = head;
                end = middle - 1;
                badMin = middle;
            }else{
                head = middle + 1;
                end = end;
                goodMax = middle;
            }
        }
        return badMin;
    };
};
// @lc code=end

