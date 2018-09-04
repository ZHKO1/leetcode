class Solution:
    def permute(self, nums):
        """
        :type nums: List[int]
        :rtype: List[List[int]]
        """
        def get(nums):
            if (len(nums) == 0):
                return []
            if(len(nums) == 1):
                return [nums]
            result = []
            for i in range(len(nums)):
                tmpNums = nums[:]
                start = tmpNums.pop(i)
                for item in get(tmpNums):
                    result.append([start] + item)
            return result
        return get(nums)