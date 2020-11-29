/*
 * @lc app=leetcode.cn id=493 lang=javascript
 *
 * [493] 翻转对
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 树状树组法
var reversePairs = function(nums) {
  var allNumbers = Array.from(new Set([...nums, ...nums.map(a => 2*a)])).sort((a, b) => (a - b))
  var map = new Map()
  allNumbers.forEach((a, index) => {
    map.set(a, index + 1)
  })

  var result = 0;
  var bts = new BTS(allNumbers.length);
  var right = allNumbers.length;
  for(var i = 0; i < nums.length; i++){
    var num = nums[i];
    var left = map.get(num * 2);
    result += bts.query(right) - bts.query(left);
    bts.update(map.get(num), 1);
    // console.log(bts.tree);
  }
  return result;
};

var BTS = class {
  constructor(n){
    this.n = n;
    this.tree = new Array(this.n + 1).fill(0);
  }
  lowbit(x){
    return x & (-x)
  }
  update(x, d){
    while (x <= this.n) {
      this.tree[x] += d;
      x += this.lowbit(x);
    }
  }
  query(x){
    var result = 0;
    for(var i = x; i > 0; i -= this.lowbit(i)){
      result += this.tree[i];
    }
    return result;
  }
};
// @lc code=end

// 归并排序法
var reversePairs = function(nums) {
  if(nums.length == 0){
    return 0;
  }
  return dp(0, nums.length - 1);

  function dp(min, max){
    if(min == max){
      return 0;
    }
    var middle = Math.floor((min + max) / 2 );
    var result = dp(min, middle) + dp(middle + 1, max);
    var i = min;
    var j = middle + 1;
    while (i <= middle) {
        while (j <= max && nums[i] > 2 * nums[j]) {
            j++;
        }
        result += j - middle - 1;
        i++;
    }

    var p1 = min;
    var p2 = middle + 1;
    var tmp = [];
    while( (p1 <= middle) || (p2 <= max) ){
      var p1_v = nums[p1];
      var p2_v = nums[p2];
      if(p1 > middle){
        tmp.push(p2_v)
        p2++;
      } else if (p2 > max){
        tmp.push(p1_v)
        p1++;
      } else {
        if(p1_v > p2_v){
          tmp.push(p2_v)
          p2++;
        }else{
          tmp.push(p1_v)
          p1++;
        }
      }
    }
    for(var i = min; i <= max; i++){
      nums[i] = tmp[i - min];
    }
    // console.log(nums)
    return result;
  }
};