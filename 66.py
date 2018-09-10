def plusOne(digits):
    """
    :type digits: List[int]
    :rtype: List[int]
    """
    length = len(digits)
    tag = 1
    for index in range(length - 1 , -1, -1):
        if digits[index] + tag > 9:
            tag = 1
            digits[index] = (digits[index] + 1)%10
        else:
            digits[index] = digits[index] + tag
            tag = 0
    if tag == 1:
        digits.insert(0,1)
    return digits

print(plusOne([4,3,2,2]))