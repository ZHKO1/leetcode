class Solution:
    def jump(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        if(len(nums) == 1):
            return 0
        index = 0
        jumpNumber = 1
        jumpFarthest = index + nums[index]
        newjumpFarthest = 0
        for index in range(1,len(nums)):
            if(jumpFarthest >= len(nums) - 1):
                return jumpNumber
            if(index <= jumpFarthest):
                tmp = index + nums[index]
                if(newjumpFarthest < tmp):
                    newjumpFarthest = tmp
            if(index == jumpFarthest):
                jumpFarthest = newjumpFarthest
                newjumpFarthest = 0
                jumpNumber  = jumpNumber + 1
        return jumpNumber