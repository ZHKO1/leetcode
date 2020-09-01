/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  var priceChangeArray = [];
  var pre = null;
  for(var i = 0; i < prices.length; i++){
    var current = prices[i];
    if(pre === null){
    } else {
      var change = current - pre;
      priceChangeArray.push(change);
    }
    pre = current;
  }
  var tmp = null;
  var MAX = 0;
  for(var i = 0; i < priceChangeArray.length; i++){
    var current = priceChangeArray[i];
    if(tmp == null){
      if(current > 0){
        tmp = current;
        MAX = Math.max(tmp, MAX);
      }
    }else{
      if(tmp + current > 0){
        tmp = tmp + current;
        MAX = Math.max(tmp, MAX);
      } else {
        tmp = null;
      }
    }
  }
  return MAX;
};