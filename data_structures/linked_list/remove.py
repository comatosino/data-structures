from list_node import ListNode


def remove(head: ListNode, data, every=False):
    """
    Returns:
        A tuple with the list's head and the number of elements removed
    """
    return _remove_every(head, data) if every else _remove_first(head, data)


def _remove_first(head: ListNode, data):
    """
    Remove first instance of given value
    """
    if head is None:
        return (None, 0)

    if head.data == data:
        head = head.next
        return (head, 1)

    curr = head

    while curr.next is not None:
        if curr.next.data == data:
            curr.next = curr.next.next
            break
        curr = curr.next

    return (head, 1)


def _remove_every(head: ListNode, data):
    """
    Remove all found instances of given value
    """
    if head is None:
        return (None, 0)

    num_removed = 0

    while head.data == data:
        head = head.next
        num_removed += 1

    curr = head

    while curr is not None and curr.next is not None:
        if curr.next.data == data:
            curr.next = curr.next.next
            num_removed += 1
        else:
            curr = curr.next

    return (head, num_removed)
