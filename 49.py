def groupAnagrams(strs):
    """
    :type strs: List[str]
    :rtype: List[List[str]]
    """
    def getKey(str_):
        key = [0] * 26
        for i in str_:
            key[ord(i) - 97]  = key[ord(i) - 97] + 1
        return ("#").join(map(str,key))
    dit = {}
    result = []
    for item in strs:
        key = getKey(item)
        if(key not in dit):
            dit[key] = []
        dit[key].append(item)
    for key in dit.keys():
        result.append(dit[key])
    return result


print(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))

