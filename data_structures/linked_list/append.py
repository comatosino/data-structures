from list_node import ListNode


def append(head: ListNode, data):
    """
    Add data to tail of list
    """
    node = ListNode(data)
    if head is None:
        return node
    curr = head
    while curr.next is not None:
        curr = curr.next
    curr.next = node
    return head
