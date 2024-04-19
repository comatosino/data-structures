class ListNode:
    def __init__(self, data):
        self.data = data
        self.next: ListNode = None


class SinglyLinkedList:
    def __init__(self) -> None:
        self._head: ListNode = None
        self._length = 0

    def __str__(self) -> str:
        return " -> ".join(map(str, self.to_list()))

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
            The elements of the LinkedList in a python list
        """
        r = []
        n = self._head
        while n is not None:
            r.append(n.data)
            n = n.next
        return r

    def clear(self) -> None:
        """
        Clears all elements from the list
        """
        self._head = None
        self._length = 0

    def append(self, data) -> None:
        """
        Add the given value to the end of the list

        Params
            data: the value to append
        """
        node = ListNode(data)
        if self._head is None:
            self._head = node
        else:
            curr = self._head
            while curr.next is not None:
                curr = curr.next
            curr.next = node
        self._length += 1

    def remove(self, data) -> bool:
        """
        Removes first found instance of given value

        Params
            data: The value to remove

        Returns
            True if element removed, else False
        """
        if self._head is None:
            return False

        if self._head.data == data:
            self._head = self._head.next
            self._length -= 1
            return True

        curr = self._head
        while curr.next is not None:
            if curr.next.data == data:
                curr.next = curr.next.next
                self._length -= 1
                return True
            curr = curr.next
        return False
