def multiply(num1, num2):
    """
    :type num1: str
    :type num2: str
    :rtype: str
    """
    def sum(num1,num2):
        over = 0
        result = []
        tmp1 = ""
        tmp2 = ""
        if(len(num1) >= len(num2)):
            tmp1 = num1[::-1]
            tmp2 = num2[::-1]
        else:
            tmp1 = num2[::-1]
            tmp2 = num1[::-1]
        for i in range(len(tmp1)):
            num1_value = int(tmp1[i])
            num2_value = int(tmp2[i]) if len(tmp2) - 1 >= i else 0
            sum = num1_value + num2_value + over
            over = sum // 10 if sum > 9 else 0
            result.append(str(sum % 10))
        if (over > 0):
            result.append(str(over))
        result.reverse()
        return "".join(result)
    def multiplySingle(num1,num2):
        #字符串和字符的相乘
        over  = 0
        result = []
        num2 = int(num2)
        for i in range(len(num1) - 1, -1, -1):
            num1_value = int(num1[i])
            sum = num1_value * num2 + over
            over = sum // 10 if sum >  9 else 0
            result.append(str(sum % 10))
        if(over > 0):
            result.append(str(over))
        result.reverse()
        return "".join(result)
    if num1 == "0" or num2 == "0":
        return "0"
    result = "0"
    for i in range(len(num2) - 1, -1, -1):
        result = sum(result, multiplySingle(num1,num2[i]) + ("0" * ((len(num2) - 1 - i)) if len(num2) - 1 - i > 0 else ""))
    return result


print(multiply("24","0"))