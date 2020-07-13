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

// 151
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  let wordArray = [];
  let word = "";
  s += " ";
  for(let i = 0; i < s.length; i++){
    let ch = s[i];
    if (ch !== " ") {
      word += ch;
    } else if ( word ){      
      wordArray.push(word);
      word = ""
    }
  }
  return wordArray.reverse().join(" ")
};