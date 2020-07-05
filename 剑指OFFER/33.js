/**
 * @param {number[]} postorder
 * @return {boolean}
 */
var verifyPostorder = function(postorder) {
  return dfs(postorder);

  function dfs(array){
    if(array.length <= 1){
      return true;
    }
    var top = array.pop();
    var lmin = array.length - 1, lmax = 0, rmin = array.length - 1, rmax = 0;
    array.forEach((item, index) => {
      if(item < top){
        lmin = Math.min(lmin, index);
        lmax = Math.max(lmax, index);
      }
      if(item > top){
        rmin = Math.min(rmin, index);
        rmax = Math.max(rmax, index);
      }
    });
    console.log(lmax, rmin)
    if(lmax > rmin){
      return false;
    } else {
      var left = array.slice(0, lmax + 1);
      var right = array.slice(rmin);
      return dfs(left) && dfs(right)      
    }
  }
};