/*
 * @lc app=leetcode id=126 lang=javascript
 *
 * [126] Word Ladder II
 */

// @lc code=start
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function(beginWord, endWord, wordList) {
  if(beginWord == endWord){
    return [beginWord];
  }
  var result = [];
  var map = {};
  var minStep = Infinity;
  for(let i = 0; i < wordList.length; i++){  
    for(let j = i + 1; j < wordList.length;j++) {
      var A = wordList[i];
      var B = wordList[j];
      if(isNextWord(A, B)){
        setMap(map, A, B)
      }
    }
  }
  var cost = {}
  for(let i = 0; i < wordList.length; i++){  
    var A = wordList[i];
    cost[A] = Infinity;
    var B = beginWord;
    if(isNextWord(A, B)){
      setMap(map, A, B)
    }
  }
  var queue = [{word: beginWord, stepNumber:1, stepArray:[beginWord]}];
  cost[beginWord] = 1;
  while(queue.length > 0){
    var tmp = queue.shift();
    var stepNumber = tmp.stepNumber;
    var stepArray = tmp.stepArray;
    var currentWord = tmp.word;

    if(stepNumber > minStep){
      break;
    }

    var nextWordArray = Object.keys(map[currentWord] || {});
    nextWordArray = nextWordArray.filter(item => stepArray.indexOf(item) == -1);

    for(let i = 0; i < nextWordArray.length; i++){
      var item = nextWordArray[i];
      if(item == endWord){
        var length = stepArray.length + 1;
        if(length < minStep){
          minStep = length;
          result = [];
          result.push([...stepArray, item]);
        } else if(length == minStep){
          result.push([...stepArray, item]);
        } else {
        }
      }else{
        if(cost[item] >= stepNumber + 1){
          cost[item] = stepNumber + 1;
          queue.push({
            word: item,
            stepNumber: stepNumber + 1,
            stepArray: [...stepArray, item]
          })
        } else {
  
        }  
      }
    }
  }
  return result;
  function isNextWord(word, preWord){
    if(word == preWord){
      return false;
    }
    var diff = 0
    for(let i = 0;i < word.length;i++){
      if(word[i] !== preWord[i]){
        diff++;
        if(diff == 2){
          return false;
        }
      }
    }
    if(diff == 1){
      return true;
    }
  }  
  function setMap(map, key1, key2){
    if(!map[key1]){
      map[key1] = {};
    }
    if(!map[key2]){
      map[key2] = {};
    }
    map[key1][key2] = true;
    map[key2][key1] = true;
  }
};

// @lc code=end

