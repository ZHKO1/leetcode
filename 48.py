def rotate(matrix):
    """
    :type matrix: List[List[int]]
    :rtype: void Do not return anything, modify matrix in-place instead.
    """
    def deal(left,right):
        matrix_long = right - left + 1;
        top_border = matrix[left][left : right + 1][:]
        bottom_border = matrix[right][left : right + 1][:]
        left_border = [matrix[i][left] for i in range(left,right + 1)][1:-1]
        right_border = [matrix[i][right] for i in range(left,right + 1)][1:-1]
        for i in range(matrix_long):
            matrix[left + i][right] = top_border[i]
            matrix[left + i][left] = bottom_border[i]
        for i in range(matrix_long - 2):
            matrix[left][left + 1 + i] = left_border[::-1][i]
            matrix[right][left + 1 + i] = right_border[::-1][i]
    if (len(matrix) == 0):
        return
    n = len(matrix) - 1
    left = 0
    right = n
    while(left<right):
        deal(left, right)
        left = left + 1
        right = right - 1

m = [
  [ 5, 1, 9],
  [ 2, 4, 8],
  [13, 3, 6]
]
rotate(m)
print(m)
