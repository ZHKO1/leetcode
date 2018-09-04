class Solution:
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        itemArray = range(len(nums))
        dit = {}
        for i in itemArray:
            if (nums[i] in dit):
                print(dit)
                return [dit[nums[i]], i]
            else:
                if ((target - nums[i]) not in dit):
                    dit[target - nums[i]] = i;