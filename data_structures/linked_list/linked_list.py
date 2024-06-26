from typing_extensions import Self

from list_node import ListNode
from append import append
from prepend import prepend
from remove import remove
from reverse import reverse


class LinkedList:
    def __init__(self, *args):
        self._head: ListNode = None
        self._size: int = 0
        for arg in args:
            if isinstance(arg, list):
                for el in arg:
                    self.append(el)
            else:
                self.append(arg)

    def __str__(self) -> str:
        return str(self._head)

    @property
    def head(self):
        return self._head

    @property
    def size(self):
        return self._size

    def clone(self):
        list_clone = LinkedList()
        node = self._head
        while node is not None:
            list_clone.append(node.data)
            node = node.next
        return list_clone

    def append(self, data) -> Self:
        self._head = append(self._head, data)
        self._size += 1
        return self

    def prepend(self, data) -> Self:
        self._head = prepend(self._head, data)
        self._size += 1
        return self

    def remove(self, data, every=False) -> Self:
        head, num_removed = remove(self._head, data, every=every)
        self._head = head
        self._size -= num_removed
        return self

    def reverse(self) -> Self:
        self._head = reverse(self._head)
        return self
