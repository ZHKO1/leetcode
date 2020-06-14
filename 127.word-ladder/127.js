/*
 * @lc app=leetcode id=127 lang=javascript
 *
 * [127] Word Ladder
 */

// @lc code=start
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
  if(beginWord == endWord){
    return 1;
  }
  var queue = [{word: beginWord, stepNumber:1, stepArray:[beginWord]}];
  while(queue.length > 0){
    var tmp = queue.shift();
    var stepNumber = tmp.stepNumber;
    var stepArray = tmp.stepArray;
    var currentWord = tmp.word;

    var nextWordArray = findNextWordArray(currentWord, stepArray, wordList);

    var flag = false;
    for(let i = 0; i < nextWordArray.length; i++){
      var item = nextWordArray[i];
      if(item == endWord)flag = true;
      wordList = wordList.filter(itemA => itemA !== item);
      var stepArray = JSON.parse(JSON.stringify(tmp.stepArray));
      stepArray.push(item);
      queue.push({
        word: item,
        stepNumber: stepNumber + 1,
        stepArray: stepArray
      })
    }

    // console.log(queue);
    if(flag){
      return stepNumber + 1;
    }
  }
  return 0;
};

function findNextWordArray(currentWord, stepArray, wordList){
  var wordList = JSON.parse(JSON.stringify(wordList));
  wordList = wordList.filter(item=>{
    return isNextWord(item, currentWord)
  })
  /*
  wordList = wordList.filter(item => {
    return stepArray.indexOf(item) == -1; 
  })
  */
  return wordList;
}

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

// @lc code=end

