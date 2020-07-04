# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def mergeTwoLists(self, l1, l2):
        """
        :type l1: ListNode
        :type l2: ListNode
        :rtype: ListNode
        """
        if(l1 == None):
            return l2
        if(l2 == None):
            return l1
        if (l1.val <= l2.val):
            tmp = ListNode(l1.val)
            l1 = l1.next
        else:
            tmp = ListNode(l2.val)
            l2 = l2.next
        start = tmp
        tmp = start
        while((l1 != None) & (l2 != None)):
            if (l1.val <= l2.val):
                newListNode = ListNode(l1.val)
                l1 = l1.next
            else:
                newListNode = ListNode(l2.val)
                l2 = l2.next
            tmp.next = newListNode
            tmp = newListNode
        if(l1 == None):
            tmp.next = l2
        if(l2 == None):
            tmp.next = l1
        return start
