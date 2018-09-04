class Solution:
    def lengthOfLongestSubstring(self, s):
        """
        :type s: str
        :rtype: int
        """
        if (s == ""):
            return 0
        maxLen = 1
        max = ""
        for i in range(len(s)):
            dit = {}
            for j in range(i,len(s)):
                if s[j] not in dit:
                    dit[s[j]] = 1
                    if (j - i + 1 > maxLen):
                        maxLen = j - i + 1
                else:
                    break
        return maxLen
