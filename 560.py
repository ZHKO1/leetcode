class Solution:
    def subarraySum(self, nums, k):
        """
        EP560
        :type nums: List[int]
        :type k: int
        :rtype: int
        """
        number = 0;
        sum = 0;
        dit = {0:1}
        for i in range(len(nums)):
            sum = sum + nums[i]
            if((sum - k) in dit):
                number += dit[sum - k]
            if (sum in dit):
                dit[sum] += 1
            else:
                dit[sum] = 1
        return number