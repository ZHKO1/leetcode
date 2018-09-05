def findMedianSortedArrays(nums1, nums2):
    """
    :type nums1: List[int]
    :type nums2: List[int]
    :rtype: float
    """
    nums3 = nums1[:] + nums2[:]
    nums3.sort()
    length = len(nums3)
    if(length%2 == 1):
        return nums3[(length - 1) // 2]
    else:
        return (nums3[(length - 1) // 2] + nums3[(length - 1) // 2 + 1])/2

print(findMedianSortedArrays([1, 2], [3,4]))