/**
 * @param {number[]} a
 * @return {number[]}
 */
var constructArr = function(a) {
  if(a.length == 0){
    return [];
  }
  if(a.length == 1){
    return [1];
  }
  var result = [];

  var dp = [];
  var dp_ = [];

  dp[0] = a[0];
  dp_[a.length - 1] = a[a.length - 1];

  for(var i = 1; i < a.length - 1; i++){
    var last = dp[i - 1];
    dp[i] = last * a[i];
  }
  for(var i = a.length - 2; i > 0; i--){
    var last = dp_[i + 1];
    dp_[i] = last * a[i];
  }
  for(var i = 0; i < a.length; i++){
    if ( i == 0 ) {
      result.push(dp_[i + 1])
    } else if(i == a.length - 1) {
      result.push(dp[i - 1])
    } else {
      result.push(dp[i - 1] * dp_[i + 1])
    }
  }
  return result;
};