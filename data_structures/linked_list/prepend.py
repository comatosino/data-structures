from list_node import ListNode


def prepend(head: ListNode, data) -> ListNode:
    """
    add a new element to the front of the list
    """
    node = ListNode(data)
    node.next = head
    return node
