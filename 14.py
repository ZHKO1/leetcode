class Solution:
    def longestCommonPrefix(self, strs):
        """
        :type strs: List[str]
        :rtype: str
        """
        if(len(strs) == 0):
            return ""
        if(len(strs) == 1):
            return strs[0]
        if(strs[0] == ""):
            return ""
        for j in range(len(strs[0])):
            s = strs[0][j]
            equal = True
            for i in strs:
                if(i == ""):
                    return ""
                if(j+1>len(i)):
                    equal = False
                    break
                if (i[j] != s):
                    equal = False
                    break
            if not equal:
                return strs[0][0:j] if j>0 else ""
        return strs[0][0:j+1]