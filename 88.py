class Solution:
    def merge(self, nums1, m, nums2, n):
        """
        :type nums1: List[int]
        :type m: int
        :type nums2: List[int]
        :type n: int
        :rtype: void Do not return anything, modify nums1 in-place instead.
        """
        index_m = m - 1
        index_n = n - 1
        index_max = m + n - 1
        while((index_m>=0) | (index_n>=0)):
            if(index_m < 0):
                nums1[index_max] = nums2[index_n]
                index_n = index_n - 1
                index_max = index_max - 1
                continue
            if(index_n < 0):
                break;
            if(nums1[index_m] >= nums2[index_n]):
                nums1[index_max] = nums1[index_m]
                index_m = index_m - 1
            else:
                nums1[index_max] = nums2[index_n]
                index_n = index_n - 1
            index_max = index_max - 1