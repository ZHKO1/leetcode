/**
 * @param {number} n
 * @return {number}
 */

/*
  一共三种方法
  1. 动态规划，具体请参考14_1.js。但是这题要求大数据，输出取模处理。因此dp数组各状态明显超出范围，显然没法做下去了。看网上似乎python，java不受影响
  2. 数学之美，高数知识我都还给高数老师了，大致意思是分为三份是最划算的，具体请参考https://leetcode-cn.com/problems/integer-break/solution/zheng-shu-chai-fen-shu-xue-fang-fa-han-wan-zheng-t/
  3. 贪心算法 初步看下来比较好理解的两个思路
    https://leetcode-cn.com/problems/jian-sheng-zi-lcof/solution/c-shen-qi-de-jie-lun-si-lu-fei-chang-hao-li-jie-sh/
    思路1 首先需要确定怎么裁剪，这里设第一刀裁剪下来的长度为x
      若x == 1, 很显然不会是最优解 因为乘积起来跟没乘积一样
      若x == 2, 可行
      若x == 3, 可行
      若x == 4，相当于裁剪成2×2 可行
      若x >= 5, 不可行。因为可以证明此时x再裁剪成两部分，收益大于x
      [x >= 5] => [2x >= 10] => [3x >= x + 10] => [3x - 9 >= x + 1] => [3(x - 3) >= x + 1 > x]
      同时我们还需要注意到如果含有 3 个以上的 2，则2∗2∗2<3∗3，所以最多只有两个 2
      综上所述，最优解只能被分解成 3 和 2，且 2 最多只能有两端
    https://leetcode-cn.com/problems/jian-sheng-zi-lcof/solution/xu-lie-xing-dong-tai-gui-hua-by-muyids-2/
    思路2
      当L <= 3时，最大乘积是 L-1
      当L > 3的时候，把L进行拆分得到的乘积 要大于等于 L
        这里仅知
        1. [k >= 2]
        2. [l - k >= 2] => [l >= k + 2]
        尝试推论出 k(l-k) > l
        [k >= 2] => [k^2 + k - 2 >= k^2] => [(k + 2)(k - 1) >= k^2] => [l(k - 1) >= k^2] => [k(l-k) >= l]
      当L >= 4时，我们发现2和3的因子往往是可以产生较大的值的（需求解哪个更大）        
        3 * (L - 3) 和 2 * (L-2) 可以推导出当l>=5时，优先使用3，当l==4时，只能用2×2
      综上所述
        当 L <= 3 时，最优解为 1 * (L-1)
        当 L > 3时，
        如果 L mod 3的值为 1，则分解为两个2，剩下的分解为3
        如果 L mod 3的值为 2，则分解为1个2，剩下的分解为3
        如果 L mod 3的值为 0，全部分解为3
 */

var cuttingRope = function(n) {
  var result = 1;
  if(n == 2){
    return 1;
  }
  if(n == 3){
    return 2;
  }  
  while(n > 4){
    n = n - 3;
    result = result * 3 % 1000000007
  }
  return result * n % 1000000007;
};