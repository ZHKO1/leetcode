# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def addTwoNumbers(self, l1, l2):
        """
        :type l1: ListNode
        :type l2: ListNode
        :rtype: ListNode
        """
        rest = 0
        if(l1.val + l2.val > 9):
            start = ListNode(l1.val + l2.val - 10)
            rest = 1;
        else:
            start = ListNode(l1.val + l2.val)
        tmp = start
        while((l1.next != None) | (l2.next != None)):
            l1 = l1.next if l1.next else ListNode(0)
            l2 = l2.next if l2.next else ListNode(0)
            if (l1.val + l2.val + rest > 9):
                newtmp = ListNode(l1.val + l2.val + rest - 10)
                rest = 1
            else:
                newtmp = ListNode(l1.val + l2.val + rest)
                rest = 0
            tmp.next = newtmp
            tmp = newtmp
        if(rest):
            newtmp = ListNode(rest)
            tmp.next = newtmp
        return start