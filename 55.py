def canJump(nums):
    """
    :type nums: List[int]
    :rtype: bool
    """
    if len(nums) == 0:
        return False
    if len(nums) == 1:
        return True
    index = 0
    jumpFarthest = index + nums[index]
    if(jumpFarthest == 0):
        return False
    newjumpFarthest = 0
    for index in range(1, len(nums)):
        if jumpFarthest >= len(nums) - 1:
            return True
        if index <= jumpFarthest:
            tmp = index + nums[index]
            if newjumpFarthest < tmp:
                newjumpFarthest = tmp
        if index == jumpFarthest:
            if newjumpFarthest == jumpFarthest:
                return False
            jumpFarthest = newjumpFarthest
            newjumpFarthest = 0

#print(canJump([2,3,1,1,4]))
print(canJump([0,1]))