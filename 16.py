def threeSumClosest(nums, target ):
    """
    :type nums: List[int]
    :rtype: List[List[int]]
    """
    if (len(nums) == 0):
        return None
    nums.sort()
    result = nums[0] + nums[1] + nums[2]
    first = nums.pop(0)
    while (len(nums) > 1):
        left = 0
        right = len(nums) - 1
        while ((left < right) & (left >= 0) & (right <= len(nums) - 1)):
            if (nums[left] + nums[right] == target  - first):
                return target
            elif (nums[left] + nums[right] < target - first):
                if(abs(first + nums[left] + nums[right] - target) < abs(result - target)):
                    result = first + nums[left] + nums[right]
                left = left + 1
            else:
                if(abs(first + nums[left] + nums[right] - target) < abs(result - target)):
                    result = first + nums[left] + nums[right]
                right = right - 1
        tmp = nums.pop(0)
        while ((tmp == first) & (len(nums) > 1)):
            tmp = nums.pop(0)
        first = tmp
    return result

print(threeSumClosest([-1,2,1,-4],1))