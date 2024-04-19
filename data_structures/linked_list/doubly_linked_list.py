class ListNode:
    def __init__(self, data):
        self.data = data
        self.next: ListNode = None
        self.prev: ListNode = None


class DoublyLinkedList:
    def __init__(self) -> None:
        self._head: ListNode = None
        self._tail: ListNode = None
        self._length = 0

    def __str__(self) -> str:
        return " <-> ".join(map(str, self.to_list()))

    @property
    def length(self) -> int:
        """
        Returns
            length of the list
        """
        return self._length

    def to_list(self) -> list:
        """
        Returns
            The elements of the LinkedList in a Python list
        """
        r = []
        n = self._head
        while n is not None:
            r.append(n.data)
            n = n.next
        return r
