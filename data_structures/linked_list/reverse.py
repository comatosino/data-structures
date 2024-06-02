from list_node import ListNode


def reverse(node: ListNode, clone=False):
    return _reverse_clone(node) if clone else _reverse_inplace(node)


def _reverse_clone(head: ListNode) -> ListNode:
    new_head = None
    while head is not None:
        new_node = ListNode(head.data)
        new_node.next = new_head
        new_head = new_node
        head = head.next
    return new_head


def _reverse_inplace(head: ListNode) -> ListNode:
    prev_node = None
    curr_node = head
    while curr_node is not None:
        next_node = curr_node.next
        curr_node.next = prev_node
        prev_node = curr_node
        curr_node = next_node
    return prev_node  # new head
