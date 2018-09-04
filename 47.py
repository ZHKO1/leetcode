class Solution:
    def permuteUnique(self, nums):
        """
        :type nums: List[int]
        :rtype: List[List[int]]
        """
        nums.sort()
        def get(nums):
            if (len(nums) == 0):
                return []
            if(len(nums) == 1):
                return [nums]
            result = []
            for i in range(len(nums)):
                if((i>0) & (nums[i] == nums[i - 1])):
                    continue
                tmpNums = nums[:]
                start = tmpNums.pop(i)
                for item in get(tmpNums):
                    result.append([start] + item)
            return result
        return get(nums)