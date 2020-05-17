/*
 * @lc app=leetcode id=299 lang=javascript
 *
 * [299] Bulls and Cows
 */

// @lc code=start
/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    var A = 0;
    var B = 0;
    var guess_array = guess.split("");
    var secret_array = secret.split("");
    for(var i = 0; i < guess_array.length; i++){
      var ch = guess_array[i];
      if (ch == secret_array[i]) {
        guess_array[i] = "A";
        secret_array[i] = "A"
        A++;
      }
    }
    for(var i = 0; i < guess_array.length; i++){
      var ch = guess_array[i];
      if(ch == "A"){
        continue;
      }
      for(var j = 0; j < secret_array.length; j++){
        var ch_ = secret_array[j];
        if (ch_ == ch) {
          guess_array[i] = "B";
          secret_array[j] = "B";
          B++;
          break;
        }
      }
    }
    return A + "A" + B + "B";
};
// @lc code=end

