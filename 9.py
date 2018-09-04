class Solution:
    def isPalindrome(self, x):
        """
        :type x: int
        :rtype: bool
        """
        if(x<0):
            return False
        else:
            string = str(x)
            arr = []
            for s in string:
                arr.append(s)
            low = 0
            high = len(string) - 1
            while(low<=high):
                if(low == high):
                    return True
                else:
                    if(arr[low] == arr[high]):
                        low = low + 1
                        high = high - 1
                        continue
                    else:
                        return False
            return True;