def combinationSum2(candidates, target):
    """
    :type candidates: List[int]
    :type target: int
    :rtype: List[List[int]]
    """
    def deal(index,sum,resolute):
        if index > length - 1:
            if(len(resolute) == 0):
                return
            lastIndex = resolute.pop()
            nextIndex = lastIndex + 1
            while((nextIndex <= length - 1) and (list1[nextIndex] == list1[lastIndex])):
                nextIndex = nextIndex + 1
            deal(nextIndex, sum - list1[lastIndex], resolute)
            return
        tmpSum = sum + list1[index]
        #print(index,sum,resolute,tmpSum)
        if tmpSum == target:
            resolute.append(index)
            result.append([list1[i] for i in resolute])
            #print([list1[i] for i in resolute])
            lastIndex = resolute.pop()
            nextIndex = lastIndex + 1
            while((nextIndex <= length - 1) and (list1[nextIndex] == list1[lastIndex])):
                nextIndex = nextIndex + 1
            deal(nextIndex, sum, resolute)
        elif tmpSum > target:
            deal(index + 1, sum, resolute)
        else:
            resolute.append(index)
            deal(index + 1, tmpSum, resolute)
    list1 = candidates[:]
    list1.sort()
    list1.reverse()
    length = len(list1)
    result = []
    deal(0,0,[])
    return result

#print(combinationSum([2,3,6,7],7))
#print(combinationSum2([10,1,2,7,6,1,5,5],8))
print(combinationSum2([2,5,2,1,2],5))