/*
  树
  1. 前序遍历，中序遍历，后序遍历 递归/循环
  2. 宽度优先遍历
  3. 最大/小堆 红黑树
  查找与排序
  1. 二分查找
  2. 插入排序 冒泡排序 归并排序 快速排序 （额外空间消耗，平均时间复杂度，最差时间复杂度）


  TODO 7
*/

// 946
/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
  if(pushed.length !== popped.length){
    return false;
  }
  let pushed_tmp = [];
  let popped_index = 0;
  for(let i = 0; i < pushed.length; i++){
    let num = pushed[i];
    pushed_tmp.push(num);
    while((pushed_tmp.length > 0) && (pushed_tmp[pushed_tmp.length - 1] == popped[popped_index])){
      pushed_tmp.pop();
      popped_index++;
    }
  }
  if(pushed_tmp.length == 0){
    return true;
  } else {
    return false;
  }
};

