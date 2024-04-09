"""
stack.Stack
"""

from node import SinglyLinkedNode as Node


class Stack:
    """
    LIFO
    """

    def __init__(self) -> None:
        self.top: Node = None

    def __str__(self) -> str:
        return " -> ".join(map(str, self._list()))

    def _list(self) -> list:
        r = []
        n = self.top
        while n is not None:
            r.append(n.data)
            n = n.next
        return r

    def isempty(self):
        return self.top is None

    def peek(self):
        if self.top is None:
            return None
        return self.top.data

    def pop(self):
        if self.top is None:
            return None
        data = self.top.data
        self.top = self.top.next
        return data

    def push(self, data):
        node = Node(data)
        node.next = self.top
        self.top = node
