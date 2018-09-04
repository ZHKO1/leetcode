class Solution:
    def strStr(self, haystack, needle):
        """
        :type haystack: str
        :type needle: str
        :rtype: int
        """
        if(needle == ""):
            return 0
        index1 = 0
        while(index1 <= len(haystack) - len(needle)):
            for i in range(len(needle)):
                if(haystack[index1 + i] != needle[i]):
                    break
                if(i == len(needle) - 1):
                    return index1
            index1 = index1 + 1
        return -1