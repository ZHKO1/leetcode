/*
 * @lc app=leetcode id=42 lang=javascript
 *
 * [42] Trapping Rain Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    var stack = [];
    var current = 0;
    var result = 0;
    for(var current = 0; current < height.length; current++){
      while(!isEmpty(stack) && (height[current] > height[getTop(stack)])){
        var top = getTop(stack);
        stack.pop();
        if(isEmpty(stack)){
          break;
        }
        var distance = current - getTop(stack) - 1;
        var bounded_height = Math.min(height[current], height[getTop(stack)]) - height[top];
        result += bounded_height * distance;
      }
      stack.push(current);
    }

    return result;

    function isEmpty(stack){
      return stack.length == 0;
    }
    function getTop(stack){
      return stack[stack.length - 1];
    }
      
};
// @lc code=end

