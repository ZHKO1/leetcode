class Solution:
    def removeDuplicates(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        first = True
        index = 0;
        while(index<len(nums)):
            if (first == True):
                left = nums[0]
                first = False
                index = index + 1
            else:
                if (nums[index] == left):
                    nums.pop(index)
                else:
                    left = nums[index]
                    index = index + 1
        return len(nums)