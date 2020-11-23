/*
 * @lc app=leetcode.cn id=452 lang=javascript
 *
 * [452] 用最少数量的箭引爆气球
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
  var areaArray = [];
  points.sort(function(a, b){
    return a[0] - b[0]
  })
  points.forEach((point)=>{
    updateResultArray(areaArray, point);
    // console.log(areaArray);
  });
  return areaArray.length;

  function updateResultArray(areaArray, point){
    var tmp = [];
    var i = 0;
    for(i = 0; i < areaArray.length; i++){
      var area = areaArray[i];
      var min = area[0];
      var max = area[1];
      var pointmin = point[0];
      var pointmax = point[1];
      if((max < pointmin) || (min > pointmax)){      
      } else if ((max >= pointmin) && (max < pointmax) && (min < pointmin)) {
        tmp.push({
          index: i,
          min: pointmin,
          max: max
        });
      } else if ((min > pointmin) && (min <= pointmax) && (max > pointmax)) {
        tmp.push({
          index: i,
          min: min,
          max: pointmax
        });
      } else if((min <= pointmin) && (max >= pointmax)){
        tmp.push({
          index: i,
          min: pointmin,
          max: pointmax
        });
      } else if((pointmin <= min) && (max <= pointmax)){
        tmp.push({
          index: i,
          min: min,
          max: max
        });
      }
    }
    if(tmp.length == 0){
      areaArray.push(point)
    }else{
      tmp.sort(function(a, b){
        return (a.max - a.min) - (b.max - b.min)
      })
      tmp = tmp[0]
      areaArray[tmp.index][0] = tmp.min
      areaArray[tmp.index][1] = tmp.max
    }
  }
};
// @lc code=end

