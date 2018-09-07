def isAnagram(s, t):
    """
    :type s: str
    :type t: str
    :rtype: bool
    """
    def getKey(str_):
        key = [0] * 26
        for i in str_:
            key[ord(i) - 97] = key[ord(i) - 97] + 1
        return ("#").join(map(str, key))
    return getKey(s) == getKey(t)