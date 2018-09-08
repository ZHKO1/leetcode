def combinationSum(candidates, target):
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
            deal(lastIndex + 1, sum - list1[lastIndex], resolute)
            return
        tmpSum = sum + list1[index]
        #print(index,sum,resolute,tmpSum)
        if tmpSum == target:
            resolute.append(index)
            result.append([list1[i] for i in resolute])
            #print([list1[i] for i in resolute])
            resolute.pop()
            deal(index + 1, sum, resolute)
        elif tmpSum > target:
            deal(index + 1, sum, resolute)
        else:
            resolute.append(index)
            deal(index, tmpSum, resolute)
    list1 = candidates[:]
    list1.sort()
    list1.reverse()
    length = len(list1)
    result = []
    deal(0,0,[])
    return result

#print(combinationSum([2,3,6,7],7))
print(combinationSum([],0))