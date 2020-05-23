def trap(height):
    """
    :type height: List[int]
    :rtype: int
    """
    left = 0
    right = len(height) - 1
    minheight = 0
    result = 0
    while(left < right):
        l_v = height[left]
        r_v = height[right]
        if(l_v <= r_v):
            if l_v < minheight:
                result = result + minheight - l_v
            else:
                minheight = l_v
            left = left + 1
        else:
            if r_v < minheight:
                result = result + minheight - r_v
            else:
                minheight = r_v
            right = right - 1
    return result

print(trap([0,1,0,2,1,0,1,3,2,1,2,1]))
#print(trap([1]))
