def reverse(x):
    """
    :type x: int
    :rtype: int
    """
    import math
    isPositive = True
    result = 0
    if (x < 0):
        x = -1 * x;
        isPositive = False
    array = []
    while(x > 9):
        result = result * 10 + (x % 10)
        x = x // 10
    result = result * 10 + (x % 10)
    result = result if isPositive else -1 * result
    if ((result > math.pow(2, 31) - 1) | (result < -1 * math.pow(2, 31))):
        return 0
    return result