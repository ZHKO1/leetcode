class Solution:
    def searchMatrix(self, matrix, target):
        """
        :type matrix: List[List[int]]
        :type target: int
        :rtype: bool
        """
        nums = []
        for i in matrix:
            nums = nums + i
        low = 0
        high = len(nums) - 1
        while (low <= high):
            mid = (low + high) // 2
            if (target == nums[mid]):
                return True
            if (target > nums[mid]):
                low = mid + 1
            else:
                high = mid - 1
        return False