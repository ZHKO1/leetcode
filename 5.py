def longestPalindrome(s):
    """
    :type s: str
    :rtype: str
    """
    maxLen = 0
    maxString = ""
    myArray = [[0 for col in range(len(s))] for row in range(len(s))]
    if(len(s) == 0):
        return ""
    for j in range(len(s)):
        for i in range(len(s))[:j + 1]:
            if(i == j):
                myArray[i][j] = 1
            else:
                if(s[i] == s[j]):
                    if(j - i == 1):
                        myArray[i][j] = 2
                    else:
                        if(myArray[i+1][j - 1] > 0):
                            myArray[i][j] = j - i + 1
                        else:
                            myArray[i][j] = 0
                else:
                    myArray[i][j] = 0
            if(myArray[i][j] > maxLen):
                maxLen = myArray[i][j]
                maxString = s[i:j+1]
    return maxString

print(longestPalindrome("abcda"))