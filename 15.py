class Solution:
    def threeSum(self, nums):
        """
        :type nums: List[int]
        :rtype: List[List[int]]
        """
        if(len(nums) == 0):
            return []
        nums.sort()
        result = []
        first = nums.pop(0)
        while(len(nums) > 1):
            left = 0
            right = len(nums) - 1
            while((left<right) & (left>=0) & (right<=len(nums) - 1)):
                if(nums[left] + nums[right] == 0 - first):
                    result.append([first,nums[left],nums[right]])
                    left = left + 1
                    right = right - 1
                    while((nums[left] == nums[left-1]) & (left<len(nums) - 1)):
                        left = left + 1
                    while((nums[right] == nums[right+1]) & (right>0)):
                        right = right - 1
                elif(nums[left] + nums[right] < 0 - first):
                    left = left + 1
                else:
                    right = right - 1
            tmp = nums.pop(0)
            while((tmp == first) & (len(nums) > 1)):
                tmp = nums.pop(0)
            first = tmp
        return result