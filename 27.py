class Solution:
    def removeElement(self, nums, val):
        """
        :type nums: List[int]
        :type val: int
        :rtype: int
        """
        length = len(nums)
        insert = -1
        index = 0
        while(index < length):
            if(nums[index] == val):
                insert = index if insert < 0 else insert
            else:
                if(insert>= 0):
                    nums[insert] = nums[index]
                    nums[index] = val
                    insert = insert + 1
            index = index + 1
        return insert if insert>=0 else length