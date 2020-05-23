class Solution:
    def maxArea(self, height):
        """
        :type height: List[int]
        :rtype: int
        """
        def getArea(low,high):
            return (high - low) * min(height[low], height[high])
        low = 0
        high = len(height) - 1
        Area_max = 0;
        while(low!=high):
            area = getArea(low,high)
            Area_max = area if area>Area_max else Area_max
            if(height[low] > height[high]):
                high = high - 1
            else:
                low = low + 1
        return Area_max