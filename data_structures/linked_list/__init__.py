class ListNode:
    def __init__(self, data) -> None:
        self.data = data
        self.next: ListNode = None


class LinkedList:
    def __init__(self):
        self.head: ListNode = None

    def append(self, data):
        node = ListNode(data)
        if self.head is None:
            self.head = node
        else:
            curr = self.head
            while curr.next is not None:
                curr = curr.next
            curr.next = node

    def prepend(self, data):
        new_head = ListNode(data)
        new_head.next = self.head
        self.head = new_head

    def delete(self, data):
        if self.head is None:
            return False

        if self.head.data == data:
            self.head = self.head.next
            return True

        curr = self.head
        while curr.next is not None:
            if curr.next.data == data:
                curr.next = curr.next.next
                return True
            curr = curr.next

        return False
